import React, { useState } from "react";
import { useLocation  } from "react-router-dom";

const ProductDetails = () => {
   const location = useLocation();

  const post = location.state?.post;

  const [name, setTitle] = useState(post?.name || "");
  const [categories, setContent] = useState(post?.categories || "");
  const [image, setImage] = useState(post?.imageUrl || "");

    const createetedit = () => {
    if (post) {
      axios
        .put(`https://tek-server-hyxr.onrender.com/api/products/${post._id}`, {
          name: name,
          categories: categories,
          imageUrl: image,
        })
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("https://tek-server-hyxr.onrender.com/api/products", {
          name: name,
          categories: categories,
          imageUrl: image,
        })
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img />
      </div>
      <div className="product-info">
        <h1></h1>
        <p></p>
        <h2>Price :</h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
