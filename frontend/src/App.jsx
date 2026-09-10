import Header from "../components/header";
import Home from "../pages/home";
import Login from "../pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3001";
//import.meta.env.AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const axiosGET = async () => {
      try {
        const { data } = await axios.get("/users/profile");
        setUser(data);
        console.log(JSON.stringify(data, null, 2));
      } catch (error) {
        console.log(error);
      }
    };
    axiosGET();
  }, []);

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
