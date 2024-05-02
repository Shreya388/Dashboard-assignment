import './App.css';
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Users from './pages/Users';
import Home from './pages/Home';

function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
