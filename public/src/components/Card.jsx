export default function Card({product}) {
  return (
    <>
      {console.log(product)}
      <div className="card card-bordered bg-base-100 w-96 shadow-xl">
        <figure>
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
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Category{product.categoryId}</div>
          </div>
        </div>
      </div>
    </>
  )
}