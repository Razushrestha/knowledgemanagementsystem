import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Icon } from "@iconify/react";

interface AttendanceRecord {
  studentName: string;
  totalClasses: number;
  present: number;
  absent: number;
  marks: number;
}

interface TutorRecord {
  tutorName: string;
  totalClasses: number;
  chapter: number;
  totalStudent: number;
  week: number;
  status: {
    approved: boolean;
    pending: boolean;
  };
  complaintFeedback: string;
}

interface BillingInfo {
  paidThisMonth: number;
  pendingDues: number;
  lastPayment: string;
}

export default function SchoolDashboard() {
  // States for various data
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    {
      studentName: "Alice Johnson",
      totalClasses: 20,
      present: 15,
      absent: 5,
      marks: 75,
    },
    {
      studentName: "Alice Johnson",
      totalClasses: 20,
      present: 15,
      absent: 5,
      marks: 75,
    },
    {
      studentName: "Alice Johnson",
      totalClasses: 20,
      present: 15,
      absent: 5,
      marks: 75,
    },
    {
      studentName: "Alice Johnson",
      totalClasses: 20,
      present: 15,
      absent: 5,
      marks: 75,
    },
  ]);

  const [tutorRecords, setTutorRecords] = useState<TutorRecord[]>([
    {
      tutorName: "Alice Johnson",
      totalClasses: 20,
      chapter: 1,
      totalStudent: 200,
      week: 5,
      status: {
        approved: true,
        pending: true,
      },
      complaintFeedback: "Course is difficult and is not easy to understand",
    },
    {
      tutorName: "Alice Johnson",
      totalClasses: 20,
      chapter: 1,
      totalStudent: 200,
      week: 5,
      status: {
        approved: true,
        pending: true,
      },
      complaintFeedback: "Course is difficult and is not easy to understand",
    },
    {
      tutorName: "Alice Johnson",
      totalClasses: 20,
      chapter: 1,
      totalStudent: 200,
      week: 5,
      status: {
        approved: true,
        pending: true,
      },
      complaintFeedback: "None",
    },
  ]);

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    paidThisMonth: 35000,
    pendingDues: 12000,
    lastPayment: "2 days Ago",
  });

  // Sidebar items
  const sidebarItems = [
    {
      label: "Dashboard",
      icon: (
        <Icon icon="iconamoon:home-duotone" width={24} height={24} />

      ),
    },
    {
      label: "Attendance",
      icon: (
        <Icon icon="mingcute:calendar-2-line" width={24} height={24} />

      ),
    },
    {
      label: "Tutor",
      icon: (
        <Icon icon="fluent-emoji-high-contrast:teacher" width={24} height={24} />
      ),
    },
    {
      label: "Examination",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      label: "Invoice",
      icon: (
        <Icon icon="streamline-ultimate:cash-payment-bills-bold" width={24} height={24} />
      ),
    },
    {
      label: "Complain Box",
      icon: (
        <Icon icon="streamline-freehand:customer-action-complaint" width={24} height={24} />

      ),
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar */}
      <aside className="w-[220px] flex flex-col bg-[#3A7D7D] min-h-screen p-4">
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-4">
          {sidebarItems.map((item, index) => {
            const routeMap: Record<string, string> = {
              "Dashboard": "/school_dashboard",
              "Attendance": "/school_dashboard/attendance",
              "Tutor": "/school_dashboard/tutor",
              "Examination": "/school_dashboard/examination",
              "Invoice": "/school_dashboard/invoice",
              "Complain Box": "/school_dashboard/complain_box",
            };
            return (
              <Link
                key={item.label}
                to={routeMap[item.label] || "#"}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 
                           ${index === 0
                    ? "bg-[#3A7D7D]/80 text-white border   font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
                    : "bg-transparent text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:font-medium"}`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/"
          className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#f3dada] text-[#dc2626]"
          onClick={() => {
            localStorage.removeItem('authToken');
          }}
        >
          <Icon icon="ri:logout-circle-line" className="text-lg" />

          Log Out
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#FEFCE8]">
        {/* Search Bar and Profile */}
        <div className="flex justify-between items-center mb-8 px-10">


          {/* Middle: Search Bar */}
          <div className="relative w-[900px]">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm focus:outline-none text-gray-600"
            />
            <Icon
              icon="mdi:magnify"
              className="absolute left-3 top-3 text-[#999999] text-lg"
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
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Attendance Rate Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-black">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Attendance Rate</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">95 %</div>
                <div className="text-xs text-gray-500">This week</div>
              </div>
              <div className="w-16 h-16">
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
                    strokeDasharray="95, 100"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Tutor Performance Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-black ">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-4">Tutor Performance</div>

              <div className="flex items-center gap-4">

                <div className="text-yellow-400">
                  <Icon icon="teenyicons:star-circle-solid" className="text-6xl" />
                </div>

                <div>

                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-800">4.6</span>
                    <span className="text-sm text-gray-500 ml-1">/ 5</span>
                  </div>

                  <div className="text-xs text-gray-500">avg, rating</div>

                </div>

              </div>
            </div>
          </div>

          {/* Course Progress Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-black">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Course Progress</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">8</div>
                <div className="text-xs text-gray-500">Active courses</div>
              </div>
              <div className="text-[#3A7D7D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Complaints Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-black">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Complaints Pending</div>
                <div>

                  <Icon icon="streamline-freehand:customer-action-complaint" className="text-red-500" width={44} height={44} />


                  <div className="mt-2 flex flex-col ">

                    <div className="text-3xl font-bold text-gray-800 mb-1">3</div>
                    <div className="text-xs text-gray-500">Unresolved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance & Billing Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Attendance & Exams */}
          <div className="bg-[#FEFCE8] rounded-2xl p-6 border-2 border-black">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Attendance & Exams</h2>
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-block text-xs font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-md border border-gray-300">Class 1 - Attendance</span>
              <Icon icon="stash:filter-solid" className="text-[#3A7D7D] text-3xl mr-4" />
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 font-semibold text-gray-700">Student Name</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Total Classes</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Present</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Absent</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Marks</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 text-gray-600">{record.studentName}</td>
                    <td className="text-center py-3 text-gray-600">{record.totalClasses}</td>
                    <td className="text-center py-3 text-gray-600">{record.present}</td>
                    <td className="text-center py-3 text-gray-600">{record.absent}</td>
                    <td className="text-center py-3 text-gray-600">{record.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bills & Accounting */}
          <div className="bg-[#FEFCE8] rounded-2xl p-8 border-2 border-black">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Bills & Accounting</h2>
            <div className="flex gap-6 mb-8">
              {/* Paid This Month Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-gray-800">35000</div>
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 font-medium">Paid This Month</div>
              </div>

              {/* Pending Dues Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-gray-800">12000</div>
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600 font-medium">Pending Dues</div>
              </div>

              {/* Last Payment Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-gray-800">2 days Ago</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Last Payment</div>
              </div>
            </div>

            <button className=" block w-3/5 mx-auto h-18 bg-[#3A7D7D] text-white py-3 rounded-2xl hover:bg-[#2A6D6D] transition-colors duration-200 font-semibold text-lg">
              View All Invoices
            </button>
          </div>
        </div>

        {/* Tutor Monitoring Section */}
        <div className="bg-[#FEFCE8] rounded-2xl p-6 shadow-sm border-2 border-black">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Tutor Monitoring</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 font-semibold text-gray-700">Tutor Name</th>
                <th className="text-center py-3 font-semibold text-gray-700">Total Classes</th>
                <th className="text-center py-3 font-semibold text-gray-700">Chapter</th>
                <th className="text-center py-3 font-semibold text-gray-700">Total Student</th>
                <th className="text-center py-3 font-semibold text-gray-700">Week</th>
                <th className="text-center py-3 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 font-semibold text-gray-700">Complain/ Feedback</th>
              </tr>
            </thead>
            <tbody>
              {tutorRecords.map((record, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 text-gray-600">{record.tutorName}</td>
                  <td className="text-center py-3 text-gray-600">{record.totalClasses}</td>
                  <td className="text-center py-3 text-gray-600">{record.chapter}</td>
                  <td className="text-center py-3 text-gray-600">{record.totalStudent}</td>
                  <td className="text-center py-3 text-gray-600">{record.week}</td>
                  <td className="text-center py-3">
                    <div className="flex gap-2 justify-center">
                      <span className="px-3 py-1 text-xs font-medium rounded-md shadow-lg bg-[#4a9b8e] text-white">Approved</span>
                      <span className="px-3 py-1 text-xs font-medium rounded-md shadow-lg bg-[#9bc4ae] text-white">Pending</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-600">{record.complaintFeedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
