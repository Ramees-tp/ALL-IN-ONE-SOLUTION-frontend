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
      }

  }, [workerToken, dispatch, navigate]);

  return (
   <>
   <div>{workerToken && <Outlet />}</div>;
   </>
  );
}

export default WorkerAuth
