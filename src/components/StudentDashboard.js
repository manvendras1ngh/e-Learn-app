import { useState } from "react";

import profileImg from "../images/profile.svg"

export default function StudentDashboard({courseModel}){
    const [courseComp, setCourseComp] = useState(65);
    const [markComplete, setMarkComplete] = useState("Mark Complete");

    const handleMarkComplete = () => {
        setCourseComp(100);
        setMarkComplete("Completed");
    }

    const findCourse = courseModel.filter(({students}) =>  {
        return students.some(({name}) => name === "Manav Singh");
    });

    const enrolledCourse = findCourse.map(({name, instructor, thumbnail, due, progress}) => {
        return(
            <section className="profile__course">
                <img className="profile__course-image" alt="course" src={thumbnail}/>
                <h4 className="profile__course-name">{name}</h4>
                <p className="profile__course-instructor">Instructor: {instructor}</p>
                <p className="profile__course-due-date">Due date: 29th Feb, 2024</p>
                <label for="course-progress-bar">Progress: </label>
                <progress id="course-progress-bar" max={100} value={courseComp}></progress>
                <div onClick={handleMarkComplete}
                className="profile__course-complete">{markComplete}</div>
            </section>
        );
    })
    return(
        <div className="profile">
            <section className="profile__container">
                <img className="profile__image" alt="student alias" src={profileImg}/>
                <div className="profile__info">
                    <h2 className="profile__name">Manav Singh</h2>
                    <p className="profile__bio">A computer science graduate, who loves to code and play with computers.</p>
                    <p className="profile__mail">Email: manav@example.com</p>
                </div>
            </section>

            <h3 className="profile__course-list-heading">List of Enrolled Courses: </h3>

            <div className="profile__course-list">
                {enrolledCourse}
            </div>
        </div>
    );
}