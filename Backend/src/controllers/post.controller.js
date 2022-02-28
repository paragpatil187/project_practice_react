const express = require("express");

const router = express.Router();


const Post = require ("../models/post.model");

router.get("/", async (req,res)=>{
    try{
        const posts = await Post.find().populate("comments").populate("user").lean().exec();
        return res.send(posts);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }
})

router.post("/", async (req,res)=>{
    try{
        const post = await Post.create(req.body);
        return res.status(201).send(post);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }
    

});

router.patch("/comment/:id", async (req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,{$push: {commets:req.body.comment_id}}, {new:true});
        return res.status(201).send(post);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }
    

});

router.patch("/like/:id", async (req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, {$push:{likes: req.body.like_id}}, {new: true});
        return res.status(201).send(post);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }
    

});


router.get("/:id", async (req,res)=>{
    try{
        const posts = await Post.find({user:req.params.id}).lean().exec();
        return res.send(posts);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }
})

module.exports = router;