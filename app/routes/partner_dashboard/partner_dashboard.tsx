import React, { useState } from "react";
import { Link } from "react-router";
import { Icon } from "@iconify/react";

export default function PartnerDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  


  const sidebarItems = [
    {
      label: "Dashboard",
      icon: (
             <Icon icon="iconamoon:home-duotone" width={24} height={24} />

      ),
    },
    {
      label: "Profile Management",
      icon: (
       <Icon icon="iconamoon:profile-bold" width={24} height={24} />
      
      ),
    },
    {
      label: "Assigned Schools",
      icon: (
        <Icon icon="teenyicons:school-outline" width={24} height={24} />

      ),
    },
    {
          label: "Attendance",
          icon: (
            <Icon icon="mingcute:calendar-2-line" width={24} height={24} />
    
          ),
        },  
    {
      label: "Assignment Management",
      icon: (
       <Icon icon="hugeicons:assignments" width={30} height={30} />

      ),
    },
    {
      label: "Progress Report",
      icon: (
        <Icon icon="heroicons:chart-bar" width={24} height={24} />

      ),
    },
    {
      label: "Leaderboard",
      icon: (
        <Icon icon="mdi:trophy-outline" width={24} height={24} />

      ),
    },
    {
      label: "Salary + Commission",
      icon: (
        <Icon icon="carbon:money" width={24} height={24} />

      ),
    },
    {
      label: "Component Reports",
      icon: (
     <Icon icon="lucide:component" width={24} height={24} />

      
      ),
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar */}
      <aside className="w-60 fixed left-0 top-0 bottom-0 bg-[#438582] p-4 flex flex-col shadow-xl z-20">
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-6 py-2 overflow-y-auto">
          {sidebarItems.map((item, index) => {
            const routeMap: Record<string, string> = {
              "Dashboard": "/partner_dashboard",
              "Profile Management": "/partner_dashboard/profile_management",
              "Assigned Schools": "/partner_dashboard/assigned_schools",
              "Attendance": "/partner_dashboard/attendance",
              "Assignment Management": "/partner_dashboard/assignment_management",
              "Progress Report": "/partner_dashboard/progress_report",
              "Leaderboard": "/partner_dashboard/leaderboard",
              "Salary + Commission": "/partner_dashboard/salary_commission",
              "Component Reports": "/partner_dashboard/component_reports",
            };
            return (
              <Link
                key={item.label}
                to={routeMap[item.label] || "#"}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 
                           ${index === 0 
                    ? "bg-[#3A7D7D]/80 text-white border   font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
                    : "bg-transparent text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:font-medium"}`}              >
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
      {/* Search Bar and Profile */}
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


      {/* Main Content */}
      <main className="pt-[120px] fixed top-0 left-60 px-10 pb-10 overflow-y-auto h-screen w-[calc(100%-240px)] bg-[#fdfbf0]">
        

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Partner Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your profile, schools, tasks, and performance metrics</p>
          </div>
      </main>
    </div>
  );
}
