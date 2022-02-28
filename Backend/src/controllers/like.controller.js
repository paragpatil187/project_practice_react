const express = require("express");
const router = express.Router();

const Like = require("../models/like.model");

router.post("/", async (req,res)=>{
    try{
        const like = await Like.create(req.body);
        return res.status(201).send(like);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }

});

module.exports = router;