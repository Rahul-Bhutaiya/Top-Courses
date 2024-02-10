import React from 'react';
import { FcLike,FcLikePlaceholder  } from "react-icons/fc";
import {toast} from 'react-toastify';

const Card = ({course,likedCourses,setLikedCourses}) => {

    function iconClickHandler(id){
        if(likedCourses.length===0){
            setLikedCourses([id]);
            toast.success('Liked Successfully');
        }
        else{
            if(likedCourses.includes(id)){
                setLikedCourses((prev)=>prev.filter((eachCourseId)=>eachCourseId!==id));
                toast.warn('Like Removed');
            }
            else{
                setLikedCourses((prev)=>[...prev,id]);
                toast.success('Liked Successfully');
            }
        }

        
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img className='w-full min-h-[168px] object-cover' src={course.image.url} alt={course.image.alt}></img>
            <button onClick={()=>iconClickHandler(course.id)} className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 shadow-xl grid place-items-center'>
            {
                likedCourses.includes(course.id)?(<FcLike fontSize={'1.75rem'}/>):(<FcLikePlaceholder fontSize={'1.75rem'}/>)
            }
            </button>
        </div>
        <div className='p-4'>
            <h2 className='text-white font-semibold text-lg leading-6'>{course.title}</h2>
            <h3 className='text-white text-base mt-2'>
            {(course.description.length>=100)?(`${course.description.substr(0,100)}...`):(course.description)}
            </h3>
        </div>
    </div>
  )
}

export default Card;