import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../redux/TokenSlice";

const UserAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const storedToken  = localStorage.getItem('jwt');
    if (!token && storedToken) {
        dispatch(setToken(storedToken));
      }
  
      if (!token && !storedToken) {
        navigate("/user/login");
        // toast.error("Please Login 🤗");
        // alert("please login");
      } else if (token) {
        const decodedToken = decodeToken(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('jwt');
          localStorage.removeItem('userLocation');
          localStorage.removeItem('radius');
        navigate("/user/login");
      }
      }

  }, [token, dispatch, navigate]);

  const decodeToken = (token) => {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  };

  return (
   <>
   <div>{token && <Outlet />}</div>
   </>
  );
};

export default UserAuth;
