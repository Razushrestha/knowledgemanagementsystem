import React, { useState } from "react";
import { Link } from "react-router";

interface ClassRecord {
  class: string;
  time: string;
  students: number;
  status: string;
}

export default function TutorDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [classRecords, setClassRecords] = useState<ClassRecord[]>([
    {
      class: "Math 101",
      time: "10:00 AM",
      students: 25,
      status: "Completed",
    },
    {
      class: "Science 102",
      time: "12:00 PM",
      students: 20,
      status: "In Progress",
    },
    {
      class: "English 103",
      time: "2:00 PM",
      students: 30,
      status: "Upcoming",
    },
  ]);

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
      label: "Classes",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C6.228 6.228 2 10.228 2 15s4.228 8.772 10 8.772c5.772 0 10-3.93 10-8.772 0-4.772-4.228-8.747-10-8.747z"/>
        </svg>
      ),
    },
    {
      label: "Students",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      ),
    },
    {
      label: "Attendance",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      ),
    },
    {
      label: "Assignments",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
    },
    {
      label: "Performance",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      label: "Reports",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C6.228 6.228 2 10.228 2 15s4.228 8.772 10 8.772c5.772 0 10-3.93 10-8.772 0-4.772-4.228-8.747-10-8.747z"/>
        </svg>
      ),
    },
    {
      label: "Settings",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
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
          {sidebarItems.map((item, index) => (
            <Link
              key={item.label}
              to="#"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 
                         ${index === 0 
                           ? 'bg-white text-[#3A7D7D] font-medium shadow-lg transform -translate-y-0.5' 
                           : 'text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium'}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
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
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Hello Tutor,</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative w-[280px]">
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full text-sm border border-gray-300 focus:outline-none focus:border-[#3A7D7D] text-gray-700"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>

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

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Total Classes Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Total Classes</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold text-gray-800">12</div>
              <div className="text-xs text-gray-500">This week</div>
            </div>
          </div>

          {/* Total Students Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Total Students</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold text-gray-800">85</div>
              <div className="text-xs text-gray-500">Enrolled</div>
            </div>
          </div>

          {/* Attendance Rate Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Attendance Rate</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold text-gray-800">92%</div>
              <div className="text-xs text-gray-500">Average</div>
            </div>
          </div>

          {/* Rating Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Rating</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold text-gray-800">4.8</div>
              <div className="text-xs text-gray-500">/5.0</div>
            </div>
          </div>
        </div>

        {/* This Week Classes */}
        <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1] mb-8">
          <h2 className="text-lg font-bold mb-6 text-gray-800">This Week Classes</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 font-semibold text-gray-700">Class</th>
                <th className="text-left py-3 font-semibold text-gray-700">Time</th>
                <th className="text-center py-3 font-semibold text-gray-700">Students</th>
                <th className="text-center py-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {classRecords.map((record, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 text-gray-600">{record.class}</td>
                  <td className="py-3 text-gray-600">{record.time}</td>
                  <td className="text-center py-3 text-gray-600">{record.students}</td>
                  <td className="text-center py-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      record.status === 'Completed' ? 'bg-[#d1f1c1] text-[#15803d]' :
                      record.status === 'In Progress' ? 'bg-[#bfe1ff] text-[#0b5cdb]' :
                      'bg-[#fff4d6] text-[#f59f00]'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leaderboard */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <h2 className="text-lg font-bold mb-6 text-gray-800">Top Performing Students</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-[#3A7D7D] flex items-center justify-center text-white font-bold">{i}</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700">Student {i}</div>
                    <div className="text-xs text-gray-500">Score: {95 - i * 2}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <h2 className="text-lg font-bold mb-6 text-gray-800">Student Monitoring</h2>
            <div className="space-y-4">
              {[
                { name: "Alice Johnson", status: "Active", color: "bg-green-100 text-green-700" },
                { name: "Bob Smith", status: "Inactive", color: "bg-gray-100 text-gray-700" },
                { name: "Carol White", status: "Active", color: "bg-green-100 text-green-700" },
                { name: "David Brown", status: "Active", color: "bg-green-100 text-green-700" },
              ].map((student, i) => (
                <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700">{student.name}</div>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${student.color}`}>{student.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
