import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js'

export default function Login({setPage, url}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      let { data } = await axios.post(`${url}/apis/login`, {email, password});
      localStorage.setItem("access_token", data.data.access_token);
      navigate('/');

      Toastify({
        text: "Success Login",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#00B29F",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold"
        }
      }).showToast();
      setPage('products');
    } catch (error) {
      console.log(error);
      Toastify({
        text: "error.response.data.error",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold"
        }
      }).showToast();
    }
  }

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">
              Sebelum ente CRUD CRUD KYAHH, harap login dulu yak
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="input input-bordered" 
                  onChange={(e) => {setEmail(e.target.value);}}
                  required 
                />
                {/* {console.log(email, "<<outside")} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  placeholder="password" 
                  className="input input-bordered" 
                  onChange={(e) => {setPassword(e.target.value);}}
                  required 
                />
                {console.log(password, "<<outside")}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}