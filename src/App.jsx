
// import './App.css'

// function App() {

//   return (
//     <div>

//       <button className='bg-red-600'>Test</button>
      
//     </div>
//   )
// }

// export default App



import { Routes, Route, Navigate } from "react-router-dom";

// Layout principal (doit accepter {children})
import MainLayout from "./layouts/MainLayout.jsx";
import OpenShop from "./pages/shops/OpenShop.jsx"

// Pages publiques
import Home from "./pages/Home.jsx";
import NewAd from "./pages/NewAd.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import Account from "./pages/account/Account.jsx";

// lima innnnnndi
import Daily from "./pages/promotions/Daily.jsx";
import Flashsal from "./pages/promotions/Flashsal.jsx";
import Liquidation from "./pages/promotions/Liquidation.jsx";








// Admin
// import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

// Pages d'auth
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import ResetConfirm from "./pages/auth/ResetConfirm.jsx"; // <-- AJOUT

export default function App() {
  return (
    <Routes>
      {/* Pages avec Navbar + Footer via MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
    <Route
        path="shops/open"
        element={
          <MainLayout>
            <OpenShop />
          </MainLayout>
        }
      />



      <Route
        path="/nouvelle-annonce"
        element={
          <MainLayout>
            <NewAd />
          </MainLayout>
        }
      />
      {/* <Route
        path="/shops/open"
        element={
          <MainLayout>
            <OpenShop />
          </MainLayout>
        }
      /> */}
      <Route
  path="/mon-compte"
  element={
    <MainLayout>
      <Account />
    </MainLayout>
  }
/>
{/* fimou commencer */}

<Route
  path="/promotions/daily"
  element={
    <MainLayout>
      <Daily />
    </MainLayout>
  }
/>

<Route
  path="/promotions/flash"
  element={
    <MainLayout>
      <Flashsal />
    </MainLayout>
  }
/>

<Route
  path="/promotions/clearance"
  element={
    <MainLayout>
      <Liquidation />
    </MainLayout>
  }
/>








{/* fimou yam */}



      {/* admin */}
      {/* <Route path="/admin" element={<AdminDashboard />} /> */}

      <Route
        path="/admin"
        element={
          // <MainLayout>
            <AdminDashboard />
          // </MainLayout>
        }
      />

      {/* Pages d'auth SANS layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/reset/confirm" element={<ResetConfirm/>} /> {/* <-- NOUVELLE PAGE */}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}