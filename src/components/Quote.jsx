import React, { useEffect, useState } from 'react'
export default function Quote(props) {
  const [quote, setq] = useState([]);
  let fetchdata = async () => {
    let url = `https://animechan.vercel.app/api/quotes/anime?title=${props.title}`
    let data = await fetch(url);
    let pdata = await data.json()
    setq(pdata)
  }

  useEffect(() => {
    fetchdata()
  })
  return (
    <>

      <h1 className='text-center font-mono  font-bold text-black text-4xl m-4 bg-orange-400 p-4'>Quotes from {props.title}</h1>
      <div>
        {quote.map((e) => {
          return <div className='bg-yellow-300'><h1 className='font-bold font-sans text-black text-3xl m-2 bg-yellow-300 p-4'><i>{e.quote}</i></h1><h1 className='font-bold font-sans text-black text-xl m-2 ml-4' >{e.character}</h1></div>
        })}
      </div>
    </>
  )
}
