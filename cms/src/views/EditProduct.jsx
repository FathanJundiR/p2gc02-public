import axios from 'axios'
import Toastify from 'toastify-js'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Form from '../components/Form';

export default function EditProduct({ url }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  async function fetchProduct() {
    try {
      const { data } = await axios.get(`${url}/apis/pub/branded-things/products/${id}`);
      setProduct(data.data);
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
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

  useEffect(() => {
    fetchProduct();
  }, []);

  async function handleSubmit(e, dataProduct) {
    e.preventDefault();
    try {
      await axios.put(`${url}/apis/branded-things/products/${id}`, dataProduct, {
        headers: {
            Authorization: `Bearer ${localStorage.access_token}`
        }
      });

      Toastify({
        text: "Success edit product",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "#00B29F",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold"
        }
      }).showToast();

      navigate('/');
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
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
      <Form url={url} handleSubmit={handleSubmit} product={product} nameProp="Edit Prop" />
    </>
  );
}