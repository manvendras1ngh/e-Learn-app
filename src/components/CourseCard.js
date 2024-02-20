import { Link } from "react-router-dom";
import { useState } from "react";

import "../App.css";

export default function CourseCard({courseModel}){
    const [searchQuery, setSearchQuery] = useState("");

    const filterCourse = courseModel.filter(({instructor, name}) => {
        const searchValue = searchQuery.toLowerCase();
        const lowerCaseInstructorName = instructor.toLowerCase();
        const lowerCaseName = name.toLowerCase();
        return lowerCaseInstructorName.includes(searchValue) || lowerCaseName.includes(searchValue);
    });

    const searchResultCourse = filterCourse.map(({id, name, description, duration, thumbnail, instructor}) => {
        return(
            <Link to={`/course/${id}`} key = {id}                 className="card__link">
                <div className="card__wrap">
                    <h1>{name}</h1>
                    <img alt={name} src={thumbnail}/>
                    <p>{description}</p>
                    <div className="card__details">
                        <p>~{instructor}</p>
                        <p>{duration}</p>
                    </div>
                </div>
            </Link>
        );
    });

    return(
        <main>
            <input
                className="card__input"
                type="text"
                placeholder = "Search using Course/Instructor Name"
                value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="card">
                {searchResultCourse}
            </div>
        </main>
        
    );
};