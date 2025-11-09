import React, { useState } from "react";
import { Link } from "react-router";

interface ClassRecord {
  schoolName: string;
  chapter: number;
  weeks: number;
  weeklyCompleted: number;
}

interface StudentRecord {
  studentName: string;
  totalClasses: number;
  present: number;
  absent: number;
  assignment: string;
  marks: number;
}

export default function TutorDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [classRecords, setClassRecords] = useState<ClassRecord[]>([
    {
      schoolName: "Vidya Niketan",
      chapter: 2,
      weeks: 6,
      weeklyCompleted: 5,
    },
    {
      schoolName: "Pragati",
      chapter: 1,
      weeks: 5,
      weeklyCompleted: 5,
    },
    {
      schoolName: "Kanchenjunga",
      chapter: 2,
      weeks: 6,
      weeklyCompleted: 4,
    },
    {
      schoolName: "Kanchenjunga",
      chapter: 2,
      weeks: 6,
      weeklyCompleted: 4,
    },
  ]);

  const [studentRecords, setStudentRecords] = useState<StudentRecord[]>([
    {
      studentName: "Alice Johnson",
      totalClasses: 20,
      present: 20,
      absent: 5,
      assignment: "3 / 5",
      marks: 85,
    },
    {
      studentName: "Alice Johnson",
      totalClasses: 20,
      present: 20,
      absent: 5,
      assignment: "3 / 5",
      marks: 85,
    },
    {
      studentName: "Alice Johnson",
      totalClasses: 20,
      present: 20,
      absent: 5,
      assignment: "3 / 5",
      marks: 85,
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
      label: "Profile Management",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
    },
    {
      label: "Assigned Schools",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1M9 7a3 3 0 016 0m0 0a3 3 0 016 0"/>
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
    }
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
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm
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

          <div className="flex items-center space-x-4">
            <button className="relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </button>

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
          {/* Profile Status Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Profile Status</div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-gray-800">75%</div>
              <div className="w-20 h-20">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3A7D7D"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Assigned Schools Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Assigned Schools</div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-4xl font-bold text-gray-800">3</div>
                <div className="text-xs text-gray-500 mt-1">12 Classes</div>
              </div>
              <div className="text-[#3A7D7D]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Tasks Overview Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Tasks Overview</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">Completed</div>
                <div className="text-lg font-bold text-gray-800">3</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">Pending</div>
                <div className="text-lg font-bold text-gray-800">3</div>
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
            <div className="text-sm font-medium text-gray-700 mb-4">Payment</div>
            <div className="w-full h-24 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3A7D7D" strokeWidth="8" 
                  strokeDasharray="62.8 100.5" transform="rotate(-90 50 50)"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#fbbf24" strokeWidth="8" 
                  strokeDasharray="31.4 100.5" strokeDashoffset="-62.8" transform="rotate(-90 50 50)"/>
              </svg>
            </div>
            <div className="mt-2 text-xs text-center text-gray-500">
              <div>Completed</div>
              <div>Pending</div>
            </div>
          </div>
        </div>

        {/* This Week Classes & Leaderboard Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* This Week Classes */}
          <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1]">
            <h2 className="text-lg font-bold mb-4 text-gray-800">This Week Classes</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 font-semibold text-gray-700">School Name</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Chapter</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Weeks</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Weekly Completed</th>
                </tr>
              </thead>
              <tbody>
                {classRecords.map((record, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 text-gray-600">{record.schoolName}</td>
                    <td className="text-center py-3 text-gray-600">{record.chapter}</td>
                    <td className="text-center py-3 text-gray-600">{record.weeks}</td>
                    <td className="text-center py-3 text-gray-600">{record.weeklyCompleted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Leaderboard */}
          <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1]">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Leaderboard</h2>
            <div className="text-xs text-gray-600 mb-4">You are ranked #4 this month</div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 font-semibold text-gray-700">S.N.</th>
                  <th className="text-left py-3 font-semibold text-gray-700">Name</th>
                  <th className="text-center py-3 font-semibold text-gray-700">Score</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: "John Doe", score: 9 },
                  { rank: 2, name: "John Doe", score: 8 },
                  { rank: 3, name: "John Doe", score: 7 },
                  { rank: 4, name: "John Doe", score: 6.5 },
                ].map((record, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 text-gray-600">{record.rank}.</td>
                    <td className="py-3 text-gray-600">{record.name}</td>
                    <td className="text-center py-3 text-gray-600">{record.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Monitoring Section */}
        <div className="bg-[#f5f1e8] rounded-2xl p-6 border-2 border-[#d4cfc1]">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Student Monitoring</h2>
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-full border border-gray-300">Class 1 - Attendance</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 font-semibold text-gray-700">Student Name</th>
                <th className="text-center py-3 font-semibold text-gray-700">Total Classes</th>
                <th className="text-center py-3 font-semibold text-gray-700">Present</th>
                <th className="text-center py-3 font-semibold text-gray-700">Absent</th>
                <th className="text-center py-3 font-semibold text-gray-700">Assignment</th>
                <th className="text-center py-3 font-semibold text-gray-700">Marks</th>
              </tr>
            </thead>
            <tbody>
              {studentRecords.map((record, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 text-gray-600">{record.studentName}</td>
                  <td className="text-center py-3 text-gray-600">{record.totalClasses}</td>
                  <td className="text-center py-3 text-gray-600">{record.present}</td>
                  <td className="text-center py-3 text-gray-600">{record.absent}</td>
                  <td className="text-center py-3 text-gray-600">{record.assignment}</td>
                  <td className="text-center py-3 text-gray-600">{record.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}