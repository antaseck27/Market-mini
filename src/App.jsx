
// import './App.css'

// function App() {

//   return (
//     <div>

//       <button className='bg-red-600'>Test</button>
      
//     </div>
//   )
// }

// export default App



import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
