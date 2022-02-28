const express = require("express");
const router = express.Router();

const Comment = require("../models/comment.model");

router.post("/", async (req,res)=>{
    try{
        const comment = await Comment.create(req.body);
        return res.status(201).send(comment);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }

});

module.exports = router;