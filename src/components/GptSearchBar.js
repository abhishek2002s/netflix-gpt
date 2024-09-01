import React from 'react'
import { BG_URL } from '../utils/contant-url';
import Lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {

    const   langugaeKey = useSelector(store => store.config.lang)



  return (
    <div className=' flex justify-center '>
        <div className="absolute -z-20">
        <img className="object-cover" src={BG_URL} alt="bg-img"></img>
      </div>
        <form className=' w-5/12 flex  mt-[8%] bg-black  justify-center gap-3 rounded-md p-1 m-1 '>
            <input type='text' placeholder= {Lang[langugaeKey].gptSerachPlaceHolder} className='w-[90%] py-2  px-4  border border-gray-400 rounded-md'></input>
            <button className="font-semibold text-xl text-white py-2  px-4   rounded-md  text-center  bg-red-600 ">{Lang[langugaeKey].search}</button>
        </form>
    </div>
  )
};

export default GptSearchBar;