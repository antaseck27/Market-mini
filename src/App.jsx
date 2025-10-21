

// import {Routes, Route, Navigate} from 'react-router-dom';

// // Layout principal (doit accepter {children})
// import MainLayout from './layouts/MainLayout.jsx';
// import OpenShop from './pages/shops/OpenShop.jsx';
// // Pages publiques
// import Home from './pages/Home.jsx';
// import NewAd from './pages/NewAd.jsx';
// import AdminDashboard from './pages/admin/AdminDashboard.jsx';
// import Account from './pages/account/Account.jsx';

// // lima innnnnndi
// import Daily from './pages/promotions/Daily.jsx';
// import Flashsal from './pages/promotions/Flashsal.jsx';
// import Liquidation from './pages/promotions/Liquidation.jsx';

// import Contact from './pages/help/Contact.jsx';
// import Faq from './pages/help/Faq.jsx';
// import Help from './pages/help/Help.jsx';

// // Admin
// // import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

// // Pages d'auth
// import Login from './pages/auth/Login.jsx';
// import Register from './pages/auth/Register.jsx';
// import ResetPassword from './pages/auth/ResetPassword.jsx';

// // import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// // import MainLayout from "./layouts/MainLayout";
// import AuthLayout from './layouts/AuthLayout';

// import Mobile from './pages/categories/Mobile';

// export default function App () {
//   return (
//     <Routes>
//       {/* Pages avec Navbar + Footer via MainLayout */}
//       <Route
//         path="/"
//         element={
//           <MainLayout>
//             <Home />
//           </MainLayout>
//         }
//       />
//       <Route
//         path="shops/open"
//         element={
//           <MainLayout>
//             <OpenShop />
//           </MainLayout>
//         }
//       />

//       <Route
//         path="/nouvelle-annonce"
//         element={
//           <MainLayout>
//             <NewAd />
//           </MainLayout>
//         }
//       />
//       {/* <Route
//         path="/shops/open"
//         element={
//           <MainLayout>
//             <OpenShop />
//           </MainLayout>
//         }
//       /> */}
//       <Route
//         path="/mon-compte"
//         element={
//           <MainLayout>
//             <Account />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/mobile" element={<Mobile />} />
//               <Route path="*" element={<Navigate to="/" replace />} />
//             </Routes>
//           </MainLayout>
//         }
//       />
//       {/* fimou commencer */}

//       <Route
//         path="/promotions/daily"
//         element={
//           <MainLayout>
//             <Daily />
//           </MainLayout>
//         }
//       />

//       <Route
//         path="/promotions/flash"
//         element={
//           <MainLayout>
//             <Flashsal />
//           </MainLayout>
//         }
//       />

//       <Route
//         path="/promotions/clearance"
//         element={
//           <MainLayout>
//             <Liquidation />
//           </MainLayout>
//         }
//       />

//       {/* fimou yam */}

//       {/* Pages d'aide */}
//       <Route
//         path="/help"
//         element={
//           <MainLayout>
//             <Help />
//           </MainLayout>
//         }
//       />
//       <Route
//         path="/help/faq"
//         element={
//           <MainLayout>
//             <Faq />
//           </MainLayout>
//         }
//       />
//       <Route
//         path="/help/contact"
//         element={
//           <MainLayout>
//             <Contact />
//           </MainLayout>
//         }
//       />

//       {/* admin */}
//       {/* <Route path="/admin" element={<AdminDashboard />} /> */}

//       <Route
//         path="/admin"
//         element={
//           <MainLayout>
//             <AdminDashboard />
//           </MainLayout>
//         }
//       />

//       {/* Pages d'auth SANS layout */}
//       <AuthLayout>
//       <Route>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/reset" element={<ResetPassword />} />
//       </Route>

//       </AuthLayout>


//       {/* Fallback */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }


import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';

// Pages
import Home from './pages/Home.jsx';
import OpenShop from './pages/shops/OpenShop.jsx';
import NewAd from './pages/NewAd.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import Account from './pages/account/Account.jsx';

// Promotions
import Daily from './pages/promotions/Daily.jsx';
import Flashsal from './pages/promotions/Flashsal.jsx';
import Liquidation from './pages/promotions/Liquidation.jsx';

// Aide
import Contact from './pages/help/Contact.jsx';
import Faq from './pages/help/Faq.jsx';
import Help from './pages/help/Help.jsx';

// Auth
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ResetPassword from './pages/auth/ResetPassword.jsx';

// Catégories
import Mobile from './pages/categories/Mobile';


export default function App() {
  return (

    
    <Routes>
   <Route
  path="/mobile"
  element={
    <MainLayout>
      <Mobile />
    </MainLayout>
  }
/>





      {/* Pages avec layout principal */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/shops/open"
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
      <Route
        path="/mon-compte"
        element={
          <MainLayout>
            <Account />
          </MainLayout>
        }
      />
  
      <Route
        path="/categories/mobile"
        element={
          <MainLayout>
            <Mobile />
          </MainLayout>
        }
      />

      {/* Promotions */}
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

      {/* Aide */}
      <Route
        path="/help"
        element={
          <MainLayout>
            <Help />
          </MainLayout>
        }
      />
      <Route
        path="/help/faq"
        element={
          <MainLayout>
            <Faq />
          </MainLayout>
        }
      />
      <Route
        path="/help/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <MainLayout>
            <AdminDashboard />
          </MainLayout>
        }
      />

      {/* Auth avec layout spécifique */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>



  );
}
