import React, { useRef } from 'react'
import { API_OPTIONS, BG_URL } from '../utils/contant-url';
import Lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { addGptResult } from '../utils/gptSlice';
const GptSearchBar = () => {
  const dispatch = useDispatch();

    const   langugaeKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
   
    //movie search in TMDB
    const  serachMovieTMDB = async (movie) => {
      const response = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS );
      const data = await response.json();
      return data.results;
    }



    const handleGptSearchClick = async () => {
      // console.log(searchText.current.value);
      const moviesName = searchText.current.value;
      const answer =  await serachMovieTMDB(searchText.current.value);
      const res =  answer.map(movie => {
       return movie;
        });
        

      // console.log(res);
      dispatch(addGptResult({gptName : moviesName, moiveResult : res}));

           
    //   //************* whnever we buy openai Api then it works  ************* */
    //   //make an API call to GPT API and get movie results

    //   const gptQuery = "Act as a Movie Recommendation System and suggets some movies for the query " + searchText.current.value + ". only give me of 5 movies , comma separated. like the example result given ahead . Example Result : Gadar, Sholay, Don, Golmal, Ready"; 

    //  const gptReuslt =  await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });

    //   if(!gptReuslt.choices){
    //     alert("YOur open ai is not working");
    //   }

    // //   console.log(gptReuslt.choices?.[0]?.message.content);
    
    // //   //it will coverted into an array
    //  const gptMovies = gptReuslt.choices?.[0]?.message.content.split(","); 

    //   const PromiseArray  = gptMovies.map(movie => serachMovieTMDB(movie));
         
    //   const tmdbResult = await Promise.all(PromiseArray);
       

    //  dispatch(addGptResult({gptName : gptMovies, moiveResult : tmdbResult}));
      
    // //  const tmdbResult =  serachMovieTMDB(searchText.current.value);
    //   console.log(tmdbResult);

      /******** end here *********** */
    }


    

  return (
    <div className=' flex justify-center pt-[20%] md:pt-[15%] lg:p-[1%]'>
        <form className='w-full md:w-10/12  lg:w-5/12 flex  mt-[8%] bg-black  justify-center gap-3 rounded-md p-1 m-1 ' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type='text' placeholder= {Lang[langugaeKey].gptSerachPlaceHolder} className='w-[90%] md:py-2 py-1 px-2 md:px-4 lg:py-2  lg:px-4  border border-gray-400 rounded-md'></input>
            <button className="font-semibold text-xl text-white py-2  px-4   rounded-md  text-center  bg-red-600 " onClick={handleGptSearchClick}>{Lang[langugaeKey].search}</button>
        </form>
    </div>
  )
};

export default GptSearchBar;