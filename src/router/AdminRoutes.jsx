import { Route,Routes } from 'react-router-dom'
import Dashboard from '../components/Admin/Dashboard'

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  )
}

export default AdminRoutes
