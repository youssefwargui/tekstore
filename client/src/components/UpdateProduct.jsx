const UpdateProduct = () => {
  return (
    <form className="update-product-form">
      <h2>Update Product</h2>

      <input type="text"  placeholder="Product Name" />

      <input type="number" placeholder="Product Price" />

      <textarea placeholder="Description" />

      <input type="text" placeholder="Image URL" />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
