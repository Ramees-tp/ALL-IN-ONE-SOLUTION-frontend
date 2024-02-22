import React from 'react';

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="hidden sm:flex sm:flex-col">
        <a href="#" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
          <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
            {/* SVG path for company logo */}
          </svg>
        </a>
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
          <nav className="flex flex-col mx-4 my-6 space-y-4">
            <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              {/* SVG and content for Folders */}
            </a>
            <a href="#" className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg">
              {/* SVG and content for Dashboard */}
            </a>
            <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              {/* SVG and content for Messages */}
            </a>
            <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              {/* SVG and content for Documents */}
            </a>
          </nav>
          <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
            <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              {/* SVG and content for Settings */}
            </button>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-grow text-gray-800">
        {/* Header */}
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            {/* SVG for Menu */}
          </button>
          <div className="relative w-full max-w-md sm:-ml-2">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
              {/* SVG path for search icon */}
            </svg>
            <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              {/* User menu content */}
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                {/* Notification icon and content */}
              </button>
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                {/* Logout icon */}
              </button>
            </div>
          </div>
        </header>
        {/* Main Content Body */}
        <main className="p-6 sm:p-10 space-y-6">
          {/* Dashboard Heading Section */}
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
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
              {/* Student icon and content */}
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
            <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
            {/* Recent activity items */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
