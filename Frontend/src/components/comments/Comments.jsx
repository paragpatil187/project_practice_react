import React, { useState,useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentInput from "./CommentInput";

function Comments(name) {
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    let token = JSON.parse (localStorage.getItem ('user'));
    console.log(token);
    

    fetch(`https://instagram-backend-dipu1-app.herokuapp.com/user/${token[0]}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
    },[]);
 console.log(user);


  const [commentsList, setcommentsList] = useState([]);

  const dataTransfer = (comment) => {
    let newcommentsList = [...commentsList,  comment];
    setcommentsList(newcommentsList);
    console.log(newcommentsList);
  };
  return (
    <>
      {commentsList.map((comment) => {
        return (
            <div style={{margin:"0 2% 0 3%", display:"flex",justifyContent:"space-between"}}>
               <div>
                 <strong>{user.username}</strong>
                 {" "}
                   {comment}
               </div>
               <div>
                   <FavoriteBorderIcon style={{width:"1rem"}}/>
               </div>
            </div>
        )
      })}
      <CommentInput func={dataTransfer} />
    </>
  );
}

export default Comments;
