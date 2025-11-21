import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { Icon } from "@iconify/react";

export default function Tasks() {
  const sidebarItems = [
    { label: "Dashboard", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg> },
    { label: "Profile Management", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
    { label: "Assigned Schools", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2 2 0 100-4H9m0 4a2 2 0 100-4m0 0V7m0 4H7m2 0a2 2 0 100-4H7m0 4a2 2 0 100-4m0 0V7"/></svg> },
     {
              label: "Attendance",
              icon: (
                <Icon icon="mingcute:calendar-2-line" width={24} height={24} />
        
              ),
            },    
    { label: "Assignment Management", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg> },
    { label: "Progress Report", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg> },
    { label: "Leaderboard", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg> },
    { label: "Salary + Commission", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
    { label: "Component Reports", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20H5a2 2 0 01-2-2V5a2 2 0 012-2h6.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-3"/></svg> },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      <aside className="w-[220px] fixed flex flex-col bg-[#3A7D7D] min-h-screen p-4">
        <div className="text-2xl font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item, index) => {
            const routeMap: Record<string, string> = {
              "Dashboard": "/partner_dashboard",
              "Profile Management": "/partner_dashboard/profile_management",
              "Assigned Schools": "/partner_dashboard/assigned_schools",
              "Attendance":"/partner_dashboard/attendance",
              "Assignment Management": "/partner_dashboard/assignment_management",
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
                           ${index === 3
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
          onClick={() => localStorage.removeItem('authToken')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          Log Out
        </Link>
      </aside>
      {/* Search Bar and Profile */}
     <nav className="fixed top-0 left-60 right-0 bg-[#fdfbf0] z-10">
  <div className="flex justify-between items-center px-4 md:px-10 py-6">
    
    {/* Mobile Hamburger */}
    <button
      className="md:hidden flex items-center justify-center mr-2"
      onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
    >
      <Icon icon="mdi:menu" className="text-[#3A7D7D] text-3xl" />
    </button>

    {/* Search Bar */}
    <div className="relative flex-1 max-w-[900px] mx-2 md:mx-0">
      <input
        type="search"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm text-gray-600 focus:outline-none"
      />
      <Icon
        icon="mdi:magnify"
        className="absolute left-3 top-3 text-[#999] text-lg"
      />
    </div>

    {/* Right Icons */}
    <div className="flex items-center space-x-3 md:space-x-6 ml-2">
      
      {/* Notifications */}
      <button className="relative">
        <Icon
          icon="ri:notification-3-fill"
          className="text-[#3A7D7D] text-2xl md:text-3xl"
        />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>

      {/* Profile */}
      <div className="relative">
        <button
          className="flex items-center space-x-1 bg-[#3A7D7D] px-2 py-1 rounded-3xl"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="w-9 h-9 rounded-full bg-[#3A7D7D] flex items-center justify-center">
            <Icon icon="ix:user-profile-filled" className="text-white text-xl w-9 h-9" />
          </div>
          <Icon
            icon="mdi:chevron-down"
            className="text-white text-lg w-6 h-6 hidden sm:block"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-1 z-20">
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => {
                localStorage.removeItem("authToken");
                setIsDropdownOpen(false);
              }}
            >
              Sign out
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
</nav>


      <main className="w-full pt-[120px] ml-[250px] px-10 pb-10 bg-[#fdfbf0] min-h-screen overflow-y-auto">

  {/* ======= PAGE TITLE ======= */}
  <h1 className="text-2xl font-semibold text-gray-700 mb-6">Assignment Management</h1>

  {/* ======= TOP CARDS ======= */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

    {/* Active Assignments */}
    <div className="p-5 bg-[#e9f3ff] border border-[#bcd8ff] rounded-xl">
      <p className="text-sm text-gray-500">Active Assignments</p>
      <h2 className="text-3xl font-bold text-blue-600">2</h2>
    </div>

    {/* Total Submitted */}
    <div className="p-5 bg-[#e9fff0] border border-[#b6f7ce] rounded-xl">
      <p className="text-sm text-gray-500">Total Submitted</p>
      <h2 className="text-3xl font-bold text-green-600">158</h2>
      <p className="text-xs text-green-700 mt-1">Out of 250 students</p>
    </div>

    {/* Pending Review */}
    <div className="p-5 bg-[#fff8e6] border border-[#fde4b8] rounded-xl">
      <p className="text-sm text-gray-500">Pending Review</p>
      <h2 className="text-3xl font-bold text-yellow-600">40</h2>
    </div>

    {/* Late Submission */}
    <div className="p-5 bg-[#ffeaea] border border-[#f5c2c2] rounded-xl">
      <p className="text-sm text-gray-500">Late Submission</p>
      <h2 className="text-3xl font-bold text-red-600">158</h2>
    </div>

  </div>

  {/* ====== FILTER SECTION ====== */}
  <div className="flex flex-wrap text-black items-center justify-between gap-4 mb-6">
    <div className="flex items-center gap-4">
    <select className="px-3 py-2 rounded-lg bg-white border text-sm">
      <option>All Schools</option>
      <option value="">Samriddhi</option>
      <option value="">Samriddhi</option>
      <option value="">Samriddhi</option>
      <option value="">Samriddhi</option>
      <option value="">Samriddhi</option>
    </select>

    <select className="px-3 py-2 rounded-lg bg-white border text-sm">
      <option>All Grades</option>
        <option >Grade 1</option>
        <option >Grade 2</option>
        <option >Grade 3</option>
        <option >Grade 4</option>
        <option >Grade 5</option>
        <option >Grade 6</option>
        <option >Grade 7</option>
        <option >Grade 8</option>
        <option >Grade 9</option>
        <option >Grade 10</option>
    </select>
      </div>

    <button className="flex items-center gap-2 px-4 py-2 bg-[#3A7D7D] text-white rounded-full text-sm">
      <Icon icon="mdi:plus-circle" className="text-xl" />
      Create Assignment
    </button>
  </div>

  {/* ====== ASSIGNMENT CARD COMPONENT ====== */}
  {[1, 2, 3].map((item) => (
    <div key={item} className="bg-white rounded-xl p-5 shadow-sm border mb-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Basic of Electronics</h2>
          <p className="text-gray-500 text-sm">Sunrise Academy • Grade 10</p>
          <p className="text-gray-400 text-xs">2025-01-08</p>
        </div>

        {/* Status Badge */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            item === 1 ? "bg-blue-100 text-blue-600" :
            item === 2 ? "bg-green-100 text-green-600" :
            "bg-red-100 text-red-600"
          }`}
        >
          {item === 1 ? "Active" : item === 2 ? "Completed" : "Closed"}
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div className="h-full bg-[#3A7D7D] rounded-full" style={{ width: "74%" }}></div>
      </div>

      {/* Submission Stats */}
      <p className="text-right text-xs text-gray-500 mt-1">74% Submitted</p>

      {/* STATS BOXES */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="p-4 bg-[#f3f4f6] text-center rounded-lg">
          <p className="text-xl font-bold text-gray-700">65</p>
          <p className="text-gray-500 text-sm">Total</p>
        </div>

        <div className="p-4 bg-green-50 text-center rounded-lg">
          <p className="text-xl font-bold text-green-600">45</p>
          <p className="text-gray-500 text-sm">On Time</p>
        </div>

        <div className="p-4 bg-orange-50 text-center rounded-lg">
          <p className="text-xl font-bold text-orange-500">3</p>
          <p className="text-gray-500 text-sm">Late</p>
        </div>

        <div className="p-4 bg-blue-50 text-center rounded-lg">
          <p className="text-xl font-bold text-blue-500">17</p>
          <p className="text-gray-500 text-sm">Pending</p>
        </div>
      </div>

    </div>
  ))}

</main>

    </div>
  );
}
