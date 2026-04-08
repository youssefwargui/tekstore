import deleteicon from "../assets/deleteicon.png";
import edit from "../assets/edit.png";
const ProductsList = () => {
  return (
    <div className="products-list">
      <div className="product-card">
        <div className="product-card-buttons">
          <img src={edit} className="icon-btn edit-btn" title="Edit" />
          <img
            src={deleteicon}
            className="icon-btn delete-btn"
            title="Delete"
          />
        </div>
        <img />
        <div className="card-body">
          <span className="card-item-cat"></span>
          <h2></h2>
          <p></p>
          <h5 className="price">$</h5>
          <button className="add-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
