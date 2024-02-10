import React from "react";
import FilterContainer from "./components/FilterContainer";
import Cards from "./components/Cards";
import { filterData,apiUrl } from "./data";
import { useState } from "react";
import {toast} from 'react-toastify';
import { useEffect } from "react";
import Loader from "./components/Loader";

const App = () => {

  const [courses,setCourses]=useState(null);
  const [currentFilter,setCurrentFilter]=useState('All');
  const [loaderState,setLoaderState]=useState(true);

  async function getData(){
    try{
      setLoaderState(true);
      const responce=await fetch(apiUrl);
      const data=await responce.json();
      setCourses(data.data);
      setLoaderState(false);
    }
    catch{
      toast.error('Network Error');
    }
  }


  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="h-screen w-screen flex flex-col  overflow-x-hidden">
      <h1 className="bg-bgDark py-4 text-center text-white text-3xl font-bold">Top Courses</h1>
      
      <div className="flex-1 bg-bgDark2">
        <FilterContainer filterData={filterData} setCurrentFilter={setCurrentFilter} currentFilter={currentFilter}/>

        {
          loaderState?(<Loader/>):(<Cards courses={courses} currentFilter={currentFilter}/>)
        }
      </div>

    </div>
  )
};

export default App;
