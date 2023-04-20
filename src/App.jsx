import {Routes, Route,useNavigate} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Addproduct from "./components/Addproduct";

function App() {
  // const navigate = useNavigate();
      const navigateToAddproducts = () => {
        // 👇️ navigate to /contacts
        navigate('/Addproduct');
      };
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Addproduct" element={<Addproduct />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
