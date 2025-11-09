import React, { useState } from "react";
import { Link } from "react-router";

export default function PartnerDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sidebarItems = [
    {
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
    },
    {
      label: "Profile Management",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
    {
      label: "Assigned Schools",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2 2 0 100-4H9m0 4a2 2 0 100-4m0 0V7m0 4H7m2 0a2 2 0 100-4H7m0 4a2 2 0 100-4m0 0V7"/>
        </svg>
      ),
    },
    {
      label: "Tasks",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      ),
    },
    {
      label: "Progress Report",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
    },
    {
      label: "Leaderboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
    },
    {
      label: "Salary + Commission",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
    {
      label: "Component Reports",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20H5a2 2 0 01-2-2V5a2 2 0 012-2h6.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-3"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar */}
      <aside className="w-[220px] flex flex-col bg-[#3A7D7D] min-h-screen p-4">
        <div className="text-2xl font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item, index) => {
            const routeMap: Record<string, string> = {
              "Dashboard": "/partner_dashboard",
              "Profile Management": "/partner_dashboard/profile_management",
              "Assigned Schools": "/partner_dashboard/assigned_schools",
              "Tasks": "/partner_dashboard/tasks",
              "Progress Report": "/partner_dashboard/progress_report",
              "Leaderboard": "/partner_dashboard/leaderboard",
              "Salary + Commission": "/partner_dashboard/salary_commission",
              "Component Reports": "/partner_dashboard/component_reports",
            };
            return (
              <Link
                key={item.label}
                to={routeMap[item.label] || "#"}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 
                           ${index === 0 
                             ? 'bg-white text-[#3A7D7D] font-medium shadow-lg transform -translate-y-0.5' 
                             : 'text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium'}`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link 
          to="/"
          className="mt-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f3dada] text-[#dc2626]"
          onClick={() => {
            localStorage.removeItem('authToken');
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          Log Out
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#fdfbf0]">
        {/* Search Bar and Profile */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-[480px]">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full text-sm border border-gray-300 focus:outline-none focus:border-[#3A7D7D] text-gray-700"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button
                className="flex items-center space-x-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-[#3A7D7D] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                  <Link
                    to="/"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      localStorage.removeItem('authToken');
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Partner Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your profile, schools, tasks, and performance metrics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Active Schools</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">5</div>
                <div className="text-xs text-gray-500">Assigned to you</div>
              </div>
              <div className="text-[#3A7D7D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2 2 0 100-4H9m0 4a2 2 0 100-4m0 0V7m0 4H7m2 0a2 2 0 100-4H7m0 4a2 2 0 100-4m0 0V7"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Pending Tasks</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">8</div>
                <div className="text-xs text-gray-500">To complete</div>
              </div>
              <div className="text-[#3A7D7D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Performance Score</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">87%</div>
                <div className="text-xs text-gray-500">This month</div>
              </div>
              <div className="text-yellow-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Ranking</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">#12</div>
                <div className="text-xs text-gray-500">Out of 100 partners</div>
              </div>
              <div className="text-[#3A7D7D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h2>
          <p className="text-gray-600">Use the sidebar navigation to access different sections of your partner dashboard.</p>
        </div>
      </main>
    </div>
  );
}
