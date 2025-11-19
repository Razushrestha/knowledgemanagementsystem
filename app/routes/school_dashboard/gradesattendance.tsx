import React, { useState } from "react";
import { Icon } from "@iconify/react";


// Grades list for dropdown (FIX ADDED)
const grades = [
  "Grade 1","Grade 2","Grade 3","Grade 4","Grade 5",
  "Grade 6","Grade 7","Grade 8","Grade 9","Grade 10"
];

// Grades 1–5 With Random Attendance
const generateGradesData = () => {
  return Array.from({ length: 10 }, (_, i) => {
    const grade = i + 1;
    const totalStudents = Math.floor(Math.random() * 100) + 140;
    const present = Math.floor(totalStudents * (Math.random() * 0.3 + 0.85));
    const absent = totalStudents - present;

    return {
      grade,
      total: totalStudents,
      present,
      absent,
      week: grade,
      lecture: ["First Module Introduction", "Components of IoT", "Worked on small Project", "Presentation of Project", "Grading of the Project","ok","ok","ok","ok","ok"][i],
    };
  });
};

// 10 Students Per Grade
const generateStudentsData = () => {
  const firstNames = ["Karthik", "Kishore", "Anushray", "Kristina", "Pradesha", "Smit", "Samidha", "Samridhi", "Nikita", "Rahul"];
  const lastNames = ["Sharma", "Pandey", "Khanal", "Shrestha", "Nepal", "Jal", "Raul", "Baui", "Shark", "Singh"];

  return Array.from({ length: 10 }, (_, i) => {
    const firstName = firstNames[i];
    const lastName = lastNames[i];
    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      today: Math.random() > 0.3 ? "Present" : "Absent",
      presentDays: Math.floor(Math.random() * 10) + 5,
      absentDays: Math.floor(Math.random() * 5) + 1,
    };
  });
};

const gradesData = generateGradesData();
const studentsData = generateStudentsData();

