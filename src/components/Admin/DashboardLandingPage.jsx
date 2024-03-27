import { Link } from "react-router-dom"

const DashboardLandingPage = () => {
  return (
    <div>
      <div className=" p-1">
        <div className="bg-purple-600 text-white p-7">
            <p className="sm:text-5xl text-xl font-bold text-center">ALL IN ONE SOLUTION <span className="text-xl text-red-700">Admin Dashboard</span> </p>
        </div>
        <div className="h-full ">
          <div className="h-[50%] bg-gray-800 flex justify-center items-center sm:p-28 p-16">
            <h1 className="sm:text-3xl text-sm font-bold text-gray-300">WELCOME TO ADMIN PAGE</h1>
          </div>
          <div className="h-[70%] flex justify-center items-center sm:gap-10 gap-6 sm:p-40 p-28 border-4 border-purple-700">
            <Link to={'/master/dashboardWorker'}>
            <button
              className="sm:w-40 w-28 sm:h-16 h-12  rounded-md bg-purple-600 hover:bg-purple-500 focus:bg-purple-500 sm:text-xl text-sm font-bold text-white"
             >
                Worker Section
            </button>
            </Link>
            <Link to={'/master/dashboardUser'}>
            <button
              className="sm:w-40 w-28 sm:h-16 h-12 rounded-md bg-purple-600 hover:bg-purple-500 focus:bg-purple-500 sm:text-xl text-sm font-bold text-white"
            >
              User Section
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLandingPage
