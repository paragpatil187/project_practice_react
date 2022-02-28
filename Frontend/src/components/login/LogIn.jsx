import { useEffect, useState } from "react";
import "./LogIn.css";
import LogInForm from "./LogInForm";
import {Link, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isSignup } from "../../features/signup/actions"


function LogIn(){
    let images = ["https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg","https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg","https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg","https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg","https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"]
    const [img,setImg] = useState(0);
    const {signup} = useSelector((state)=>({
        signup:state.signup.signup
    }))
    const dispatch= useDispatch();
    
    const handleSignupClick = ()=>{
        
        dispatch(isSignup(false));

    }

    useEffect(()=>{
        return < Navigate to={"/signup"} />;

    },[signup])
    
    useEffect(()=>{
        let id = setInterval(()=>{

            setImg((prev)=>{
                if(prev===4){
                    return 0;
                }
                return prev+1;
            });
        },2000);
        return ()=>{
            clearInterval(id);
        }
        
    },[])
    
    return (
        <div className="main">
            <div className="home-img">
                <div className="slideshow">

                    <img src={images[img]} alt="demo_image" />
                    {/* <img src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" alt="" />
                    <img src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" alt="" />
                    <img src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" alt="" />
                    <img src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" alt="" /> */}
                </div>
                
            </div>
            <div >
                <div className="login-box">
                    <h1>Instagram</h1>
                    <LogInForm />
                    <div className="or">
                        <div><hr /></div>
                        <div>OR</div>
                        <div><hr /></div>
                    </div>
                    <div style={{color:"#385185",fontWeight:"500"}}>Log in with Google</div>
                    <div style={{fontSize:"12px"}}>Forget password?</div>
                  

                </div>
                <div className="signup">
                   Don't have an account? <Link to="/signup" className="link"><span style={{color:"#0095f6",fontWeight:"600"}}  onClick={handleSignupClick}> Sign up</span></Link>  

                </div>
                Get the app.
                <div className="app-store">
                    <div>
                        <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo" target="_blank" rel="noopener noreferrer">
                          <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
                        </a>
                        
                    </div>
                    <div>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7737A8EA-63ED-431F-888B-9CA9FB2FA453%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank" rel="noopener noreferrer">
                          <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
                        </a>
                        
                    </div>

                </div>


            </div>

            

        </div>
    )
}

export default LogIn;