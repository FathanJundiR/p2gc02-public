import { useState, useEffect } from 'react'
import {  RouterProvider } from "react-router-dom";
const url = 'https://phase2-aio.vercel.app';
import router from "./routers";

function App() {
  const [page, setPage] = useState('home');
  const [detail, setDetail] =  useState(0);
  let token = localStorage.access_token;

  // useEffect(() => {
  //   if (token) {
  //     setPage('home')
  //   } else {
  //     setPage('login');
  //   }
  // }, []);

  // console.log(detail);

  // return (
  //   <>
  //     {/* <RouterProvider/> */}
  //     <Navbar />
  //     {page === "home" && <Home url={url} setPage={setPage} setDetail={setDetail}/>}
  //     {page === "detail" && <Detail setPage={setPage} detail={detail}/>} 
  //   </>
  // )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
