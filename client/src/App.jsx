import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "../src/routes/AppRoutes"
import axios from "axios";
import { useEffect , useState } from "react";
const App = () => {
const [data, setdata] = useState([]);

   const fetchdata = () => {
    axios
      .get("https://tek-server-hyxr.onrender.com/api/products")
      .then((response) => {
        setdata(response.data);
        
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AppRoutes data={data}/>
      
    </div>
  );
};

export default App;
