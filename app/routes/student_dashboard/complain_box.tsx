import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { Link } from "react-router";

import { Icon } from "@iconify/react";

export default function ComplainBoxPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("complaint");

  const sidebarItems = [
    { label: "Dashboard", icon: <Icon icon="iconamoon:home-duotone" width={24} height={24} /> },
    { label: "Learning Material", icon: <Icon icon="mingcute:calendar-2-line" width={24} height={24} /> },
    { label: "Task", icon: <Icon icon="hugeicons:task-02" width={24} height={24} /> },
    { label: "Examination", icon: <Icon icon="mdi:file-document-outline" width={24} height={24} /> },
    { label: "Progress", icon: <Icon icon="streamline-plump:graph-bar-increase-solid" width={24} height={24} /> },
    { label: "Complain Box", icon: <Icon icon="streamline-freehand:customer-action-complaint" width={24} height={24} /> },
  ];

  const routeMap: Record<string, string> = {
    Dashboard: "/student_dashboard",
    "Learning Material": "/student_dashboard/learning_material",
    Task: "/student_dashboard/task",
    Examination: "/student_dashboard/examination",
    Progress: "/student_dashboard/progress",
    "Complain Box": "/student_dashboard/complain_box",
  };

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar */}
      <aside className="max-w-60 min-w-60 flex flex-col bg-[#438582] min-h-screen p-4">
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-6">
          {sidebarItems.map((item) => {
           const isActive =
  item.label === "Dashboard"
    ? location.pathname === routeMap[item.label] // exact match
    : location.pathname.startsWith(routeMap[item.label]);

            return (
              <NavLink
                key={item.label}
                to={routeMap[item.label]}
                className={() =>
                  `w-full text-left flex items-center gap-2 px-3 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm ${
                    isActive
                      ? "bg-[#3A7D7D]/80 text-white border font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
                      : "bg-transparent text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:font-medium"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 bg-[#fdfbf0]">
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
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Submit a Complaint</h1>
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
        <div className="flex gap-4 mt-10 ml-10  ">
          <button
            onClick={() => setActiveTab("complaint")}
            className={`px-6 py-2 rounded-lg border transition-all ${
              activeTab === "complaint" ? "bg-white text-black border-black" : "bg-[#2D8F78] text-white"
            }`}
          >
            Complaint
          </button>

          <button
            onClick={() => setActiveTab("resolved")}
            className={`px-6 py-2 rounded-lg border transition-all ${
              activeTab === "resolved" ? "bg-white text-black border-gray-300" : "bg-[#2D8F78] text-white"
            }`}
          >
            Resolved
          </button>
        </div>

        {/* Complaint Form */}
        {activeTab === "complaint" && (
          <div className="bg-[#FFFBEA] p-6 rounded-2xl shadow-lg mt-6 border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800">Describe Your Complaint</h2>
            <textarea
              placeholder="Write your issue in detail..."
              className="w-full h-64 p-4 mt-4 text-black border border-gray-300 shadow-md rounded-xl outline-none focus:ring-2 focus:ring-[#2D8F78] bg-white"
            ></textarea>

            <div className="flex justify-end gap-4 mt-4">
              <button className="text-black rounded-lg border px-4 border-gray-500 bg-white hover:bg-gray-100">Cancel</button>
              <button className="px-6 py-2 bg-[#2D8F78] hover:bg-[#32796a] shadow-lg text-white rounded-lg">Submit</button>
            </div>
          </div>
        )}

        {/* Resolved Section */}
        {activeTab === "resolved" && (
          <div className="bg-[#FFFBEA] p-6 rounded-2xl shadow-lg mt-6 border border-gray-300">
            <div className="bg-white p-4">
            <div className="flex justify-between">

            <h2 className="text-xl font-semibold text-gray-800">Technical Issue with Robotics Module</h2>
            <div className="flex justify-end text-sm text-gray-500 mt-1">2025-01-08 14:30</div>
            </div>
            <p className="text-gray-700 mt-2">
              The robotics simulation software keeps crashing during the exercise.
            </p>

            <h3 className="font-semibold mt-4">Admin Reply:</h3>
            <div className="bg-[#D9F6DD] p-4 rounded-2xl mt-3 border-l-8 border-b-4 border-[#2D8F78]">
              <div className="flex justify-between">

              <p className="font-semibold text-black text-sm">Admin</p>
              <div className="flex justify-end text-sm text-gray-500 mt-1">
                2025-01-08 15:00</div>
              </div>
              <p className="mt-1 text-gray-700">
                Thank you for reporting this issue. Our team is working on it.
              </p>
            </div>
        </div>
          </div>
        )}
      </main>
    </div>
  );
}
