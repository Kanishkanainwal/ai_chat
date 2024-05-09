import React, { useState,useEffect } from 'react';
import { Myprovider } from './Components/AI_Context/AiContext';
import Main from './Components/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoPage from './Components/video_chat/VideoPage';
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
const App = () => {
  let heroData = [
    {text1: "WELCOME",text2: "to Echo-Talk"},
    {text1: "A.I. assistant to  ",text2: "assist you everytime"},
    {text1: "Communicate",text2: "with others online"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  const { history } = Myprovider();
  const [error, setError] = useState(false);
  const handleJoinButtonClick = () => {
    console.log('Join button clicked');
  };
  const router = createBrowserRouter([
   {
          path: '/',
          element:<Background playStatus={playStatus} heroCount={heroCount} />

        
   },
   {
    path:'/',
    element:<Hero
    setPlayStatus={setPlayStatus}
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
  />
   },
  
{

},
    {

      path: '/video/:id',
      element: <VideoPage />
    },
    {
      path:'/ai',
      element:<Main/>
    }
  ]);

  return (
    <div>
      <Navbar/>
      

      {error ? (
        <button onClick={handleJoinButtonClick}>Join</button>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
};

export default App;
