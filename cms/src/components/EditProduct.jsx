export default function EditProduct() {
  return (
    <>
      <div className="mb-8 font-semibold text-xl text-fuchsia-600">Edit Product</div>
      <div className="flex flex-col items-center gap-4 mt-14">
        <div className="label ">
          <span className="label-text">Product Name: </span>
        </div>
        <input type="text" placeholder="Title" className="input input-secondary w-full max-w-xs" />
        <input type="text" placeholder="Content" className="input input-secondary w-full max-w-xs" />
        <select className="select select-secondary w-full max-w-xs">
          <option disabled selected>Category</option>
          <option>Shoes</option>
          <option>Bag</option>
          <option>Hat</option>
        </select>
        <input type="text" placeholder="Image" className="input input-secondary w-full max-w-xs" />
      </div>
    </>
  )
}