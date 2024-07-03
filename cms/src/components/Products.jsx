export default function Products() {
  
  return (
    <>
      <div className="mb-8 flex justify-start">
        <div className="btn btn-secondary">Add More</div>
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Price</td>
              <td>Stock</td>
              <td>Image</td>
              <td>
                <div className="flex gap-3">
                  <div className="btn flex-auto">Edit</div>
                  <div className="btn flex-auto">Delete</div> 
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Price</td>
              <td>Stock</td>
              <td>Image</td>
              <td>
                <div className="flex gap-3">
                  <div className="btn flex-auto">Edit</div>
                  <div className="btn flex-auto">Delete</div> 
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Price</td>
              <td>Stock</td>
              <td>Image</td>
              <td>
                <div className="flex gap-3">
                  <div className="btn flex-auto">Edit</div>
                  <div className="btn flex-auto">Delete</div> 
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}