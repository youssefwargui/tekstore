import deleteicon from "../assets/deleteicon.png";
import edit from "../assets/edit.png";
const ProductsList = (props) => {
  return (
    <div className="products-list">
      {props.data.map((el)=>{
        return(
<div className="product-card">
        <div className="product-card-buttons">
          <img src={edit} className="icon-btn edit-btn" title="Edit" />
          <img
            src={deleteicon}
            className="icon-btn delete-btn"
            title="Delete"
          />
        </div>
        <img src={el.imageUrl}/>
        <div className="card-body">
          <span className="card-item-cat">{el.categories}</span>
          <h2>{el.name}</h2>
          <p>{el.description}</p>
          <h5 className="price">${el.price}</h5>
          <button className="add-cart-btn">Add to Cart</button>
        </div>
      </div>
        )
      })}
      
    </div>
  );
};

export default ProductsList;
