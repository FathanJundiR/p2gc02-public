import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Toastify from 'toastify-js';
import gearLoad from '../assets/Gear-0.2s-264px.svg';

export default function Detail({ url }) {
	const {id} = useParams();
	const [loading, setLoading] = useState(false);
	const [productDetail, setProductDetail] = useState({});
	const navigate = useNavigate();

	async function fetchProductDetail() {
		try {
			setLoading(true);
			const { data } = await axios.get(`${url}/apis/pub/branded-things/products/${id}`);
			setProductDetail(data.data);
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
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProductDetail();

	}, []);

  return (
    <>
		{
			loading ? (
				<div className="mt-32 flex justify-center items-center">
          <img src={gearLoad} />
        </div>
			) : (
				<>
					<div className="card card-side bg-base-100 shadow-xl">
						<figure className="object-scale-down">
							<img
								src={productDetail.imgUrl}
								alt="Movie" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{productDetail.name}</h2> 
							<p>Description	: {productDetail.description}</p>
							<p>Price				: {productDetail.price}</p>
							<p>Stock				: {productDetail.stock}</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary" onClick={() => navigate("/")}>Back</button>
								<button className="btn btn-primary">Buy</button>
							</div>
						</div>
					</div>
				</>
			)
		}
    </>
  )
}