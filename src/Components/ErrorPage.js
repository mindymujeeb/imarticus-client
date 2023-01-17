import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='page-not-found-div'>
      <p className='page-not-found-text'>Page Not Found</p>
      <Link className='link-page-not-found' to='/dashboard/courses'>home</Link>
    </div>
  )
}
