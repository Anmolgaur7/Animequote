import React,{useEffect,useState} from 'react'
export default function Quote(props) 
{
let[quote,setq]=useState(null);

useEffect(() => {
    fetch("https://animechan.vercel.app/api/quotes/anime?title=Naruto")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setq(data.quote))
  },[])
  return (
    <div>
    {quote.map((e)=>{
    return <h1>{e.quote}</h1>
    })}
    </div>
  )
}
