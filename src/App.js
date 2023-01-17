// react imports
import React, { useEffect, useState } from 'react'
import  { Routes, Route } from 'react-router-dom'
import axios from 'axios'

// external css link
import './App.css'

// component imports
import Navbar from './Components/Navbar';
import Home from './Components/AllCourses';
import Course from './Components/Course';
import ErrorPage from './Components/ErrorPage';
import ContentPage from './Components/ContentPage';

// App Function
export default function App() {
  let [name, setName] = useState('');

  useEffect(() => {
    axios.get('https://imarticus-server-production.up.railway.app/actual-course').then((resp)=>{
      resp.data.map(({name}) => {
        setName(name);
      })
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <><Navbar text='my courses' text2='my courses' /><Home /></>
        } />
        <Route exact path='/my-courses/imarticus-student-testimonials' element={
          <><Navbar text2='course' text={name} /><Course /></>
        } />
        <Route exact path='/my-courses/imarticus-student-testimonials/:id' element={
          <ContentPage />
        } />
        <Route path='*' element={
          <><Navbar text='Oops.....' text2='home' /><ErrorPage /></>
        } />
      </Routes>
    </div>
  );
}

