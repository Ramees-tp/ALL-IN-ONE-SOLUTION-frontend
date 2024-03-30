import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAdminToken, setAdminToken } from '../redux/adminTokenSlice'
import { Outlet, useNavigate } from 'react-router-dom'


const AdminAuth = () => {
    const token = useSelector(selectAdminToken)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        const storedToken = localStorage.getItem('ajwt');
        if(!token && storedToken){
            dispatch(setAdminToken(storedToken))
        }
        if(!token && !storedToken){
            navigate('/master/masterEntry')
        } else if (token) {
            const decodedToken = decodeToken(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
              localStorage.removeItem('ajwt');
            navigate("/master/masterEntry");
          }
          }
    },[token, dispatch, navigate]);

    const decodeToken = (token) => {
        const payload = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payload));
        return decodedPayload;
      };
      
  return (
    <>
   <div>{token && <Outlet />}</div>
   </>
  )
}

export default AdminAuth
