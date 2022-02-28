const express = require("express");
const app = express();
const cors = require("cors");
const User = require ("./models/user.model");
app.use(cors());

app.use(express.json());
// app.use((req, res, next) => {
    
//     res.header({"Access-Control-Allow-Origin": "*"});
    
//     next();
//   }) 
app.get("/user", async (req,res)=>{
  try{
      const user = await User.find().lean().exec();
      return res.send(user);

  }catch(e){
      return res.status(400).json({ status: "failed", message: e.message });
  }
})
  app.get("/user/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec();
        return res.send(user);

    }catch(e){
        return res.status(400).json({ status: "failed", message: e.message });
    }
})


const {register,login} = require ("./controllers/user.controller");

app.use("/signup", register);
app.use("/login", login);




const postController = require("./controllers/post.controller");

app.use("/post", postController);


const commentController = require ("./controllers/comment.controller")

app.use("/comment", commentController);

const likeController = require ("./controllers/like.controller");

app.use("/like", likeController);



module.exports= app;
