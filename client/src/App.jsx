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

  const search = (inputvalue) => {
    let dataf = data.filter((el) => {
      return el.title.includes(inputvalue) || el.content.includes(inputvalue);
    });
    console.log(dataf, "filtreddata");

    setfiltreddata(dataf);
  };


  return (
    <div className="App">
      <Navbar search={search} />
      <AppRoutes data={data} />
      
    </div>
  );
};

export default App;
