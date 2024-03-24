import { useState, useEffect } from "react";
import axios from "axios";

function WorkerList() {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:917/master/workerList"
      );
      setData(response.data.data);
      setCount(response.data.totalCount);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <main className="p-6 sm:p-10 space-y-6">
        {/* Dashboard Heading Section */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Worker Details</h1>
            <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              {/* Manage dashboard button content */}
            </button>
            <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              {/* Create new dashboard button content */}
            </button>
          </div>
        </div>
        {/* Statistics Section */}
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Student Statistics */}
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">{count}</span>
              <span className="block text-gray-500">Workers</span>
            </div>
          </div>
          {/* Average Mark Statistics */}
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            {/* Average mark icon and content */}
          </div>
          {/* Course Progress Statistics */}
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            {/* Course progress icon and content */}
          </div>
          {/* Library Resources Statistics */}
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            {/* Library resources icon and content */}
          </div>
        </section>
        {/* Recent Activity Section */}
        <section className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">All Workers</h2>

          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
              {/* ... Search bar section (same as in your HTML) ... */}
            </div>
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      FULL NAME
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      EMAIL
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      PHONE
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      STATUS
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((worker) => (
                    <tr key={worker.id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 text-red-800">
                              {worker._id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">
                              {worker.firstName} {worker.lastName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">
                              {worker.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">
                              {worker.phoneNumber}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        <span className={`relative inline-block px-3 py-1 font-semibold ${worker.isOnline?'text-green-900':'text-red-900'}  leading-tight`}>
                          <span
                            aria-hidden
                            className={`absolute inset-0 ${worker.isOnline?'bg-green-200 opacity-50': 'bg-red-200 opacity-50'}  rounded-full`}
                          ></span>
                          <span className="relative text-xs">{worker.isOnline?'active':'offline'}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                {/* ... Pagination section (same as in your HTML) ... */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default WorkerList;
