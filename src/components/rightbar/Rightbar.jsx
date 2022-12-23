import React from "react";
import { Users } from "../../ProfileData";
import Online from "../online/online";
import "./Rightbar.css";
const Rightbar = ({ profile }) => {
  const HomeRight = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayImg" />

          <span className="birthdayText">
            <b>Rohit shakya</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="./assets/ad.png" alt="" className="rightbarAd" />
        <h5 className="rightbarTitle">Online Friends</h5>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightInfokey">City</span>
            <span className="rightbarInfoValue">Bhopal</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightInfokey">From</span>
            <span className="rightbarInfoValue">Berasia</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightInfokey">Relationship</span>
            <span className="rightbarInfoValue">single</span>
          </div>
        </div>
        
<h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">


          <div className="rightbarFollowing">
            <img src="./assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbaFollowingName">Vipin shakya</span>
          </div>
        </div>
<div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbaFollowingName">Vipin shakya</span>
          </div>
        </div>

<div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbaFollowingName">Vipin shakya</span>
          </div>
        </div>


<div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="./assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbaFollowingName">Vipin shakya</span>
          </div>
        </div>





















      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ?   <ProfileRightbar />  : <HomeRight/>}
      
      </div>
    </div>
  );
};

export default Rightbar;
