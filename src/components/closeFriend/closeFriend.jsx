import React from 'react'
import "../closeFriend/closeFriend.css"

export default function closeFriend({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="Friend2" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
        </li>
  )
}