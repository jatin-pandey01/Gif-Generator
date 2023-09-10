import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useGif from '../hooks/useGif';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  
  const {gif,loading,fetchData} = useGif('');
  const clickHandler = ()=>{
    fetchData();
  }

  return (
    <div className='w-1/2 rounded-lg my-10 flex flex-col items-center gap-y-5 border-gray-600 border-[2px] bg-green-500'>
      <h1 className='uppercase underline text-[100%] sm:text-2xl font-semibold mt-4'>a Random Gif</h1>
      {
        loading?<div className='spinner'></div>:<img src={gif} className='lg:w-[450px] w-4/5'  height='200px' loading='lazy'/>

      }
      <button onClick={clickHandler} className='w-9/12 mb-5 rounded-md py-2 text-[80%] sm:text-lg bg-gray-200'>GENERATE</button>
    </div>
  )
}
export default Random;