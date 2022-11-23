import React, { useEffect, useState} from 'react'
import { getAllCourses } from '../../api/courseService'
import {Course} from './Course'

function Courses() {
  const [courses, setCourses] = useState([])


    useEffect(() => {
        const api = async () => {
          setCourses(await getAllCourses())
        }
        api()
    }, [])

  return (
    <div>
        <div className="container">
            {courses.map((course) => {
                    return (
                        <div>
                            <Course
                            courseId={course.courseId}
                            courseName={course.courseName}
                            courseDescription={course.courseDescription}/>
                        </div>
                    );
                })}
          </div>
        </div>
  )
}

export default Courses