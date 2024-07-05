import { useState } from 'react';
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './views/Login'
import EditProduct from './components/EditProduct'
import Products from './views/Products'
import Form from './components/Form'
import Categories from './views/Categories'
import { RouterProvider } from 'react-router-dom';
import router from './routers'
const url = 'https://phase2-aio.vercel.app';

function App() {
  // const [page, setPage] = useState('login');
  // let token = localStorage.access_token;

  // useEffect(() => {
  //   if (token) {
  //     setPage('products')
  //   } else {
  //     setPage('login');
  //   }
  // }, []);

  // console.log(page);

  // return (
  //   <>
  //     <Navbar page={page} setPage={setPage}/>
  //     {page === 'login' && <Login url={url} setPage={setPage} />}
  //     {page === 'products' && <Products url={url} setPage={setPage}/>}
  //     {page === 'categories' && <Categories url={url} setPage={setPage}/>}
  //     {page === 'form' && <Form url={url}/>}
  //   </>
  // )


  return (
      <RouterProvider router={router} />
  );
}

export default App
