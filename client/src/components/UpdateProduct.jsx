
import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const UpdateProduct = () => {
   const location = useLocation();

  const post = location.state?.post;

  const [name, setName] = useState(post?.name || "");
  const [description, setdescription] = useState(post?.description || "");
  const [image, setImage] = useState(post?.imageUrl || "");
  const [price, setPrice] = useState(post?.price || "");

    const createetedit = () => {
    if (post) {
      axios
        .put(`https://tek-server-hyxr.onrender.com/api/products/${post._id}`, {
          name: name,
          description: description,
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
        .post("https://tek-server-hyxr.onrender.com/api/products/add", {
          name: name,
          description: description,
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
    <form className="update-product-form"
    onSubmit={(e) => {
          e.preventDefault();
          createetedit();
        }}>
         
             <h2>{post ? "Update Product" : "Create Product"}</h2>

            <input type="text"  placeholder="Product Name" 
            value={name}
        onChange={(e) => setName(e.target.value)}/>

      <input type="number" placeholder="Product Price" 
      value={price}
        onChange={(e) => setPrice(e.target.value)}/>

      <textarea placeholder="Description" 
      value={description}
        onChange={(e) => setdescription(e.target.value)}/>

      <input type="text" placeholder="Image URL" 
      value={image}
        onChange={(e) => setImage(e.target.value)}/>

      <button type="submit">{post ? "Update Product" : "Create Product"}</button>
        
    </form>
  );
};

export default UpdateProduct;
