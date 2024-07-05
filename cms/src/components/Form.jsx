import { useEffect, useState } from "react";
import axios from 'axios';
import Toastify from 'toastify-js';

export default function Form({url}) {
  const [categories, setCategories] = useState([]);
  let access_token =localStorage.access_token

  async function fetchCategory() {
    try {
      const { data } = await axios.get(`${url}/apis/branded-things/categories`,{
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      setCategories(data.data);
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
		fetchCategory();
	}, []);

  return (
    <>
      <div className="mb-8 font-semibold text-xl text-fuchsia-600">Add New Product</div>
      <div className="flex flex-col items-center gap-4 mt-14">
        <div className="label ">
          <span className="label-text">Product Name: </span>
        </div>
        <input type="text" placeholder="Product Name" className="input input-secondary w-full max-w-xs" />
        <input type="text" placeholder="Content" className="input input-secondary w-full max-w-xs" />
        <select className="select select-secondary w-full max-w-xs">
          <option disabled>Category</option>
          {categories.map(category => {
            return <option key={category.id}>{category.name}</option>
          })}
        </select>
        <input type="text" placeholder="Price" className="input input-secondary w-full max-w-xs" />
        <input type="text" placeholder="Stock" className="input input-secondary w-full max-w-xs" />
        <input type="text" placeholder="Image" className="input input-secondary w-full max-w-xs" />
        <textarea placeholder="Description" className="input input-secondary w-full max-w-xs" />
      </div>
    </>
  )
}