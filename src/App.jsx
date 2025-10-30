



import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Mobile from "./pages/categories/Mobile";
import Electronics from "./pages/categories/Electronics";
import Cosmetics from "./pages/categories/Cosmetics";
import Furniture from "./pages/categories/Furniture";


export default function App() {
  const { pathname } = useLocation();
  const isAuth = pathname === "/login" || pathname === "/register";

  return isAuth ? (
    <AuthLayout>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthLayout>
  ) : (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/mobile" element={<Mobile />} /> 
        <Route path="/electronics" element={<Electronics />} /> 
         <Route path="/cosmetics" element={<Cosmetics />} /> 
         <Route path="/furniture" element={<Furniture />} /> 

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
