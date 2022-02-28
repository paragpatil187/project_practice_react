import "./SignUp.css";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

function SignUp(){
    return (
        
        <div className="signup-div" >
            <SignUpForm />
            <div className="signup">
                   Have an account? <Link to="/" className="link"> <span style={{color:"#0095f6",fontWeight:"600"}}> Log in</span> </Link>

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
        
    )
}

export default SignUp;