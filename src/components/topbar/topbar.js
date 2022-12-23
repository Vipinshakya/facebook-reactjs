import React from 'react'
import "./topbar.css"
import { FaSearch ,FaUser,FaFacebookMessenger, FaBell} from 'react-icons/fa'



const topbar = () => {
  return (
    <div className='topbarContainer'>
  <div className='topbarLeft'>
    <span className='Logo'>Facebook</span>
  </div>
  <div className='topbarMain'>
    <div className='searchbar'>
        <FaSearch className='searchIcon'/>
        <input placeholder='Search for Friend, post or Video' className='SearchInput'></input>
    </div>

  </div>
<div className='topbarRight'>
<div className='topbarLinks'>
    <span className='topbarLink'>Homepage</span>
    <span className='topbarLink'>Timeline</span>
</div>
<div className='topbarIcons'>
  <div className='topbarIconItem'>
    <FaUser/>
    <span className='topbarIconBadge'>1</span>
    </div> 
     
 <div className='topbarIconItem'>
    <FaFacebookMessenger/>
    <span className='topbarIconBadge'>2</span>
    </div> 

<div className='topbarIconItem'>
    <FaBell/>
    <span className='topbarIconBadge'>11</span>
    </div> 
    <div>
         <img src="./assets/1.jpeg" alt='' className='topbarImg'/>
    
    
    </div>



    
</div>


</div>

    </div>
  )
}

export default topbar