export default function GradesAttendance() {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("11/11/2025");
  const [selectedClass, setSelectedClass] = useState("Grade 1");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // Sidebar Items
  const sidebarItems = [
    { label: "Dashboard", icon: <Icon icon="iconamoon:home-duotone" width={24} /> },
    { label: "Attendance", icon: <Icon icon="mingcute:calendar-2-line" width={24} /> },
    { label: "Tutor", icon: <Icon icon="fluent-emoji-high-contrast:teacher" width={24} /> },
    { label: "Examination", icon: <Icon icon="mdi:file-document-edit-outline" width={24} /> },
    { label: "Invoice", icon: <Icon icon="streamline-ultimate:cash-payment-bills-bold" width={24} /> },
    { label: "Complain Box", icon: <Icon icon="streamline-freehand:customer-action-complaint" width={24} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">

      {/* SIDEBAR DESKTOP */}
      <aside className="hidden md:flex w-[220px] flex-col bg-[#3A7D7D] fixed top-0 left-0 h-screen p-4">
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-4">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2 px-3 py-2 w-full rounded-lg text-white/90 hover:bg-white hover:text-[#3A7D7D] transition shadow"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#f3dada] text-[#dc2626]"
          onClick={() => localStorage.removeItem("authToken")}
        >
          <Icon icon="ri:logout-circle-line" /> Log Out
        </button>
      </aside>

      {/* MOBILE OVERLAY */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[220px] bg-[#3A7D7D] p-4 md:hidden z-50 transform transition-transform duration-300 ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>

        <nav className="flex-1 space-y-4">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2 px-3 py-2 w-full rounded-lg text-white/90 hover:bg-white hover:text-[#3A7D7D] transition shadow"
              onClick={() => setIsMobileSidebarOpen(false)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#f3dada] text-[#dc2626]"
          onClick={() => {
            localStorage.removeItem("authToken");
            setIsMobileSidebarOpen(false);
          }}
        >
          <Icon icon="ri:logout-circle-line" /> Log Out
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="md:ml-[220px] flex-1 p-4 md:p-8 bg-[#FEFCE8] w-full">

        {/* NAVBAR */}
        <div className="flex justify-between items-center mb-8 px-4 md:px-10 gap-4">

          <button className="md:hidden" onClick={() => setIsMobileSidebarOpen(true)}>
            <Icon icon="mdi:menu" className="text-[#3A7D7D] text-3xl" />
          </button>

          <div className="relative flex-1 md:w-[900px]">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm focus:outline-none text-gray-600"
            />
            <Icon icon="mdi:magnify" className="absolute left-3 top-3 text-[#999] text-lg" />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Icon icon="ri:notification-3-fill" className="text-[#3A7D7D] text-3xl" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button
                className="flex items-center gap-1 bg-[#3A7D7D] px-2 py-1 rounded-3xl"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="w-9 h-9 rounded-full bg-[#3A7D7D] flex items-center justify-center">
                  <Icon icon="ix:user-profile-filled" className="text-white text-xl" />
                </div>
                <Icon icon="mdi:chevron-down" className="text-white hidden sm:block" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-1 z-10">
                  <button
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                    onClick={() => localStorage.removeItem("authToken")}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* ----------- GRADE LIST PAGE (LEFT IMAGE) ----------- */}
        {!selectedGrade && (
          <div>

            {/* SMALL FILTER BAR */}
            <div className="flex flex-col md:flex-row i md:items-center  justify-between items-center w-full gap-6 mb-8">
              
              {/* DATE */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-black mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate.split("/").reverse().join("-")}
                  onChange={(e) => {
                    const [year, month, day] = e.target.value.split("-");
                    setSelectedDate(`${month}/${day}/${year}`);
                  }}
                  className="border border-gray-300 rounded-lg bg-white text-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3A7D7D]"
                />
              </div>
              {/* tutor */}
              <div className="flex text-center">
                <Icon icon="iconamoon:profile-light" className="text-gray-500" width={24} />
                <p className="text-black pl-4">Ram</p>
              </div>

            </div>


            <div className="bg-white rounded-xl border border-gray-300 pb-4">

              {/* TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-black text-sm">
                  <thead>
                    <tr className="bg-[#DDFFE7] rounded-xl">
                      <th className="px-4 py-3 font-semibold">S.N.</th>
                      <th className="px-4 py-3 font-semibold">Class</th>
                      <th className="px-4 py-3 font-semibold text-center">Total Student</th>
                      <th className="px-4 py-3 font-semibold text-center">No of Present</th>
                      <th className="px-4 py-3 font-semibold text-center">No of Absent</th>
                      <th className="px-4 py-3 font-semibold text-center">Week</th>
                      <th className="px-4 py-3 font-semibold">Ongoing Lecture</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradesData.map((g, index) => (
                      <tr
                        key={g.grade}
                        className="border-b border-gray-200  hover:bg-gray-50 cursor-pointer transition"
                        onClick={() => setSelectedGrade(g.grade)}
                      >
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3 font-medium">Grade {g.grade}</td>
                        <td className="px-4 py-3 text-center">{g.total}</td>
                        <td className="px-4 py-3 text-center">{g.present}</td>
                        <td className="px-4 py-3 text-center">{g.absent}</td>
                        <td className="px-4 py-3 text-center">{g.week}</td>
                        <td className="px-4 py-3">{g.lecture}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ----------- SPECIFIC GRADE PAGE (RIGHT IMAGE) ----------- */}
        {selectedGrade && (
          <div>

            {/* TOP FILTER ROW */}
            <div className="flex justify-between">

              <div className="flex gap-4">

                {/* DATE INPUT */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-black mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate.split("/").reverse().join("-")}
                    onChange={(e) => {
                      const [year, month, day] = e.target.value.split("-");
                      setSelectedDate(`${month}/${day}/${year}`);
                    }}
                    className="border border-gray-300 rounded-lg bg-white text-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3A7D7D]"
                  />
                </div>

                {/* CLASS SELECT — FIXED */}
                <div className="relative inline-block">
                  <label className="text-sm font-medium text-black mb-2 block">Class</label>

                  <select
                    value={selectedGrade}
                    onChange={(e) =>
                      setSelectedGrade(Number(e.target.value)) // FIXED
                    }
                    className="appearance-none px-3 py-2 pr-8 text-sm border border-black rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-black text-black"
                    style={{ width: "auto", minWidth: "130px" }}
                  >
                    {grades.map((grade) => (
                      <option
                        key={grade}
                        value={grade.replace("Grade ", "")} // FIXED
                      >
                        {grade}
                      </option>
                    ))}
                  </select>

                  {/* Custom dropdown icon */}
                  <Icon
                    icon="nrk:arrow-dropdown"
                    className="absolute right-2 top-[40px] text-black text-lg pointer-events-none"
                  />
                </div>

              </div>

              {/* STATUS FILTER */}
              <div>
                <label className="text-sm font-medium text-black mb-2 block">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg bg-white text-black px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3A7D7D]"
                >
                  <option>All Status</option>
                  <option>Present</option>
                  <option>Absent</option>
                </select>
              </div>
            </div>


            {/* CARD */}
            <div className="bg-[#FFFDF4]  rounded-xl mt-8 py-4 border border-gray-300">

             {/* HEADER */}
<div className="flex flex-col md:flex-row justify-between items-center px-4 gap-4 pb-4">

  {/* LEFT SECTION */}
  <div className="flex items-center gap-6">
    
    <h2 className="text-lg font-bold text-black">
      Grade - {selectedGrade}
    </h2>

    {/* Tutor */}
    <div className="flex items-center gap-2">
      <Icon icon="iconamoon:profile-light" className="text-gray-500" width={24} />
      <p className="text-black">Ram</p>
    </div>
  </div>

  {/* BACK BUTTON */}
  <button
    className="flex items-center gap-1 text-[#3A7D7D] font-medium text-sm hover:text-[#2A6D6D]"
    onClick={() => setSelectedGrade(null)}
  >
    <Icon icon="mdi:arrow-left" width={18} />
    Back
  </button>
</div>

              {/* TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-black text-sm">
                  <thead>
                    <tr className="bg-[#DDFFE7]">
                      <th className="px-4 py-3 font-semibold">S.N.</th>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold text-center">Today's Attendance</th>
                      <th className="px-4 py-3 font-semibold text-center">No. of Present Days</th>
                      <th className="px-4 py-3 font-semibold text-center">No. of Absent Days</th>
                    </tr>
                  </thead>

                  <tbody>
                    {studentsData
                      .filter((s) => {
                        if (statusFilter === "All Status") return true;
                        return s.today === statusFilter;
                      })
                      .map((s, index) => (
                        <tr key={s.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3">{index + 1}</td>
                          <td className="px-4 py-3 font-medium">{s.name}</td>

                          {/* STATUS BADGE */}
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold 
                              ${s.today === "Present" ? "bg-green-500" : "bg-red-500"}`}
                            >
                              {s.today}
                            </span>
                          </td>

                          <td className="px-4 py-3 text-center">{s.presentDays}</td>
                          <td className="px-4 py-3 text-center">{s.absentDays}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        )}

      </main>

    </div>
  );
}
