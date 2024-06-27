import axios from "axios";
import { useEffect } from 'react'
import './App.css'
import HeaderBody from './components/HeaderBody'
import MainNewsCard from './components/MainNewsCard'
import NewsCard from './components/NewsCard'
import React, { useState } from 'react';

function App() {
  const [headlines, setHeadlines] = useState(null);

  useEffect(() => {
   
    const API_KEY = import.meta.env.VITE_SOME_KEY
    
    axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`)
    .then(data => setHeadlines(data.data.articles))
    .catch(error => console.log(error));
    },[]);

  return (
    <>
    
  <HeaderBody/ >
    <main className='py-10 bg-slate-200'>
      <div className='container mx-auto px-36'>
      <h2 className='pb-12 font-bold text-2xl text-gray-950'>Latest BBC NEWS...</h2>
      {headlines ? (
    <div className='grid grid-cols-3 gap-14'>
    <div className="col-start-1 col-span-2 row-start-1 row-span-2 ">
    <MainNewsCard article={headlines[0]} />
    </div>
     <div>
     <NewsCard article={headlines[1]} />
     </div>
      
     <div>
     <NewsCard article={headlines[2]} />
     </div>
     <div>
     <NewsCard article={headlines[3]} />
     </div>
     <div>
     <NewsCard article={headlines[4]} />
     </div>
     <div>
     <NewsCard article={headlines[5]} />
     </div>
  </div>
  ) : 
    <span>Loading..</span>
  }
      
      
      
      </div>
      
    </main>

    </>
  )
}

export default App
