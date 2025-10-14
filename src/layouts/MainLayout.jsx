import Navbar from "../components/nav/Navbar";
import MegaRowNav from "../components/nav/MegaRowNav.jsx";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <MegaRowNav />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
