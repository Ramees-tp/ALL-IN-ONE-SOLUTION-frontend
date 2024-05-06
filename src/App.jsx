import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import io from 'socket.io-client'
import { useDispatch, useSelector } from "react-redux";
import { setSocket } from "./redux/SocketSlice";
import { useEffect } from "react";
import { selectToken } from "./redux/TokenSlice";
import Suspence from "./components/suspence";

const AdminRoutes = lazy(()=> import("./router/AdminRoutes"));
const CommonRouter = lazy(()=> import("./router/CommonRouter"));
const UserRoutes = lazy(()=> import("./router/UserRoutes")) ;
const WorkerRoutes = lazy(() => import("./router/WorkerRoutes"));

function App() {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  useEffect(()=>{
    if(token){
      const socket = io.connect('http://184.73.25.154/io/');
    // const socket = io.connect('http://localhost:9180')
    dispatch(setSocket(socket));
    return () => {
      socket.disconnect()
    };
    }
  },[dispatch, token])
  return (
      <BrowserRouter>
      <Suspense fallback={<Suspence/>}>
        <Routes>
          <Route path="/*" element={<CommonRouter />} />
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/worker/*" element={<WorkerRoutes />} />
          <Route path="/master/*" element={<AdminRoutes />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
