import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct"
import ProductDetails from "../components/ProductDetails"
import ProductsList from "../components/ProductsList"
import UpdateProduct from "../components/UpdateProduct"

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/ProductDetails" element={<ProductDetails />} />
      <Route path="/" element={<ProductsList data={props.data}/>} />
      <Route path="/Update" element={<UpdateProduct data={props.data}/>} />
    </Routes>
  );
};

export default AppRoutes;
