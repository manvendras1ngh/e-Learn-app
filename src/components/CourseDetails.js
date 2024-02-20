import { useParams, Link } from "react-router-dom";

export default function CourseDetails({courseModel}) {
    const { courseID } = useParams();

    const course = courseModel.find(({id}) => id === courseID);

    const courseDetails = ({id, name, instructor, description, enrollmentStatus, thumbnail, duration, schedule, location, prerequisites, syllabus }) => {
        return(
            <div key={id} className="course__section">
                <img alt={name} src={thumbnail}/>
                <h1>{name}</h1>
                <p>{description}</p>
                <p><strong>Prerequisites:</strong> {prerequisites}</p>
                <p><strong>Course Schedule:</strong> {schedule}</p>
                <p><strong>Instructor:</strong> {instructor}</p>
                <div className="course__syllabus">
                    <details>
                        <summary>Course Syllabus</summary>
                        <ul className="course__list">
                            {syllabus.map(({week, topic, content}) => {
                                return(
                                    <li key={week}>
                                        <p className="course__schedule">week {week}</p>
                                        <p className="course__topic">{topic}</p>
                                        <p className="course__description">{content}</p>
                                    </li>
                                );
                            })}
                            
                        </ul>
                    </details>
                </div>
                <p>Course will be conducted {location}</p>
                <p><strong>Schedule:</strong> {schedule}</p>
                <p><strong>Enrollment Status:</strong> {enrollmentStatus}</p>
                <Link className="course__link" to="/">All Courses</Link>
            </div>
        );
    }
    return (
        <div className="course">
            {course ? 
                courseDetails(course) 
                : 
                <div>
                    <h2>Failed loading data!</h2>
                    <Link to="/">Click here to redirect to homepage</Link>
                </div>
            }
        </div>
    );
};