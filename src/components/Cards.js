import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses=props.courses;
    let currentFilter=props.currentFilter;

    const [likedCourses,setLikedCourses]=useState([]);

    function getSingleCourseAsArray(){

        if(currentFilter==='All'){
            const courseData=[];
            Object.values(courses).forEach((eachCategory)=>{
                eachCategory.forEach((eachCourse)=>courseData.push(eachCourse));
            })
            return courseData;
        }
        else{
            return courses[currentFilter];
        }
        
    }
  return (
    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4 mb-4 min-h-[50vh]'>
        {getSingleCourseAsArray().map((course)=>{
            return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })}
    </div>
  )
}

export default Cards;