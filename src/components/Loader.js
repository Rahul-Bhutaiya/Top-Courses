import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='flex flex-col items-center h-screen w-screen mt-28 gap-3'>
        <div className="spinner"></div>
        <h2 className='text-bgDark text-lg font-semibold'>Loading...</h2>
    </div>
  )
}

export default Loader;