import React from "react";
import { Link } from "react-router";

export default function ComplainBox() {
  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar */}
      <aside className="w-[220px] flex flex-col bg-[#3A7D7D] min-h-screen p-4">
        <div className="text-2xl font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-2">
          <Link
            to="/school_dashboard"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Dashboard
          </Link>
          <Link
            to="/school_dashboard/attendance"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
            Attendance
          </Link>
          <Link
            to="/school_dashboard/tutor"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            Tutor
          </Link>
          <Link
            to="/school_dashboard/examination"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            Examination
          </Link>
          <Link
            to="/school_dashboard/invoice"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            Invoice
          </Link>
          <Link
            to="/school_dashboard/complain_box"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-[#3A7D7D] font-medium shadow-lg transform -translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Complain Box
          </Link>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Complain Box</h1>
          <p className="text-gray-600 mt-2">Manage and respond to complaints</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
          <p className="text-gray-700">Complaint management content will be displayed here.</p>
        </div>
      </main>
    </div>
  );
}
