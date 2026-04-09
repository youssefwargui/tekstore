import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();

  let element = location.state.product;

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={element.imageUrl} />
      </div>
      <div className="product-info">
        <h1>{element.name}</h1>
        <p>{element.categories} </p>
        <h2>Price : {element.price} </h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
