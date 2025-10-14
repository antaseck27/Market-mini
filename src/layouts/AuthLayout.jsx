// src/layouts/AuthLayout.jsx
export default function AuthLayout({ children }) {
    return (
      <div className="min-h-screen grid place-items-center bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-orange-100/60 p-8">
          {children}
        </div>
      </div>
    );
  }
