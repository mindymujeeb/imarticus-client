// react imports
import React, { useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'

// images
import courseImage from "../Images/Introduction-to-Machine-Learning.png"
import playButton from "../Images/play-button.svg"

export default function Course() {
  let [Name, setName] = useState('');
  let [Batch, setBatch] = useState('');
  let [Time, setTime] = useState([]);
  let [Modules, setModules] = useState([]);

  useEffect (() => {
    axios.get('https://imarticus-server-production.up.railway.app/actual-course').then((resp)=>{
      resp.data.map(({batch_id, name, modules, time}) => {
          setName(name);
          setBatch(batch_id);
          setModules(modules);
          setTime(time);
      })
    });
  },[])

  return (
    <div className='course-page'>
      <p className='all-courses-page-location-text'><Link to='/'>all courses</Link> &gt; <Link to='/my-courses/imarticus-student-testimonials/'>{Name}</Link></p>
      <div className='overview-of-course-div'>
        <div className='course-div'>
          <div className='section-1-course-all-courses'>
            <img className='image-all-courses' alt='help us img' src={courseImage}/>
          </div>
          <div className='section-2-course-all-courses'>
            <p className='course-name-all-courses'>{Name}</p>
            <p className='batch-id'>Batch: {Batch}</p>
            <p className='progress-percentage-course'>0% complete</p>
          </div>
        </div>
        <div className="accordion accordian-div" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {Modules[0]}
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className='accordian-body-div'>
                  <img className='image-play-button' alt='help us img' src={playButton}/>
                  <Link to={`/my-courses/imarticus-student-testimonials/63c66547a99988c2401b764b`} className='link-video' ><p className='video-text-accordian-body'>litsen what they said about imarticus</p></Link>
                  <p className='time-text-accordian-body'>{Time[0]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                {Modules[1]}
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse hide" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className='accordian-body-div'>
                  <img className='image-play-button' alt='help us img' src={playButton}/>
                  <Link to={`/my-courses/imarticus-student-testimonials/63c66559a99988c2401b764d`} className='link-video' ><p className='video-text-accordian-body'>litsen what they said about imarticus</p></Link>
                  <p className='time-text-accordian-body'>{Time[1]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                {Modules[2]}
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse hide" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className='accordian-body-div'>
                <img className='image-play-button' alt='help us img' src={playButton}/>
                <Link to={`/my-courses/imarticus-student-testimonials/63c665daa99988c2401b764f`}className='link-video' ><p className='video-text-accordian-body'>litsen what they said about imarticus</p></Link>
                <p className='time-text-accordian-body'>{Time[2]}</p>
              </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                {Modules[3]}
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse hide" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className='accordian-body-div'>
                <img className='image-play-button' alt='help us img' src={playButton}/>
                <Link to={`/my-courses/imarticus-student-testimonials/63c6660ca99988c2401b7651`}className='link-video' ><p className='video-text-accordian-body'>litsen what they said about imarticus</p></Link>
                <p className='time-text-accordian-body'>{Time[3]}</p>
              </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                {Modules[4]}
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse hide" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className='accordian-body-div'>
                <img className='image-play-button' alt='help us img' src={playButton}/>
                <Link to={`/my-courses/imarticus-student-testimonials/63c6662aa99988c2401b7653`}className='link-video' ><p className='video-text-accordian-body'>litsen what they said about imarticus</p></Link>
                <p className='time-text-accordian-body'>{Time[4]}</p>
              </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                {Modules[5]}
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse hide" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className='accordian-body-div'>
                <img className='image-play-button' alt='help us img' src={playButton}/>
                <Link to={`/my-courses/imarticus-student-testimonials/63c6663ea99988c2401b7655`}className='link-video' ><p className='video-text-accordian-body'>litsen what they said about imarticus</p></Link>
                <p className='time-text-accordian-body'>{Time[4]}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}