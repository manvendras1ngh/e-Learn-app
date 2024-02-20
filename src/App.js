import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import CourseCard from './components/CourseCard';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';
import {fakeFetch} from "./api/fakeApi";
import profileImg from "./images/profile.svg";
import homepage from "./images/home.svg";

function App() {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    const fetchCourseDataset = async() => {
      try{
        const res = await fakeFetch("https://elearning.com/courses");
        if(res.status === 200){
          setCourseData(res.courseData);
        }
      }catch(error){
        console.error(error);
      }
    };
    fetchCourseDataset();
  },[])
  return (
    <div className="main">
      <nav>
        <h1>eLearning</h1>
        <div className="main__nav-link">
          <Link to="/">
            <img src={homepage} alt = "homepage link"/>
          </Link>
          <Link to="/dashboard">
            <img src={profileImg} alt="student dashboard link"/>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path = "/" element = { <CourseCard courseModel = {courseData}/> }/>
        <Route path = "/course/:courseID" element = { <CourseDetails courseModel = {courseData}/> }/>
        <Route path = "/dashboard" element = {<StudentDashboard courseModel = {courseData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
