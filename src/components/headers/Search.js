import React from "react";
import tw from "twin.macro";
import { useState } from "react";
import "../../style.css";
const PrimaryAction = tw.input`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
const Search = ( { handleSearch } ) => {
 const [evntcheck,setEvntcheck]=useState();
 const [srch,setSrch]=useState();
  const searchInCourse=(e)=>{
    e.preventDefault();  
     const evnt=e.target.value;
    console.log(evnt);
     setEvntcheck(evnt);    
  }
  const done=(e)=>{
    fetch('http://localhost:8001/courses').then((res) => res.json())
    .then((data) => {
      console.log('data fetched');
      console.log(data);      
        setSrch(data.map((item,index)=>{
      
    if(item.title==evntcheck){  return(<div key={index}><h1>{item.title}</h1><p  key={index}>{item.chapter.map(chaptername=>{return(<div key={index}><h4  key={index}>{chaptername.name}</h4><p  key={index}>{chaptername.about}</p></div>)})}</p></div>)
  }else{return null}
   }))     
     }).catch((err) => {
       console.log(err.message);
       console.log('step2');
     });
  }
    return (
      <div className='search'>
          <PrimaryAction onChange={(e)=> searchInCourse(e)}
          placeholder='جست و جو'/>
          <button onClick={(e)=>done(e)}>انجام شد</button>     
        {srch}
      </div>
    )   
  }
  export default Search