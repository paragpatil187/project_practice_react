import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LogIn.css";
import { isError,isLoading,isLogin } from "../../features/login/actions"
import { Navigate, useRoutes } from "react-router-dom";

function LogInForm(){
    let [formData,setFormData] = useState({});
    const { isloading, login, iserror } = useSelector((state)=>({
        isloading: state.login.isloading,
        login: state.login.login,
        iserror: state.login.iserror
    }));
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        const {name,value} = e.target;

        formData[name] = value;
        setFormData({...formData});
        console.log(formData)

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("aaaaaa")
        dispatch(isLoading());
        console.log(isloading);
        fetch("https://instagram-backend-dipu1-app.herokuapp.com/login",{
            
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                
                
            }
        })
        .then(res => res.json())
        .then(data =>{
            
            if(data.status==="failed"){
                dispatch(isError(true));
                console.log("d",data);
            }else{
                 dispatch(isLogin(true));
                 console.log(data);
                 if(localStorage.getItem("user")===null){
                     localStorage.setItem("user",JSON.stringify([]));
                 }

                 let user = JSON.parse(localStorage.getItem("user"));
                 user=[];
                 user.push(data._id);
                 localStorage.setItem("user",JSON.stringify(user));

                
                
            }
        })
        .catch(()=>{
            dispatch(isError(true));
        })

    }
    if(login){
        return <Navigate to={"/home"} />
    }
    return (
        <div className="login-form">
            <form  onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="phone no, email or username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                <input type="submit" value="Log In" />
            </form>

        </div>
    )
}

export default LogInForm;