export default function Detail({detail}) {
  //   async function fetchDetail() {
	// 	try {
	// 		const { detail } = await axios.get(`${url}/apis/pub/branded-things/products`);
	// 		setProducts(detail.data.query);
	// 	} catch (error) {
	// 		console.log(error);
	// 		Toastify({
	// 			text: "error.response.data.error",
	// 			duration: 2000,
	// 			newWindow: true,
	// 			close: true,
	// 			gravity: "bottom",
	// 			position: "right",
	// 			stopOnFocus: true,
	// 			style: {
	// 					background: "#EF4C54",
	// 					color: "#17202A",
	// 					boxShadow: "0 5px 10px black",
	// 					fontWeight: "bold"
	// 			}
	// 		}).showToast();
	// 	}
	// }

  // useEffect(() => {
	// 	fetchDetail();
	// }, []);

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  )
}