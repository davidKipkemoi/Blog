const Category = require("../models/Category")
const router = require('express').Router();

router.post("/",async(req,res)=>{
    const newCat = new Category(req.body)
    try {
        const savedcategory = await newCat.save()
        res.status(200).json(savedcategory)
    } catch (error) {
        res.status(500).json(error)
    }
})
// router.delete("/:id",async (req,res)=>{
//     if(req.body.catid === req.params.id){
//         try {
//             const deletedPost = Category.findByIdAndDelete(req.params.id)
//             try {
//                 await Category.findByIdAndDelete(req.params.id)
//                 res.status(200).json("category Deleted")
//             } catch (error) {
//                 res.status(500).json(error)
//             }
//         } catch (error) {
//             res.status(400).json("Cannot Find Category")
//         }
       
//     }
// })
router.get("/", async (req,res)=>{
        try {
            const fetchedCat = await Category.find()
            res.status(200).json(fetchedCat)
        } catch (error) {
            res.status(500).json(error)
        }
    
    
})

module.exports = router;