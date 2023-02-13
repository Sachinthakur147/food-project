// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Home/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Dashboard from "./pages/Dashboard";
import DashboardMenu from "./components/DashboardMenu";
import AddProduct from "./components/AddProduct";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/DashboardMenu" element={<DashboardMenu />} />
            <Route path="/Addproduct" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
