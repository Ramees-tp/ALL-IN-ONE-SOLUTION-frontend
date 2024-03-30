import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectWorkerToken, setWorkerToken } from "../redux/WorkerTokenSlice";

const WorkerAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const workerToken  = useSelector(selectWorkerToken);

  useEffect(() => {
    const storedToken  = localStorage.getItem('wjwt');

    if (!workerToken  && storedToken) {
        dispatch(setWorkerToken(storedToken));
      }
  
      if (!workerToken  && !storedToken) {
        navigate("/worker/WorkerLogin");
        // toast.error("Please Login 🤗");
        // alert("please login");
      } else if (workerToken) {
        const decodedToken = decodeToken(workerToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('wjwt');
          localStorage.removeItem('workerLocation');
        navigate("/worker/WorkerLogin");
      }
      }

  }, [workerToken, dispatch, navigate]);

  const decodeToken = (token) => {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  };

  return (
   <>
   <div>{workerToken && <Outlet />}</div>
   </>
  );
}

export default WorkerAuth
