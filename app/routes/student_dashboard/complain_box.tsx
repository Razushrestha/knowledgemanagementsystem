import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { Icon } from "@iconify/react";

export default function ComplainBoxPage() {
  const navigate = useNavigate();
  const location = useLocation();
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
        <h1 className="text-3xl font-bold text-gray-800">Complain Box</h1>
        <p className="text-gray-600 mt-1 text-sm">Submit issues and view replies</p>

        {/* Tabs */}
        <div className="flex gap-4 mt-6 ">
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
              <button className="text-gray-600 rounded-lg hover:underline">Cancel</button>
              <button className="px-6 py-2 bg-[#2D8F78] shadow-lg text-white rounded-lg">Submit</button>
            </div>
          </div>
        )}

        {/* Resolved Section */}
        {activeTab === "resolved" && (
          <div className="bg-[#FFFBEA] p-6 rounded-2xl shadow-lg mt-6 border border-gray-300">
            <div className="bg-white p-4">

            <h2 className="text-xl font-semibold text-gray-800">Technical Issue with Robotics Module</h2>
            <p className="text-gray-700 mt-2">
              The robotics simulation software keeps crashing during the exercise.
            </p>
            <div className="flex justify-end text-sm text-gray-500 mt-1">2025-01-08 14:30</div>

            <h3 className="font-semibold mt-4">Admin Reply:</h3>
            <div className="bg-[#D9F6DD] p-4 rounded-xl mt-3 border-l-4 border-[#2D8F78]">
              <div className="flex justify-end text-sm text-gray-500 mt-1">
                2025-01-08 15:00</div>
              <p className="font-semibold text-black text-sm">Admin</p>
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
