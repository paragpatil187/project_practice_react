import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import "./styles/Profile.css";
import Gallery from "../components/gallery/Gallery"
import { Avatar } from "@mui/material";

function Profile() {
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
  return (
    <>
    <Navbar/>
      <div className="profile_main_container">
        <div className="profile_wrapper">
          <div className="profile_picture">
            <Avatar
              style={{ width: "9rem", height: "22vh" }}
              className="suggestion_user_avatar"
              alt="Remy Sharp"
              src={user?.profile_picture}
            />
          </div>
          <div className="profile_details">
            <div className="user_name_edit_wrapper">
              <div className="user_name">{user?.username}</div>
              <div className="edit_btn_div">
                <button className="edit_btn">Edit Profile</button>
              </div>
              <div className="setting_btn">
                <svg
                  aria-label="Options"
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="post_follower_wrapper">
              <div className="posts">
                <strong>11</strong> posts
              </div>
              <div className="followers">
                <strong>5</strong>followers
              </div>
              <div className="following">
                <strong>39</strong> following
              </div>
            </div>
            <div className="bio_wrapper">
              <div className="profile_name">
                <strong>{user.full_name}</strong>
              </div>

              <div>
                👉Self Reliant 👈. 😎 👉Nature lover 👈 Visionary forever 🕵️ 👉I
                cook pretty good 🤗wanna Taste 😋
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
     
      <div className="posts_wrapper">
    
          <Gallery/>
        </div>

    </>
  );
}

export default Profile;
