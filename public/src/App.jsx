import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Detail from './components/Detail'

function App() {
  const url = 'https://phase2-aio.vercel.app';
  const [page, setPage] = useState('login');
  let token = localStorage.access_token;

  useEffect(() => {
    if (token) {
      setPage('home')
    } else {
      setPage('login');
    }
  }, []);

  return (
    <>
      <Navbar />
      <Home url={url}/>
      <Detail />
    </>
  )
}

export default App
