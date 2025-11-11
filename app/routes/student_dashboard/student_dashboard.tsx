

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Icon } from "@iconify/react";


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
  const navigate = useNavigate();
  const location = useLocation();




  const [taskRecords, setTaskRecords] = useState<TaskRecord[]>([
    {
      task: "Complete Quiz 5",
      tutor: "Mr. John",
      assignedDate: "Nov 2",
      dueDate: "Nov 8",
      progress: 65,
      status: { submitted: true, pending: true },
    },
    {
      task: "Complete Quiz 5",
      tutor: "Mr. John",
      assignedDate: "Nov 2",
      dueDate: "Nov 8",
      progress: 65,
      status: { submitted: true, pending: true },
    },
    {
      task: "Complete Quiz 5",
      tutor: "Mr. John",
      assignedDate: "Nov 2",
      dueDate: "Nov 8",
      progress: 65,
      status: { submitted: true, pending: true },
    },
  ]);

  const sidebarItems = [
    {
      label: "Dashboard",
      icon: (
        <Icon icon="iconamoon:home-duotone" width={24} height={24} />
      ),
    },
    {
      label: "Learning Material",
      icon: (
        <Icon icon="mingcute:calendar-2-line" width={24} height={24} />

      ),
    },
    {
      label: "Task",
      icon: (
        <Icon icon="hugeicons:task-02" width={24} height={24} />
      ),
    },
    {
      label: "Examination",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      label: "Progress",
      icon: (
        <Icon icon="streamline-plump:graph-bar-increase-solid" width={24} height={24} />
      ),
    },
    {
      label: "Complain Box",
      icon: (
        <Icon icon="streamline-freehand:customer-action-complaint" width={24} height={24} />
      ),
    },
  ];

  const routeMap: Record<string, string> = {
    "Dashboard": "/student_dashboard",
    "Learning Material": "/student_dashboard/learning_material",
    "Task": "/student_dashboard/task",
    "Examination": "/student_dashboard/examination",
    "Progress": "/student_dashboard/progress",
    "Complain Box": "/student_dashboard/complain_box",
  };

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar */}
      <aside className="max-w-60 min-w-60 flex flex-col bg-[#438582] min-h-screen p-4">
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-6">
          {sidebarItems.map((item) => {
            const isActive = location.pathname.startsWith(routeMap[item.label]);
            return (
              <button
                key={item.label}
                onClick={() => navigate(routeMap[item.label])}
                className={`w-full text-left flex items-center gap-2 px-3 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm ${isActive
                    ? "bg-[#3A7D7D]/80 text-white border   font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
                    : "bg-transparent text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:font-medium"
                  }`}
              >
                {item.icon}
                {item.label}
              </button>

            );
          })}
        </nav>

        <Link
          to="/"
          className="mt-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f3dada] text-[#dc2626]"
          onClick={() => localStorage.removeItem("authToken")}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Log Out
        </Link>
      </aside>

      {/* Main Content */}


      <main className="flex-1 p-8 bg-[#fdfbf0]">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8 px-10">
          {/* Left: Greeting */}
          <h1 className="text-3xl font-bold text-gray-800">Hello Joey,</h1>

          {/* Middle: Search Bar */}
          <div className="relative w-[780px]">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm focus:outline-none text-gray-600"
            />
            <Icon
              icon="mdi:magnify"
              className="absolute left-3 top-3 text-gray-500 text-lg"
            />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
            {/* Notification */}
            <button className="relative">
              <Icon
                icon="ri:notification-3-fill"
                className="text-[#3A7D7D] text-3xl"
              />
              <span className="absolute top-0 right-0 w-3 h-3  bg-red-500 rounded-full"></span>
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
                <Icon icon="mdi:chevron-down" className="text-white text-lg w-6 h-6" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-1 z-10">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      localStorage.removeItem("authToken");
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
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Attendance Rate */}
          <div className="bg-white rounded-xl p-6 border border-black flex flex-col items-start">
            <p className="text-sm text-black font-medium mb-3">Attendance Rate</p>
            <div className="relative flex items-center  justify-center w-full h-24">
              <Icon
                icon="material-symbols:progress-activity-sharp"
                className="text-[#3A7D7D]  text-6xl w-28 h-28 "
                style={{ strokeWidth: 3 }}
              />
              <span className="absolute text-xl font-semibold text-center text-black">
                75%
              </span>
            </div>
          </div>

          {/* Task Added */}
          <div className="bg-white rounded-xl p-6 border border-black flex flex-col justify-between">
            <p className="text-sm text-black font-medium mb-3">Task Added</p>
            <div className="flex items-center space-x-3">
              <Icon
                icon="fluent:clipboard-task-add-24-filled"
                className="text-blue-600 text-4xl w-16 h-30 "
              />
              <div>
                <p className="text-3xl font-bold text-center text-gray-800 leading-none">3</p>
                <p className="text-xs text-black mt-2 pl-8">Total task - 5</p>
              </div>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="bg-white rounded-xl p-6 border border-black flex flex-col items-start">
            <p className="text-sm text-black font-medium mb-3">Overall progress</p>
            <div className="flex items-center space-x-4">
              <svg viewBox="0 0 36 36" className="w-30 h-30">
                <circle cx="18" cy="18" r="15.9155" fill="#22c55e" />
                <path
                  d="M18 18 L18 2 A16 16 0 0 1 34 18 Z"
                  fill="#fff"
                />
              </svg>
              <span className="text-3xl font-bold pl-4 text-gray-800">75%</span>
            </div>
          </div>

          {/* New Materials */}
          <div className="bg-white rounded-xl p-6 border border-black flex flex-col justify-between">
            <div>
              <p className="text-2xl text-black ">
                New materials
              </p>
              <p className="text-black  text-2xl ">added this week</p>
            </div>
            <p className="text-3xl flex items-center text-center justify-center  font-bold text-gray-800">3</p>
          </div>
        </div>

        {/* Learning Materials & Exam Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Learning Materials */}
          <div className="bg-[#fefce8] rounded-2xl p-6 border-2 border-black">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Learning Materials</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Video Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="">
                    <Icon icon="mingcute:video-fill" className="w-12 h-12 text-[]" />
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

                  <Icon icon="streamline-freehand:notes-book-1" className="w-12 h-12  text-[#3A7D7D]" />

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
          <div className="bg-[#fefce8] rounded-2xl p-6 border-2 border-black">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Exam Section</h2>
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
        <div className="bg-[#fefce8] rounded-2xl p-6 border-2 border-black">
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
                        <div className="bg-[#3A7D7D] h-2 rounded-full" style={{ width: `${record.progress}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-3">
                    <div className="flex gap-2 justify-center">
                      <span className="px-3 py-1 text-xs font-medium rounded-md shadow-lg bg-[#438582] text-white">Submitted</span>
                      <span className="px-3 py-1 text-xs font-medium rounded-md shadow-lg bg-[#43858299] text-white">Pending</span>
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
