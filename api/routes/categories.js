const Category = require("../models/Category")
const router = require('express').Router();

router.post("/category",async(req,res)=>{
    const categories = new Category(req.body)
    try {
        const newCat = await categories.save()
        res.status(200).json(newCat)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;