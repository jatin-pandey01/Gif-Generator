import React, { useEffect, useState } from 'react';
import useGif from '../hooks/useGif';


const Tags = () => {
  const [tag,setTag] = useState('');
  const {gif,loading,fetchData} = useGif(tag);
  const submitHandler = (e)=>{
    e.preventDefault();
    fetchData(tag);
  }

  const changeHandler = (e)=>{
    e.preventDefault();
    setTag(e.target.value);
  }

  return (
    <div className='w-1/2 rounded-lg my-10 flex flex-col items-center gap-y-5 border-gray-600 border-[2px] bg-blue-500'>
      <h1 className='uppercase underline text-[100%] sm:text-2xl font-semibold mt-4'>Random {tag} Gif</h1>
      {
        loading ? <div className='spinner'></div> : <img src={gif} className='lg:w-[450px] w-4/5' height='200px' />
      }
      <form className='flex flex-col w-full items-center gap-y-5' onSubmit={submitHandler}>
        <input type='text' value={tag} placeholder='Write gif name' onChange={changeHandler} className='w-9/12 mb-2 text-center rounded-md py-2 text-[80%] sm:text-lg bg outline-none px-5 text-lg font-normal'/>
        <button className='w-9/12 mb-5 rounded-md py-2 text-[80%] sm:text-lg bg-gray-200'>GENERATE</button>
      </form>
    </div>
  )
}

export default Tags;