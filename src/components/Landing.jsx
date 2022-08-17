import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import logo from "../images/logo.png";

export default function landing() {
  return (
  <>
  <div className='flex'>
  <div className='h-screen w-3/5'>
  <img src ={Image1} alt="some error occured" className='h-1/2 w-full border-4 border-yellow-400 '/>
  <img src ={Image2} alt="some error occured" className='h-1/2  w-full border-4 border-yellow-400 '/>
  </div>
  <div className='flex-col justify-center items-center bg-slate-100'>
  <img src={logo} alt="some error occured" className='w-3/4 m-auto mt-32'/>
  <h1 className='m-14 text-2xl font-bold font-mono text-black text-center border-4 border-dashed border-black'>Anime-quote is a utility which can provide u quotes of any anime</h1>
  <div className='flex justify-center items-center'>
  <button className='text-white bg-black rounded-md p-4  font-mono font-bold text-2xl hover:bg-slate-800'><Link to='/list'>Get Started</Link></button>
  </div>
  </div>
  </div>
  </>
  )
}
