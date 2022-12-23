import React from 'react'
import './sidebar.css'
import CloseFriend from '../closeFriend/closeFriend'
import { FaRss ,FaComment,FaVideo,FaBookmark,FaQuestion,FaShoppingBag,FaCalendar,FaDiscourse} from 'react-icons/fa'
import { Users } from '../../ProfileData'

const sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebarwrapper">
    <ul className="sidebarList">
      <li className="sidebarListitem">
<FaRss className='sidebarIcon'/>
<span className="sidebarIcontext">Feed</span>
      </li>

 <li className="sidebarListitem">
<FaComment className='sidebarIcon'/>
<span className="sidebarIcontext">Comments</span>
      </li>

 <li className="sidebarListitem">
<FaVideo className='sidebarIcon'/>
<span className="sidebarIcontext">Videos</span>
      </li>


 <li className="sidebarListitem">
<FaBookmark className='sidebarIcon'/>
<span className="sidebarIcontext">BookMarks</span>
      </li>

 <li className="sidebarListitem">
<FaQuestion className='sidebarIcon'/>
<span className="sidebarIcontext">Questions</span>
      </li>

 <li className="sidebarListitem">
<FaShoppingBag className='sidebarIcon'/>
<span className="sidebarIcontext">Jobs</span>
      </li>

 <li className="sidebarListitem">
<FaCalendar className='sidebarIcon'/>
<span className="sidebarIcontext">Events</span>
      </li>

 <li className="sidebarListitem">
<FaDiscourse className='sidebarIcon'/>
<span className="sidebarIcontext">Courses</span>
      </li>





















      
    </ul>
    <button className="sidebarbutton">Show More</button>
    <hr  className='sidebarHr'/>
    <ul className="sidebarFriendList">

{Users.map(u=>(
  <CloseFriend key={u.id} user={u}/>
))}

     


      

    </ul>
    </div>
    </div>
  )
}

export default sidebar
