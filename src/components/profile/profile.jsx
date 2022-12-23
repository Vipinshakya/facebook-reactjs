import React from "react";
import "./profile.css";
import Topbar from "../topbar/topbar";
import Feed from "../feed/feed";
import Sidebar from "../sidebar/sidebar";
import Rightbar from "../rightbar/Rightbar";

export default function profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRight">
          <div className="profileTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="./assets/post/7.jpeg"
                alt=""
              />
              <img
                src="./assets/person/6.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Vipin shakya</h4>
              <span className="profileInfoDesc">
                live your life as you want
              </span>
            </div>
          </div>
          <div className="profileBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
