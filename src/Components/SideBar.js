// react imports
import React from 'react'
import { Link } from 'react-router-dom'

// image imports
import sidebarImage from "../Images/imarticus-new-logo.svg"

export default function SideBar({text2}) {
  return (
    <div>
      <div className='sidebar'>
        <div className='sidebar-section-1'>
          <img className='sidebar-image' alt='help us img' src={sidebarImage}/>
        </div>
        <div className='courses-text-sidebar-div'>
          <Link className='courses-text-sidebar' to='/dashboard/courses/'>{text2}</Link>
        </div>
        <div className='bottom-section-sidebar'>
          <p className='facing-problems-text'>facing problems?</p>
          <div className='help-sidebar-div'>
            <Link className='help-sidebar' to='/dashboard/courses/'>get help</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
