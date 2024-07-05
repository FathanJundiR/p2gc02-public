import { useEffect, useState } from "react";
import axios from 'axios';
import Toastify from 'toastify-js';

export default function Products({url}) {
  const access_token = localStorage.access_token;
  const [products, setProducts] = useState([]);

  async function fetchProduct() {
    try {
      const { data } = await axios.get(`${url}/apis/branded-things/products`,{
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      setProducts(data.data);
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

  async function fetchCategory() {
    try {
      const { data } = await axios.get(`${url}/apis/branded-things/categories/1`,{
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      setProducts(data.data);
      console.log(data);
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
  
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="mb-8 flex justify-start">
        <div className="btn btn-secondary" onClick={() => setPage('form')}>Add More</div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>NO.</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, index) => {
              return (
                <tr key={product.id}>
                  <th>{index+1}</th>
                  <td>{product.name}</td>
                  <td className="text-clip overflow-hidden">{product.description}</td>
                  <td>{product.categoryId}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.imgUrl}</td>
                  <td>
                    <div className="flex gap-3">
                      <div className="btn flex-auto">Edit</div>
                      <div className="btn flex-auto">Delete</div> 
                    </div>
                  </td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}