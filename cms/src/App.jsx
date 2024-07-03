import { useState } from 'react';
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import EditProduct from './components/EditProduct'
import Products from './components/Products'
import Form from './components/Form'
import Categories from './components/Categories'

function App() {
  const url = 'https://phase2-aio.vercel.app';
  const [page, setPage] = useState('login');
  let token = localStorage.access_token;

  useEffect(() => {
    if (token) {
      setPage('products')
    } else {
      setPage('login');
    }
  }, []);

  return (
    <>
      <Navbar page={page} setPage={setPage}/>
      {page === 'login' && <Login url={url} setPage={setPage} />}
      {page === 'products' && <Products setPage={setPage}/>}
      {page === 'categories' && <Categories />}
      {page === 'form' && <Form />}
    </>
  )
}

export default App
