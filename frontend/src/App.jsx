import Header from "../components/header";
import Home from "../pages/home";
import Login from "../pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:3001";
//import.meta.env.AXIOS_BASE_URL;

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
