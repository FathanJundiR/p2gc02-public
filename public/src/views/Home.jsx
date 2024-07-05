import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";

export default function Home({ url, setPage, setDetail }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products`
      );
      setProducts(data.data.query);
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
          fontWeight: "bold",
        },
      }).showToast();
    }
  }

  async function fetchDetail() {
    try {
      const { detail } = await axios.get(
        `${url}/apis/pub/branded-things/products`
      );
      setProducts(detail.data.query);
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
          fontWeight: "bold",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="form-control flex justify-item-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered "
        />
      </div>
      <div className="home-query justify-item-center  flex flex-1 h-16 gap-5 justify-center ">
        <div className="btn btn-neutral ">Filter By</div>
        <div className="btn btn-neutral">Short By</div>
      </div>
      <div className="home-content flex flex-wrap justify-center gap-4">
        {products.map((product) => {
          return (
            <Card
              product={product}
              productId={product.id}
              key={product.id}
              setDetail={setDetail}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
