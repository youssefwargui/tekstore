
const AddProduct = () => {
  return (
    <form className="add-product-form">
      <label>
        Add your product
        <input type="text" placeholder="Porduct Name" />
        <input type="text" placeholder="Product price" />
        <textarea placeholder="Your product description here"></textarea>
        <input type="text" placeholder="Product category" />
        <input type="text" placeholder="Product image" />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};
export default AddProduct;
