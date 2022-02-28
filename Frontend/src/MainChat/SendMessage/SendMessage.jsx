import "./Sendmessage.css"

const SendMessage = ({user,message, classs})=>{
    
     if(user){
          return <div className={`messageBox ${classs}`}>
               <img className="userImg" style={{width:"20px",height:"20px",borderRadius:"50%"}} src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="profile_img" />
         {` ${message}`} 
      
     </div>
       }else{
          return <div className={`messageBox ${classs}`}>
          {` ${message}` } 
     </div>
       }
        
}


export {SendMessage}