import { useNavigate } from 'react-router-dom';

export default function Card({product, setPage, productId, setDetail}) {
  const navigate = useNavigate();


  
  return (
    <>
      <div className="card card-bordered bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={product.imgUrl}
            alt="IMAGE OF PRODUCT" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{product.description}</p>
          <div className="text-start startw-auto">$ {product.price}</div>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Category{product.categoryId}</div>
          </div>
          <div className="flex flex-wrap card-actions justify-end">
            <div 
              className="btn flex-1" 
              onClick={(e) => {e.preventDefault;navigate(`/products/${product.id}`);}}
            >Detail
            </div>
            <div className="btn flex-1">Buy</div>
          </div>
        </div>
      </div>
    </>
  )
}