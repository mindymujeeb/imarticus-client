// react imports
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// image imports
import courseImage from "../Images/Introduction-to-Machine-Learning.png"

export default function AllCourses() {
  let [name, setName] = useState('');
  let [batch, setBatch] = useState('');
  
  useEffect(() => {
    axios.get('https://imarticus-server-production.up.railway.app/actual-course').then((resp)=>{
      resp.data.map(({batch_id, name}) => {
        setName(name);
        setBatch(batch_id);
      })
    });
  }, [])

  return (
    <div>
      <div className='all-courses-div'>
        <p className='individual-course-heading'>individual course</p>
        <div className='course-all-courses'>
          <div className='section-1-course-all-courses'>
            <img className='image-all-courses' alt='course img' src={courseImage}/>
          </div>
          <div className='section-2-course-all-courses'>
            <p className='course-name-all-courses'>{name}</p>
            <p className='batch-id'>Batch: {batch}</p>
            <div className='percentage-div'>
              <p className='progress-bar'></p>
              <p className='progress-percentage'>0%</p>
            </div>
          </div>
          <div className='section-3-course-all-courses'>
            <Link className='start-course' to='/my-courses/imarticus-student-testimonials'>start course</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
