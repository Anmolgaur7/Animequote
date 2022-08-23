import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import List1  from "../images/list.jpg";

export default function List() {
    const[a]=useState( ["Naruto", "Fairy Tail", "Assassination Classroom",
    "Hunter X Hunter",
    "One Piece", "Bleach", "Tokyo Ghoul:re", "Shingeki no Kyojin", "One Punch Man", "Naruto Shippuuden", "Boku no Hero Academia","Dragon Ball Super"])
    return (
        <>
        <h1 className='text-center text-black font-bold font-mono text-4xl m-10 '>Choose the anime of your choice ❤</h1>
        <div className='flex flex-wrap justify-center items-center h-1/2' >
        {a.map((e)=>{
        return <button className='text-white bg-black rounded-md p-4  font-mono font-bold text-2xl hover:bg-slate-800 m-5' ><Link to={`/list/quote/${e.replaceAll(" ","")}`}>{e}</Link></button>
        })}   
        </div>
        <div className=' flex justify-center mt-6'>
        <img src={List1} alt="Some error occured" className='w-1/2 h-1/2'/>
        </div>
        </>
    )
}
