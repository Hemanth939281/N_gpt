import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ route, children }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (!user) {
      navigate(route);
    }
  }, [user, route, navigate]); 

  return user ? children : null;
};

export default ProtectedRoute;
