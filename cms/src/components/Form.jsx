import { useEffect, useState } from "react";
import axios from 'axios';
import Toastify from 'toastify-js';

export default function Form({url, handleSubmit, product, nameProp}) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState("");

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

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImgUrl(product.imgUrl);
      setStock(product.stock);
      setCategoryId(product.categoryId);
    }
  }, [product]);

  return (
    <>
      <div className="mb-8 font-semibold text-xl text-fuchsia-600">Add New Product</div>
      <div className="flex flex-col items-center gap-4 mt-14">
        <form onSubmit={(e) => {
            const dataProduct = {
              name, 
              description, 
              price, 
              imgUrl, 
              stock, 
              categoryId
            };
            handleSubmit(e, dataProduct);
          }
        }>
          <div>
            <div className="label ">
              <span className="label-text">Product Name: </span>
            </div>
            <input 
              type="text" 
              placeholder="Product Name" 
              className="input input-secondary w-full max-w-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Category: </span>
            </div>
            <select 
              className="select select-secondary w-full max-w-xs"
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option disabled>Category</option>
              {categories.map(category => {
                return <option key={category.id} value={category.id}>{category.name}</option>
              })}
            </select>
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Price: </span>
            </div>
            <input 
              type="number" 
              placeholder="Price" 
              className="input input-secondary w-full max-w-xs"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Stock: </span>
            </div>
            <input 
              type="number" 
              placeholder="Stock" 
              className="input input-secondary w-full max-w-xs"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Image URL: </span>
            </div>
            <input 
              type="text" 
              placeholder="Image" 
              className="input input-secondary w-full max-w-xs"
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl} 
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Description: </span>
            </div>
            <textarea 
              placeholder="Description" 
              className="input input-secondary w-full max-w-xs" 
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <button type="submit" className="w-full btn btn-accent mt-10">{nameProp}</button>
          </div>
        </form>
      </div>
    </>
  )
}