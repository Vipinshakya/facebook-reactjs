import React from "react";
import "../share/share.css";
import { FaPhotoVideo, FaTag, FaSearchLocation, FaSmile } from "react-icons/fa";
const share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="./assets/person/1.jpeg" alt="img-1" className="shareImg" />

          <input
            placeholder="Whats in your mind"
            className="shareInput"
            type="text"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FaPhotoVideo style={{color:"red"}} className="shareIcon" />
              <span  className="shareOptionText">Photo or Video</span>
            </div>

            <div className="shareOption">
              <FaTag style={{color:"orange"}} className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <FaSearchLocation style={{color:"black"}} className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <FaSmile style={{color:"green"}} className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
<button className="shareButton">Share</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default share;
