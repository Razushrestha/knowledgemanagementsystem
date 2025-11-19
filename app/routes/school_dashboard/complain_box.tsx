import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Icon } from "@iconify/react";

interface Complaint {
  id: number;
  title: string;
  category: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  submittedBy: string;
  date: string;
  status: "PENDING" | "IN PROGRESS" | "RESOLVED";
  description: string;
  conversation: Array<{
    author: string;
    message: string;
    date: string;
    isAdmin: boolean;
  }>;
}

export default function ComplainBox() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"from-student" | "to-admin" | "new-complaint">("from-student");
  const location = useLocation();

  // Dummy data
  const complaintsFromStudent: Complaint[] = [
    {
      id: 1,
      title: "Technical Issue with Robotics Module",
      category: "Technical",
      priority: "HIGH",
      submittedBy: "Alex Johnson (Grade 9-I)",
      date: "2025-01-09",
      status: "PENDING",
      description: "The robotics simulation software keeps crashing during the programming exercise. I've tried refreshing multiple times but the issue persists.",
      conversation: [
        {
          author: "Admin",
          message: "Thank you for reporting this issue. Our IT team is looking into the robotics simulation problem.",
          date: "2025-01-08 14:30",
          isAdmin: true,
        },
      ],
    },
    {
      id: 2,
      title: "Difficulty Understanding 3D Design Assignment",
      category: "Academic",
      priority: "MEDIUM",
      submittedBy: "Emma Johnson",
      date: "2025-01-08",
      status: "RESOLVED",
      description: "The robotics simulation software keeps crashing during the programming exercise. I've tried refreshing multiple times but the issue persists.",
      conversation: [
        {
          author: "Admin",
          message: "Thank you for reporting this issue. Our IT team is looking into the robotics simulation problem.",
          date: "2025-01-08 14:30",
          isAdmin: true,
        },
      ],
    },
    {
      id: 3,
      title: "Tutor Not Available for Scheduled Session",
      category: "Scheduling",
      priority: "MEDIUM",
      submittedBy: "Marcus Wilson (Grade 8-A)",
      date: "2025-01-08",
      status: "PENDING",
      description: "My mathematics tutor didn't show up for our scheduled session yesterday. This is the second time this month.",
      conversation: [
        {
          author: "Admin",
          message: "Thank you for reporting this issue. Our IT team is looking into the robotics simulation problem.",
          date: "2025-01-08 14:30",
          isAdmin: true,
        },
      ],
    },
  ];

  const complaintsToAdmin: Complaint[] = [
    {
      id: 4,
      title: "Platform Performance Issues",
      category: "Technical",
      priority: "HIGH",
      submittedBy: "Admin",
      date: "2025-01-08",
      status: "IN PROGRESS",
      description: "Our students are experiencing frequent timeouts and slow loading times during peak hours (2-4 PM). This is affecting their learning experience.",
      conversation: [
        {
          author: "Admin",
          message: "We're upgrading server capacity and implementing CDN improvements. Expected completion by Jan 15th.",
          date: "2025-01-08 14:30",
          isAdmin: true,
        },
      ],
    },
    {
      id: 5,
      title: "Request for Additional Modules",
      category: "Feature Request",
      priority: "MEDIUM",
      submittedBy: "School Admin",
      date: "2025-01-03",
      status: "PENDING",
      description: "We would like to request additional modules for advanced robotics and AI programming for our Grade 8 students.",
      conversation: [],
    },
  ];

  const sidebarItems = [
    { label: "Dashboard", icon: <Icon icon="iconamoon:home-duotone" width={24} height={24} /> },
    { label: "Attendance", icon: <Icon icon="mingcute:calendar-2-line" width={24} height={24} /> },
    { label: "Tutor", icon: <Icon icon="fluent-emoji-high-contrast:teacher" width={24} height={24} /> },
    { label: "Examination", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
    { label: "Invoice", icon: <Icon icon="streamline-ultimate:cash-payment-bills-bold" width={24} height={24} /> },
    { label: "Complain Box", icon: <Icon icon="streamline-freehand:customer-action-complaint" width={24} height={24} /> },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "IN PROGRESS":
        return "bg-blue-100 text-blue-800";
      case "RESOLVED":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-100 text-red-800";
      case "MEDIUM":
        return "bg-orange-100 text-orange-800";
      case "LOW":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-[220px] flex-col bg-[#3A7D7D] fixed top-0 left-0 h-screen p-4">
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
                           ${location.pathname === routeMap[item.label]
                    ? "bg-[#3A7D7D]/80 text-white border font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
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

      {/* Sidebar - Mobile */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
      <aside className={`fixed top-0 left-0 h-screen w-[220px] bg-[#3A7D7D] p-4 flex flex-col md:hidden z-50 transform transition-transform duration-300 ${
        isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-4">
          {sidebarItems.map((item) => {
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
                           ${location.pathname === routeMap[item.label]
                    ? "bg-[#3A7D7D]/80 text-white border font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
                    : "bg-transparent text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:font-medium"}`}
                onClick={() => setIsMobileSidebarOpen(false)}
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
            setIsMobileSidebarOpen(false);
          }}
        >
          <Icon icon="ri:logout-circle-line" className="text-lg" />
          Log Out
        </Link>
      </aside>

      {/* Main Content */}
      <main className="md:ml-[220px] flex-1 p-4 md:p-8 bg-[#FEFCE8] w-full md:w-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-8 px-0 md:px-10 gap-4">
          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          >
            <Icon icon="mdi:menu" className="text-[#3A7D7D] text-3xl" />
          </button>

          {/* Title and Subtitle */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Complaint Management</h1>
            <p className="text-sm md:text-base text-gray-600">View, file, and track all complaints within your school</p>
          </div>
         

           {/* Middle: Search Bar */}
                    <div className="relative flex-1 md:w-[50px]">
                      <input
                        type="search"
                        placeholder="Search"
                        className="w-md pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm focus:outline-none text-gray-600"
                        />
                      <Icon
                        icon="mdi:magnify"
                        className="absolute left-3 top-3 text-[#999999] text-lg"
                      />
                    </div>
          {/* Right: Icons */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Notification */}
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
                <Icon icon="mdi:chevron-down" className="text-white text-lg w-6 h-6 hidden sm:block" />
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
       

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3 md:gap-4">
          <button
            onClick={() => setActiveTab("from-student")}
            className={`px-4 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-200 border-2 ${
              activeTab === "from-student"
                ? "bg-white text-gray-800 border-black"
                : "bg-[#3A7D7D] text-white border-[#3A7D7D] hover:opacity-90"
            }`}
          >
            From Student ({complaintsFromStudent.length})
          </button>

          <button
            onClick={() => setActiveTab("to-admin")}
            className={`px-4 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-200 border-2 ${
              activeTab === "to-admin"
                ? "bg-white text-gray-800  border-black"
                : "bg-[#3A7D7D] text-white border-[#3A7D7D] hover:opacity-90"
            }`}
          >
            To Admin ({complaintsToAdmin.length})
          </button>

          <button
            onClick={() => setActiveTab("new-complaint")}
            className={`px-4 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-200 border-2 ${
              activeTab === "new-complaint"
                ? "bg-white text-gray-800 border-black"
                : "bg-[#3A7D7D] text-white border-[#3A7D7D] hover:opacity-90"
            }`}
          >
            <Icon icon="mdi:plus" className="inline mr-1" />
            New Complaint to Admin
          </button>
        </div>

        {/* Filter and Action Bar */}
        <div className="mb-6 flex flex-wrap justify-end items-center gap-4">
          <select className="px-3 py-2 border border-gray-700 text-black rounded-lg text-sm bg-white focus:outline-none">
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>

        {/* Complaints List */}
        {(activeTab === "from-student" || activeTab === "to-admin") && (
          <div className="space-y-4">
            {(activeTab === "from-student" ? complaintsFromStudent : complaintsToAdmin).map((complaint) => (
              <div
                key={complaint.id}
                className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 hover:shadow-md transition-shadow duration-200"
              >

               {/* Header */}
<div className="flex flex-col gap-4 mb-4 md:flex-row md:items-start md:justify-between">

  {/* LEFT: Title + user info */}
  <div className="flex-1">
    
    {/* Row: Title + Badges + Reply Button */}
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        {complaint.title}
      </h3>

      {/* Right Side: Badges + Reply */}

        {/* Badges */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
            complaint.priority
          )}`}
        >
          {complaint.priority}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
            complaint.status
          )}`}
        >
          {complaint.status}
        </span>
      </div>

        {/* Reply Button */}
        <button className="flex items-center gap-1 px-3 py-1.5 bg-[#DDFFE7] text-black rounded-lg hover:bg-[#438582] hover:text-white transition-colors duration-200">
          <Icon icon="material-symbols-light:reply-rounded" width={20} height={20} />
          Reply
        </button>

    </div>

    {/* User + Date */}
    <div className="flex items-center gap-3 mt-2 text-sm text-gray-600 flex-wrap">
      <div className="flex items-center gap-1">
        <Icon icon="iconamoon:profile" width={16} height={16} />
        <span>{complaint.submittedBy}</span>
      </div>

      <div className="flex items-center gap-1">
        <Icon icon="ant-design:calendar-outlined" width={16} height={16} />
        <span>{complaint.date}</span>
      </div>
    </div>

  </div>
</div>


          

                {/* Description */}
                <p className="text-gray-700 mb-4 text-sm md:text-base">{complaint.description}</p>

                {/* Conversation */}
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Conversation:</h4>
                  <div className="space-y-3">
  {complaint.conversation.map((msg, idx) => (
    <div key={idx} className="w-full">
      <div
        className={`
          w-full 
          px-4 py-3 
          border-l-4 
          border-[#3A7D7D] 
          rounded-md 
          ${msg.isAdmin 
            ? "bg-[#DDFFE7] text-black" 
            : "bg-blue-100 text-gray-800"
          }
        `}
      >
        <p className="text-sm">{msg.message}</p>
        <span className="text-xs opacity-75 mt-1 block">{msg.date}</span>
      </div>
    </div>
  ))}
</div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* New Complaint Form - Only show when tab is active */}
        {activeTab === "new-complaint" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Create New Complaint</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter complaint title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A7D7D]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A7D7D]">
                    <option>Select Category</option>
                    <option>Technical</option>
                    <option>Academic</option>
                    <option>Scheduling</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A7D7D]">
                    <option>Select Priority</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Describe your complaint in detail..."
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A7D7D]"
                ></textarea>
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#3A7D7D] text-white rounded-lg font-medium hover:bg-[#2A6D6D] transition-colors duration-200"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
