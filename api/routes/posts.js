const router = require('express').Router();
// const User = require("../models/User");
const Post = require('../models/Post');
// const Category = require("../models/Category")


/* Create Post*/
router.post('/', async (req,res) =>{
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json('Post created')
    } catch (error) {
        res.status(500).json(error)
    }
});
/* Update Post*/
router.put("/:id", async (req,res)=>{
    try { 
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try {
                const savedPost = await Post.findByIdAndUpdate(req.params.id,
                    {$set:req.body},
                    {new:true}
                )
                res.status(200).json(savedPost)
            } catch (error) {
                res.status(500).json(error)
            }
        }else{
            res.status(401).json("Invalid Credentials!!!")
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

/* Delete Post*/
router.delete("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post Deleted")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(401).json("Invalid Credentials")

        }
    } catch (error) {
        res.status(500).json(error)
    }
});
   
 /* Get Post*/
   router.get("/:id", async (req,res) =>{  
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
   });
    
    /* Get All Post*/
 router.get("/", async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(catName){
            posts = await Post.find({
                categories:{$in:[catName]}
            })
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts)

    } catch (error) {
        res.status(200).json(error)

    }
    
 });
 module.exports = router;