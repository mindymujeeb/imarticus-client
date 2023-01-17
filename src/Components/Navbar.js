// react imports
import React from 'react'
import SideBar from './SideBar'

// import images
import helpImage from "../Images/Support.svg"
import userImage from "../Images/Profile-01.svg"
import downArrowImage from "../Images/downarrow.png"


export default function Navbar({text, text2}) {
  return (
    <div>
      <div className='navbar'>
        <p className='navbar-text1'>{text}</p>
        <div className='navbar-section-2'>
          <div className='navbar-help-div'>
            <img className='navbar-image' alt='help us img' src={helpImage}/>
            <p className='navbar-help-text'>get help</p>
          </div>
          <div className='navbar-user-div'>
            <img className='navbar-image' alt='avatar img' src={userImage}/>
            <p className='navbar-user-text'>user</p>
            <img className='navbar-image-downarrow' alt='down arrow img' src={downArrowImage}/>
          </div>
        </div>
      </div>
      <SideBar text2={text2} />
    </div>
  )
}
