import React, { useState, useEffect } from "react";
import { Link } from "react-router";

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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
    },
    {
      label: "Attendance",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      ),
    },
    {
      label: "Tutor",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
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
      label: "Invoice",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Attendance Rate Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
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
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Tutor Performance</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-gray-800">4.6</span>
                  <span className="text-sm text-gray-500">/5</span>
                </div>
                <div className="text-xs text-gray-500">avg. rating</div>
              </div>
              <div className="text-yellow-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Course Progress Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Course Progress</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">8</div>
                <div className="text-xs text-gray-500">Active courses</div>
              </div>
              <div className="text-[#3A7D7D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Complaints Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-4">Complaints Pending</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">3</div>
                <div className="text-xs text-gray-500">Unresolved</div>
              </div>
              <div className="text-red-500">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance & Billing Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Attendance & Exams */}
          <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1]">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Attendance & Exams</h2>
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-block text-xs font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-full border border-gray-300">Class 1 - Attendance</span>
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a2 2 0 002 2h8a2 2 0 002-2H6z" clipRule="evenodd" />
              </svg>
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
          <div className="bg-[#f5f1e8] rounded-2xl p-8 border-2 border-[#d4cfc1]">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Bills & Accounting</h2>
            <div className="flex gap-6 mb-8">
              {/* Paid This Month Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-gray-800">{billingInfo.paidThisMonth.toLocaleString()}</div>
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                  </svg>
                </div>
                <div className="text-sm text-gray-600 font-medium">Paid This Month</div>
              </div>

              {/* Pending Dues Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-gray-800">{billingInfo.pendingDues.toLocaleString()}</div>
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                  </svg>
                </div>
                <div className="text-sm text-gray-600 font-medium">Pending Dues</div>
              </div>

              {/* Last Payment Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-bold text-gray-800">{billingInfo.lastPayment}</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Last Payment</div>
              </div>
            </div>

            <button className="w-full bg-[#3A7D7D] text-white py-3 rounded-2xl hover:bg-[#2A6D6D] transition-colors duration-200 font-semibold text-lg">
              View All Invoices
            </button>
          </div>
        </div>

        {/* Tutor Monitoring Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
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
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#4a9b8e] text-white">Approved</span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#9bc4ae] text-white">Pending</span>
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
