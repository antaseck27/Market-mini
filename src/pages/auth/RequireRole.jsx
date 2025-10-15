import { Navigate } from "react-router-dom";

export default function RequireRole({ me, allowed = [], children }) {
  if (!me) return null; // ou loader
  if (!allowed.includes(me.role)) return <Navigate to="/" replace />;
  return children;
}
