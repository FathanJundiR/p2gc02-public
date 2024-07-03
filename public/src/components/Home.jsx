import { useEffect, useState } from "react"
import Card from "./Card";
import axios from 'axios';
import Toastify from 'toastify-js';

export default function Home({url}) {
	const [products, setProducts] = useState([]);

	async function fetchProducts() {
		try {
			const { data } = await axios.get(`${url}/apis/pub/branded-things/products`)
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
						fontWeight: "bold"
				}
			}).showToast();
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

  return (
		<>
			<div className="home-query justify-item-center  flex flex-1 h-16 gap-5 justify-center ">
				<div className="btn btn-neutral ">Filter By</div>
				<div className="btn btn-neutral">Short By</div>
			</div>
			<div className="home-content flex flex-wrap justify-center gap-4">
				{products.map(product => {
					return <Card product={product} key={product.id}></Card>
				})}
			</div>
		</>
	);
};