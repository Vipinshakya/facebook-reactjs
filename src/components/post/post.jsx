import React, { useState } from 'react'
import { Users } from '../../ProfileData'
import './post.css'


export default function Post({post}) {
 const [like , setlike]=useState(post.like)
 const [isliked , setisliked]=useState(false)

const likeHandler= ()=>{
  setlike(isliked ? like-1 : like+1)
setisliked(!isliked)
}

  return (
    <div className="post">
  <div className="postWrapper">
    <div className="postTop">
<div className="postTopleft">
 <img className='postProfileimg' src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" /> 
<span className="postProfileName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
<span className="postProfileTime">{post.date}</span>




</div>
<div className="postTopright">
    
</div>

    </div>
    <div className="postCenter">
        <span className="postText">{post?.desc} </span>
 <img className="postImg" src={post.photo} alt="img-1" />
 </div>
    <div className="postBottom">

      <div className="postBottomLeft">
         <img className='likeIcon' src="./assets/heart.png" alt="png-1" onClick={likeHandler}/>
      <img src="./assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
      <span className="postLikeCounter">{like} people like it</span>
      </div>
      <div className="postBottomRight">
<span className="postCommentText">{post.comment} comments</span>
      </div>
     
    </div>
  </div>
  </div>
  )
}


