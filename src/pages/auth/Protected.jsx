import { Navigate, useLocation } from "react-router-dom";

export default function Protected({ user, children }) {
  const loc = useLocation();
  if (!user) return <Navigate to="/login" replace state={{ from: loc }} />;
  return children;
}
