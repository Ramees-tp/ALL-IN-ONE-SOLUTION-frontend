import { Route,Routes } from 'react-router-dom'
import WorkerDashboard from '../components/Admin/AdminWorkerSide/WorkerDashboard'
import DashboardLandingPage from '../components/Admin/DashboardLandingPage'
import UserDashboard from '../components/Admin/AdminUserSide/UserDashboard'


function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<DashboardLandingPage/>} />
        <Route path='/dashboardWorker' element={<WorkerDashboard/>} />
        <Route path='/dashboardUser' element={<UserDashboard/>} />
      </Routes>
      
    </div>
  )
}

export default AdminRoutes
