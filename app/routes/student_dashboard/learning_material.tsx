import React from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation, useNavigate} from "react-router";


export default function LearningMaterial() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const navigate = useNavigate();



   const sidebarItems = [
     { label: "Dashboard", icon: <Icon icon="iconamoon:home-duotone" width={24} /> },
     { label: "Attendance", icon: <Icon icon="mingcute:calendar-2-line" width={24} /> },
     { label: "Learning Material", icon: <Icon icon="fluent:learning-app-24-regular" width={24} /> },
     { label: "Task", icon: <Icon icon="hugeicons:task-02" width={24} /> },
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
     { label: "Progress", icon: <Icon icon="streamline-plump:graph-bar-increase-solid" width={24} /> },
     { label: "Complain Box", icon: <Icon icon="streamline-freehand:customer-action-complaint" width={24} /> },
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
           <aside className="w-60 fixed left-0 top-0 bottom-0 bg-[#438582] p-4 flex flex-col shadow-xl z-20">
             <div className="text-2xl text-center font-bold mb-4 text-white">LOGO</div>
             <nav className="flex-1 space-y-6 overflow-y-auto py-4">
               {sidebarItems.map((item) => {
                 const isActive = location.pathname === routeMap[item.label];
                 return (
                   <Link
                     key={item.label}
                     to={routeMap[item.label] || "#"}
                     className={`w-full text-left flex items-center gap-2 px-3 py-3 rounded-lg transition-all duration-200 
              ${isActive
                        ? "bg-[#3A7D7D]/80 text-white border font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
                        : "text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-lg hover:-translate-y-0.5 hover:font-medium"}
            `}
                   >
                     {item.icon}
                     {item.label}
                   </Link>
                 );
               })}
             </nav>
              <button
               className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#f3dada] text-[#dc2626]"
               onClick={() => {
                 localStorage.removeItem("authToken");
                 navigate("/");
               }}
             >
               <Icon icon="ri:logout-circle-line" className="text-lg" />
               Log Out
             </button>
           </aside>
     
       {/* ============================================================
                              NAVBAR
            ============================================================ */}
            <div className="fixed top-0 left-60 right-0 bg-[#fdfbf0] z-10">
              <div className="flex justify-between items-center px-10 py-6">
                {/* Search Bar */}
                <div className="relative w-[900px]">
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm text-gray-600 focus:outline-none"
                  />
                  <Icon icon="mdi:magnify" className="absolute left-3 top-3 text-[#999] text-lg" />
                </div>
      
                {/* Right Icons */}
                <div className="flex items-center space-x-6">
                  <button className="relative">
                    <Icon icon="ri:notification-3-fill" className="text-[#3A7D7D] text-3xl" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                  </button>
      
                  {/* User Dropdown */}
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 bg-[#3A7D7D] px-2 py-1 rounded-3xl"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <div className="w-9 h-9 rounded-full bg-[#3A7D7D] flex items-center justify-center">
                        <Icon icon="ix:user-profile-filled" className="text-white w-9 h-9" />
                      </div>
                      <Icon icon="mdi:chevron-down" className="text-white text-lg w-6 h-6" />
                    </button>
      
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-1 z-20">
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            localStorage.removeItem("authToken");
                            setIsDropdownOpen(false);
                          }}
                        >
                          Sign out
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

      <main className="pt-[120px] fixed top-0 left-60 px-10 pb-10 overflow-y-auto h-screen w-[calc(100%-240px)] bg-[#fdfbf0]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Learning Material</h1>
          <p className="text-gray-600 mt-2">Access and manage your learning materials</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#e8e4d8]">
          <p className="text-gray-700">Learning material content will be displayed here.</p>
        </div>
      </main>
    </div>
  );
}
