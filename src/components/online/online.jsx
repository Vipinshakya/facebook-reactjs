import React from 'react'
import "../online/online.css"

export default function online({user}) {
  return (
    <li className="rightbarFriend">
  <div className="rightbarImgContainer">
    <img src={user.profilePicture} alt="" className="rightbarImg" />
    <span className="rightbarOnline"></span>
  </div>
  <span className="rightbarUserName"> {user.username}</span>
</li>
  )
}
