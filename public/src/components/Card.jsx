export default function Card({product, setPage, productId, setDetail}) {
  return (
    <>
      <div className="card card-bordered bg-base-100 w-96 shadow-xl">
        <figure>s
          <img
            src={product.imgUrl}
            alt="Shoes" />
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
              onClick={(e) => {e.preventDefault;setDetail(productId);}}
            >Detail
            </div>
            <div className="btn flex-1">Buy{product.categoryId}</div>
          </div>
        </div>
      </div>
    </>
  )
}