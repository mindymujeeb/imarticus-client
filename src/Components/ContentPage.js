// react imports
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'

// image imports
import playButton from "../Images/play-button.svg"

export default function ContentPage() {
  let params = useParams();
  let [Name, setName] = useState('');
  let [videos, setVideos] = useState([]);
  let [Time, setTime] = useState([]);
  let [Modules, setModules] = useState([]);

  useEffect (() => {
    axios.get('https://imarticus-server-production.up.railway.app/actual-course').then((resp)=>{
      resp.data.map(({name, modules, time}) => {
        setName(name);
        setModules(modules);
        setTime(time);
      })
    });
    
    axios.get('https://imarticus-server-production.up.railway.app/videos').then((resp)=>{
      setVideos(resp.data)
    });
  },[])
    
  return (
    <div className='course-video-div-complete'>
      <p className='navbar-replaced-text'>{Name}</p>
      <div className='course-video-div'>
        <div className='course-video-section-1'>
          <div className="accordion accordian-div-course" id="accordionExample">
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
                    <Link to={`/dashboard/courses/machine-learning/content/63c66547a99988c2401b764b`} className='link-video' ><p className='video-text-accordian-body'>listen to their perspectives</p></Link>
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
                    <Link to={`/dashboard/courses/machine-learning/content/63c66559a99988c2401b764d`} className='link-video' ><p className='video-text-accordian-body'>listen to their perspectives</p></Link>
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
                  <Link to={`/dashboard/courses/machine-learning/content/63c665daa99988c2401b764f`}className='link-video' ><p className='video-text-accordian-body'>listen to their perspectives</p></Link>
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
                  <Link to={`/dashboard/courses/machine-learning/content/63c6660ca99988c2401b7651`}className='link-video' ><p className='video-text-accordian-body'>listen to their perspectives</p></Link>
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
                  <Link to={`/dashboard/courses/machine-learning/content/63c6662aa99988c2401b7653`}className='link-video' ><p className='video-text-accordian-body'>listen to their perspectives</p></Link>
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
                  <Link to={`/dashboard/courses/machine-learning/content/63c6663ea99988c2401b7655`}className='link-video' ><p className='video-text-accordian-body'>listen to their perspectives</p></Link>
                  <p className='time-text-accordian-body'>{Time[4]}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='course-video-section-2'>
          <p className='course-page-location-text'><Link to='/dashboard/courses'>all courses</Link> &gt; <Link to='/dashboard/courses/machine-learning'>{Name}</Link> &gt; content</p>
          {
            videos.map(({_id, url})=>{
              if(params.id === _id){
                return(
                  <div key={_id}>
                    <iframe  width="" height="" className='course-video' src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                )
              }
            })
          }
          
        </div>
      </div>
    </div>
  )
}