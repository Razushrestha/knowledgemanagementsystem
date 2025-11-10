import React, { useState } from "react";
import { Link } from "react-router";

export default function ComplainBox() {
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (complaint.trim()) {
      setSubmitted(true);
      setComplaint("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleCancel = () => {
    setComplaint("");
  };

  const sidebarItems = [
    { label: "Dashboard", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg> },
    { label: "Learning Material", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C6.228 6.228 2 10.228 2 15s4.228 8.772 10 8.772c5.772 0 10-3.93 10-8.772 0-4.772-4.228-8.747-10-8.747z"/></svg> },
    { label: "Task", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg> },
    { label: "Examination", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg> },
    { label: "Progress", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg> },
    { label: "Complain Box", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      <aside className="w-[220px] flex flex-col bg-[#3A7D7D] min-h-screen p-4">
        <div className="text-2xl font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item, index) => {
            const routeMap: Record<string, string> = {
              "Dashboard": "/student_dashboard",
              "Learning Material": "/student_dashboard/learning_material",
              "Task": "/student_dashboard/task",
              "Examination": "/student_dashboard/examination",
              "Progress": "/student_dashboard/progress",
              "Complain Box": "/student_dashboard/complain_box",
            };
            return (
              <Link
                key={item.label}
                to={routeMap[item.label] || "#"}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 
                           ${index === 5
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

      <main className="flex-1 p-8 bg-[#fdfbf0]">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Dashboard/ <span className="font-medium">Submit a Complaint</span>
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Submit a Complaint</h1>
          <p className="text-gray-600 text-sm">
            Please provide details about your issue below. We will review your submission and get back to you shortly
          </p>
        </div>

        {/* Complaint Form Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#e8e4d8] max-w-4xl">
          {/* Form Title */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">Describe your Complaint in Detail</h2>
          </div>

          {/* Textarea */}
          <div className="mb-6">
            <textarea
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              placeholder="Please provide as much detail as possible..."
              className="w-full h-64 p-4 border-2 border-[#e8e4d8] rounded-xl focus:outline-none focus:border-[#3A7D7D] resize-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancel}
              className="px-6 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2.5 rounded-lg bg-[#3A7D7D] text-white font-medium hover:bg-[#2f5f5f] transition-colors"
            >
              Submit
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p className="text-green-700 font-medium">✓ Complaint submitted successfully!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
