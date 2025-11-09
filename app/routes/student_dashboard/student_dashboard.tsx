import React, { useState } from "react";
import { Link } from "react-router";

interface TaskRecord {
  task: string;
  tutor: string;
  assignedDate: string;
  dueDate: string;
  progress: number;
  status: {
    submitted: boolean;
    pending: boolean;
  };
}

export default function StudentDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [taskRecords, setTaskRecords] = useState<TaskRecord[]>([
    {
      task: "Complete Quiz 5",
      tutor: "Mr. John",
      assignedDate: "Nov 2",
      dueDate: "Nov 8",
      progress: 65,
      status: {
        submitted: true,
        pending: true,
      },
    },
    {
      task: "Complete Quiz 5",
      tutor: "Mr. John",
      assignedDate: "Nov 2",
      dueDate: "Nov 8",
      progress: 65,
      status: {
        submitted: true,
        pending: true,
      },
    },
    {
      task: "Complete Quiz 5",
      tutor: "Mr. John",
      assignedDate: "Nov 2",
      dueDate: "Nov 8",
      progress: 65,
      status: {
        submitted: true,
        pending: true,
      },
    },
  ]);

  // Sidebar items
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
      label: "Learning Material",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C6.228 6.228 2 10.228 2 15s4.228 8.772 10 8.772c5.772 0 10-3.93 10-8.772 0-4.772-4.228-8.747-10-8.747z"/>
        </svg>
      ),
    },
    {
      label: "Task",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      ),
    },
    {
      label: "Examination",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      ),
    },
    {
      label: "Progress",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
    },
    {
      label: "Complain Box",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
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
          <h1 className="text-3xl font-bold text-gray-800">Hello Joey,</h1>
          
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
          {/* Attendance Rate Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Attendance Rate</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold text-gray-800">75%</div>
              <div className="w-20 h-20">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3A7D7D"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Task Added Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Task Added</div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-4xl font-bold text-gray-800">3</div>
                <div className="text-xs text-gray-500 mt-1">Total task 5</div>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Overall Progress Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Overall progress</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold text-gray-800">75%</div>
              <div className="w-20 h-20">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#eee" strokeWidth="3"/>
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 15.9155 15.9155"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* New Materials Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">New materials</div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-4xl font-bold text-gray-800">3</div>
                <div className="text-xs text-gray-500 mt-1">added this week</div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Materials & Exam Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Learning Materials */}
          <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1]">
            <h2 className="text-lg font-bold mb-6 text-center text-gray-800">Learning Materials</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Video Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#3A7D7D] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Video</div>
                    <div className="text-xs text-gray-500">Lessons</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#3A7D7D] h-2 rounded-full w-2/5"></div>
                </div>
              </div>

              {/* Notes Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#3A7D7D] p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 2H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H5V4h14v16zm-5.04-6.71l-2.75 3.54-1.3-1.54c-.3-.36-.77-.36-1.07 0-.3.36-.3.96 0 1.32l1.98 2.36c.3.36.77.36 1.07 0L17 9.63c.3-.36.3-.96 0-1.32-.3-.36-.77-.36-1.07 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Notes</div>
                    <div className="text-xs text-gray-500">1 lessons</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#3A7D7D] h-2 rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Exam Section */}
          <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1]">
            <h2 className="text-lg font-bold mb-6 text-center text-gray-800">Exam Section</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Previous Exam */}
              <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
                <div className="text-sm font-semibold text-gray-800 mb-3">Previous Exam</div>
                <div className="space-y-2">
                  <div>
                    <div className="font-medium text-gray-700">Robotics</div>
                    <div className="text-xs text-gray-500">November 1</div>
                  </div>
                </div>
              </div>

              {/* Upcoming Exam */}
              <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
                <div className="text-sm font-semibold text-gray-800 mb-3">Upcoming Exam</div>
                <div className="space-y-2">
                  <div>
                    <div className="font-medium text-gray-700">IoT</div>
                    <div className="text-xs text-gray-500">November 16</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Section */}
        <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1]">
          <h2 className="text-lg font-bold mb-6 text-gray-800">Task</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 font-semibold text-gray-700">Task</th>
                <th className="text-left py-3 font-semibold text-gray-700">Tutor</th>
                <th className="text-center py-3 font-semibold text-gray-700">Assigned Date</th>
                <th className="text-center py-3 font-semibold text-gray-700">Due Date</th>
                <th className="text-center py-3 font-semibold text-gray-700">Progress</th>
                <th className="text-center py-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {taskRecords.map((record, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 text-gray-600">{record.task}</td>
                  <td className="py-3 text-gray-600">{record.tutor}</td>
                  <td className="text-center py-3 text-gray-600">{record.assignedDate}</td>
                  <td className="text-center py-3 text-gray-600">{record.dueDate}</td>
                  <td className="text-center py-3">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#3A7D7D] h-2 rounded-full" style={{width: `${record.progress}%`}}></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-3">
                    <div className="flex gap-2 justify-center">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#4a9b8e] text-white">Submitted</span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#9bc4ae] text-white">Pending</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
