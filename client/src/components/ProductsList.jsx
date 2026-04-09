import deleteicon from "../assets/deleteicon.png";
import edit from "../assets/edit.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductsList = (props) => {
  const nav = useNavigate()

  const deletepost = (id) => {
    axios
      
      .delete(`https://tek-server-hyxr.onrender.com/api/products/${id}`)

      .then(() => {
        console.log("deleted");

        props.fetchdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="products-list">
      {props.data.map((el)=>{
        return(
<div className="product-card">
        <div className="product-card-buttons">
          <img src={edit} className="icon-btn edit-btn" title="Edit" 
          onClick={() =>
                  nav("/Update", { state: { post: el } })
                }
          />
          <img
            src={deleteicon}
            className="icon-btn delete-btn"
            title="Delete"
            onClick={() => {
          deletepost(el._id);
        }}
          />
        </div>
        <img src={el.imageUrl}
        onClick={() =>
                nav("/ProductDetails" , { state: { product: el } })
              }

        />
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
