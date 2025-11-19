"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";

export default function AttendancePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // Mock JSON data
    const attendanceData = [
        {
            date: "11/11/2025",
            status: "Absent",
            time: "09:30–11:30",
            hours: "2.5 hrs",
            lecture: "First Module Introduction",
        },
        {
            date: "05/11/2025",
            status: "Present",
            time: "13:00–14:00",
            hours: "1 hr",
            lecture: "Components of IoT",
        },
        {
            date: "31/10/2025",
            status: "Present",
            time: "09:00–11:00",
            hours: "2 hrs",
            lecture: "Worked on Small Project",
        },
    ];

    const sidebarItems = [
        {
            label: "Dashboard",
            icon: <Icon icon="iconamoon:home-duotone" width={24} height={24} />,
        },
        {
            label: "Attendance",
            icon: <Icon icon="mingcute:calendar-2-line" width={24} height={24} />,
        },
        {
            label: "Learning Material",
            icon: <Icon icon="mingcute:calendar-2-line" width={24} height={24} />,
        },
        {
            label: "Task",
            icon: <Icon icon="hugeicons:task-02" width={24} height={24} />,
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
            icon: <Icon icon="streamline-plump:graph-bar-increase-solid" width={24} height={24} />,
        },
        {
            label: "Complain Box",
            icon: (
                <Icon icon="streamline-freehand:customer-action-complaint" width={24} height={24} />
            ),
        },
    ];

    const routeMap: Record<string, string> = {
        Dashboard: "/student_dashboard",
        Attendance: "/student_dashboard/attendance",
        "Learning Material": "/student_dashboard/learning_material",
        Task: "/student_dashboard/task",
        Examination: "/student_dashboard/examination",
        Progress: "/student_dashboard/progress",
        "Complain Box": "/student_dashboard/complain_box",
    };

    return (
        <div className="flex min-h-screen bg-[#fdfbf0]">

            {/* ===================== Sidebar ===================== */}
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
                                        ? "bg-[#3A7D7D]/80 text-white border font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
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
                    className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#f3dada] text-[#dc2626]"
                    onClick={() => localStorage.removeItem("authToken")}
                >
                    <Icon icon="ri:logout-circle-line" className="text-lg" />
                    Log Out
                </Link>
            </aside>

            {/* ===================== Main Content ===================== */}
            <main className="flex-1 p-8 bg-[#fdfbf0]">

                {/* ===================== Navbar ===================== */}
                <div className="flex justify-between items-center mb-8 px-10">


                    {/* Search Bar */}
                    <div className="relative w-[900px]">
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm focus:outline-none text-gray-600"
                        />
                        <Icon icon="mdi:magnify" className="absolute left-3 top-3 text-[#999999] text-lg" />
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-6">

                        {/* Notifications */}
                        <button className="relative">
                            <Icon icon="ri:notification-3-fill" className="text-[#3A7D7D] text-3xl" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                        </button>

                        {/* Profile Dropdown */}
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

                {/* ===================== Attendance Content ===================== */}
                <div className="px-10 space-y-6">

                    {/* Student Info */}
                    <div className="bg-white rounded-xl shadow p-6 border border-black">
                        <h2 className="text-2xl font-bold text-[#3A7D7D]">Karthik Sharma</h2>
                        <p className="text-gray-600 text-sm">Grade - 1</p>
                    </div>

                    {/* Stats Boxes */}
                    <div className="grid grid-cols-5 gap-6">

                        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
                            <Icon icon="mdi:calendar" className="text-[#3A7D7D] text-3xl mb-2" />
                            <p className="text-gray-600 text-sm">11/11/2025</p>
                        </div>

                        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
                            <p className="text-xs text-gray-500">75/100</p>
                            <p className="font-semibold text-gray-700">Total Days</p>
                        </div>

                        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
                            <Icon icon="mdi:tick-circle" className="text-[#3A7D7D] text-3xl mb-2" />
                            <p className="text-[#3A7D7D] font-bold">70</p>
                            <p className="text-gray-600">Present days</p>
                        </div>

                        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
                            <Icon icon="maki:cross" className="text-red-500 text-3xl mb-2" />
                            <p className="text-red-500 font-bold">5</p>
                            <p className="text-gray-600">Absent days</p>
                        </div>

                        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
                            <Icon icon="uis:graph-bar" className="text-[#3A7D7D] text-3xl mb-2" />
                            <p className="text-black font-bold">75%</p>
                            <p className="text-gray-600">Percentage</p>
                        </div>

                    </div>

                    {/* Attendance Table */}
                    <div className="bg-white  rounded-xl shadow border border-gray-200">
                        <table className="w-full  text-left text-sm">
                            <thead className="bg-[#dff5ea] text-gray-700">
                                <tr>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Time</th>
                                    <th className="px-6 py-3">Hours</th>
                                    <th className="px-6 py-3">Lecture</th>
                                </tr>
                            </thead>

                            <tbody className="text-black">
                                {attendanceData.map((row, index) => (
                                    <tr key={index} className={index !== 0 ? "border-t border-gray-300" : ""}>
                                        <td className="px-6 py-4">{row.date}</td>

                                        <td className="px-6 py-4">
                                            {row.status === "Present" ? (
                                                <span className="bg-green-200 text-green-700 px-3 py-1 rounded-lg text-xs">
                                                    Present
                                                </span>
                                            ) : (
                                                <span className="bg-red-200 text-red-600 px-3 py-1 rounded-lg text-xs">
                                                    Absent
                                                </span>
                                            )}
                                        </td>

                                        <td className="px-6 py-4">{row.time}</td>
                                        <td className="px-6 py-4">{row.hours}</td>
                                        <td className="px-6 py-4">{row.lecture}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
