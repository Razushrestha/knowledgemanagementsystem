import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router";
import { Icon } from "@iconify/react";

interface StudentAttendance {
  id: number;
  name: string;
  status: "present" | "absent";
  totalPresentDays: number;
  totalAbsentDays: number;
  schoolName: string;
  grade: string;
  date: string;
}

interface SchoolGradeData {
  schoolName: string;
  totalStudents: number;
  noOfPresent: number;
  noOfAbsent: number;
  week: number;
  status: string;
}

// Complete dummy data with all grades and schools
const generateStudentData = (): StudentAttendance[] => {
  const schools = [
    "Starlight Academy",
    "Green Valley School",
    "Vidya Niketan",
    "Silver Oak High",
    "Christ Academy",
    "Acharya Institute",
    "Durbar High School",
    "Crescent Public School",
  ];

  const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"];
  const dates = ["11/13/2025", "11/12/2025"];

  const firstNames = [
    "Kartik", "Kishore", "Anushray", "Kristina", "Pradesha", "Smit", "Samidha", "Samridhi", "Nikita",
    "Rahul", "Priya", "Aakash", "Sneha", "Vikram", "Isha", "Arjun", "Divya", "Rohan"
  ];

  const lastNames = [
    "Sharma", "Pandey", "Khanal", "Shrestha", "Nepal", "Jal", "Raul", "Baui", "Shark",
    "Singh", "Verma", "Patel", "Gupta", "Kumar", "Devi", "Malik", "Rao", "Desai"
  ];

  const data: StudentAttendance[] = [];
  let id = 1;

  schools.forEach((school) => {
    grades.forEach((grade) => {
      const studentCount = Math.floor(Math.random() * 5) + 8; // 8-12 students per grade per school

      for (let i = 0; i < studentCount; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        dates.forEach((date) => {
          data.push({
            id: id++,
            name: `${firstName} ${lastName}`,
            status: Math.random() > 0.3 ? "present" : "absent",
            totalPresentDays: Math.floor(Math.random() * 30) + 20,
            totalAbsentDays: Math.floor(Math.random() * 20) + 5,
            schoolName: school,
            grade: grade,
            date: date,
          });
        });
      }
    });
  });

  return data;
};

const allStudentData = generateStudentData();

export default function PartnerAttendance() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("11/13/2025");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState("Grade 1");
  const location = useLocation();

  // State for attendance records
  const [attendanceRecords, setAttendanceRecords] = useState(
    allStudentData.map((student) => ({
      ...student,
      hasMarked: false,
    }))
  );

  const handleAttendanceClick = (id: number, type: "present" | "absent") => {
    setAttendanceRecords((prev: any[]) =>
      prev.map((student: any) => {
        if (student.id !== id) return student;

        // First time marking attendance
        if (!student.hasMarked) {
          if (type === "present") {
            return {
              ...student,
              status: "present",
              hasMarked: true,
              totalPresentDays: student.totalPresentDays + 1,
            };
          } else {
            return {
              ...student,
              status: "absent",
              hasMarked: true,
              totalAbsentDays: student.totalAbsentDays + 1,
            };
          }
        }

        // Already marked, switching status
        if (student.status === type) return student; // Same button clicked

        // Switch from present to absent
        if (student.status === "present" && type === "absent") {
          return {
            ...student,
            status: "absent",
            totalPresentDays: Math.max(0, student.totalPresentDays - 1),
            totalAbsentDays: student.totalAbsentDays + 1,
          };
        }

        // Switch from absent to present
        if (student.status === "absent" && type === "present") {
          return {
            ...student,
            status: "present",
            totalAbsentDays: Math.max(0, student.totalAbsentDays - 1),
            totalPresentDays: student.totalPresentDays + 1,
          };
        }

        return student;
      })
    );
  };

  const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"];

  // Get unique schools
  const schoolNames = useMemo(() => {
    return Array.from(new Set(attendanceRecords.map((s: any) => s.schoolName)));
  }, [attendanceRecords]);

  // Calculate school data for table
  const getSchoolsTableData = useMemo(() => {
    return schoolNames.map((school: string) => {
      const schoolStudents = attendanceRecords.filter(
        (s: any) => s.schoolName === school && s.grade === selectedGrade && s.date === selectedDate
      );
      const presentCount = schoolStudents.filter((s: any) => s.status === "present").length;
      const absentCount = schoolStudents.filter((s: any) => s.status === "absent").length;

      return {
        schoolName: school,
        totalStudents: schoolStudents.length,
        noOfPresent: presentCount,
        noOfAbsent: absentCount,
        week: Math.floor(Math.random() * 5) + 1,
        status: [
          "First Module Introduction",
          "Components of IoT",
          "Worked on small Project",
          "Presentation of Project",
          "Grading of the Project",
        ][Math.floor(Math.random() * 5)],
      };
    });
  }, [schoolNames, selectedGrade, selectedDate, attendanceRecords]);

  // Filter students based on selected school, grade, and date
  const filteredStudents = useMemo(() => {
    return attendanceRecords.filter(
      (s: any) =>
        (!selectedSchool || s.schoolName === selectedSchool) &&
        s.grade === selectedGrade &&
        s.date === selectedDate
    );
  }, [attendanceRecords, selectedSchool, selectedGrade, selectedDate]);

  const sidebarItems = [
    { label: "Dashboard", path: "/partner_dashboard", icon: "mdi:view-dashboard-outline" },
    { label: "Profile Management", path: "/partner_dashboard/profile_management", icon: "mdi:account-outline" },
    { label: "Assigned Schools", path: "/partner_dashboard/assigned_schools", icon: "mdi:school-outline" },
    { label: "Attendance", path: "/partner_dashboard/attendance", icon: "mingcute:calendar-2-line" },
    { label: "Tasks", path: "/partner_dashboard/tasks", icon: "mdi:check-outline" },
    { label: "Progress Report", path: "/partner_dashboard/progress_report", icon: "mdi:chart-line" },
    { label: "Leaderboard", path: "/partner_dashboard/leaderboard", icon: "mdi:trophy-outline" },
    { label: "Salary + Commission", path: "/partner_dashboard/salary_commission", icon: "mdi:currency-usd" },
    { label: "Component Reports", path: "/partner_dashboard/component_reports", icon: "mdi:file-chart-outline" },
  ];

  return (
    <div className="flex min-h-screen bg-[#fdfbf0]">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-[220px] flex-col bg-[#3A7D7D] p-4">
        <div className="text-2xl text-center font-bold mb-8 text-white">LOGO</div>
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  active
                    ? "bg-[#3A7D7D]/80 text-white border font-semibold shadow-[inset_0_0_2px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] -translate-y-0.5"
                    : "bg-transparent text-white/90 hover:bg-white hover:text-[#3A7D7D] hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:font-medium"
                }`}
              >
                <Icon icon={item.icon} width={22} />
                {item.label}
              </Link>
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

      {/* Navbar + Main */}
      <main className="flex-1 p-8 bg-[#fdfbf0]">
        {/* Search Bar and Profile */}
                        <div className="flex justify-between items-center mb-8 px-4 md:px-10 gap-4">
                          {/* Mobile Hamburger Menu */}
                          <button
                            className="md:hidden flex items-center justify-center"
                            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                          >
                            <Icon icon="mdi:menu" className="text-[#3A7D7D] text-3xl" />
                          </button>
                
                          {/* Middle: Search Bar */}
                          <div className="relative flex-1 md:w-[900px]">
                            <input
                              type="search"
                              placeholder="Search"
                              className="w-full pl-10 pr-4 py-2.5 bg-[#E8E6DA] rounded-full text-sm focus:outline-none text-gray-600"
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
                              <span className="absolute top-0 right-0 w-3 h-3  bg-red-500 rounded-full"></span>
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
        {/* Filters */}
        <div className="mb-8 bg-[#fffdf4] rounded-xl p-5">
          <div className="flex flex-wrap items-center gap-6">
            {/* Date Filter */}
            <div className="flex flex-col">
              <label className="text-md font-medium text-black mb-1">Date</label>
              <div className="relative inline-block">
                <input
                  type="date"
                  value={selectedDate.split("/").reverse().join("-")}
                  onChange={(e) => {
                    const [year, month, day] = e.target.value.split("-");
                    setSelectedDate(`${month}/${day}/${year}`);
                  }}
                  className="px-3 py-2 text-sm border border-black bg-white rounded-xl focus:outline-none focus:ring-1 focus:ring-black text-black"
                  style={{ width: "auto", minWidth: "130px" }}
                />
                <Icon
                  icon="uil:calender"
                  className="absolute right-3 top-2.5 text-black text-lg pointer-events-none"
                />
              </div>
            </div>

            {/* School Filter */}
            <div className="flex flex-col relative">
              <label className="text-md font-medium text-black mb-1">School</label>

              <div className="relative inline-block">
                <select
                  value={selectedSchool || ""}
                  onChange={(e) => setSelectedSchool(e.target.value || null)}
                  className="appearance-none px-3 py-2 pr-8 text-sm border border-black rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-black text-black"
                  style={{ width: "auto", minWidth: "130px" }}
                >
                  <option value="">All School</option>
                  {schoolNames.map((school: string) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                </select>

                {/* Custom dropdown icon */}
                <Icon
                  icon="nrk:arrow-dropdown"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-lg pointer-events-none"
                />
              </div>
            </div>

            {/* Grade Filter - Always visible */}
            <div className="flex flex-col relative">
              <label className="text-md font-medium text-black mb-1">Class</label>

              <div className="relative inline-block">
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="appearance-none px-3 py-2 pr-8 text-sm border border-black rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-black text-black"
                  style={{ width: "auto", minWidth: "130px" }}
                >
                  {grades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>

                {/* Custom dropdown icon */}
                <Icon
                  icon="nrk:arrow-dropdown"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-lg pointer-events-none"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Schools Table */}
        {!selectedSchool && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#DDFFE7]">
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">S.N.</th>
                    <th className="px-4 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">School Name</th>
                    <th className="px-4 py-3 text-center text-xs md:text-sm font-semibold text-gray-700">Total Student</th>
                    <th className="px-4 py-3 text-center text-xs md:text-sm font-semibold text-gray-700">No of Present</th>
                    <th className="px-4 py-3 text-center text-xs md:text-sm font-semibold text-gray-700">No of Absent</th>
                    <th className="px-4 py-3 text-center text-xs md:text-sm font-semibold text-gray-700">Week</th>
                    <th className="px-4 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {getSchoolsTableData.map((school: SchoolGradeData, index: number) => (
                    <tr
                      key={school.schoolName}
                      className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedSchool(school.schoolName)}
                    >
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600">{index + 1}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-700 font-medium">{school.schoolName}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600 text-center">{school.totalStudents}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600 text-center">{school.noOfPresent}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600 text-center">{school.noOfAbsent}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600 text-center">{school.week}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-700">{school.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Students Table */}
        {selectedSchool && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-4 md:px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedSchool} - {selectedGrade} Attendance
              </h3>
              <button
                onClick={() => setSelectedSchool(null)}
                className="text-sm text-[#3A7D7D] hover:text-[#2A6D6D] font-medium flex items-center gap-1"
              >
                <Icon icon="mdi:arrow-left" width={18} />
                Back
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">S.N.</th>
                    <th className="px-4 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-3 text-center text-xs md:text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-center text-xs md:text-sm font-semibold text-gray-700">Total Present Days</th>
                    <th className="px-4 py-3 text-center text-xs md:text-sm font-semibold text-gray-700">Total Absent Days</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600">{index + 1}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-700 font-medium">{student.name}</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleAttendanceClick(student.id, "present")}
                            className={`p-1.5 rounded-full ${
                              !student.hasMarked ? "bg-green-100" :
                              student.status === "present" ? "bg-green-100" : 
                              "bg-gray-200"
                            }`}
                          >
                            <Icon
                              icon="mdi:check-circle"
                              className={`text-lg ${
                                !student.hasMarked ? "text-green-600" :
                                student.status === "present" ? "text-green-600" : 
                                "text-gray-400"
                              }`}
                            />
                          </button>

                          <button
                            onClick={() => handleAttendanceClick(student.id, "absent")}
                            className={`p-1.5 rounded-full ${
                              !student.hasMarked ? "bg-red-100" :
                              student.status === "absent" ? "bg-red-100" : 
                              "bg-gray-200"
                            }`}
                          >
                            <Icon
                              icon="mdi:close-circle"
                              className={`text-lg ${
                                !student.hasMarked ? "text-red-600" :
                                student.status === "absent" ? "text-red-600" : 
                                "text-gray-400"
                              }`}
                            />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600 text-center">{student.totalPresentDays}</td>
                      <td className="px-4 py-3 text-xs md:text-sm text-gray-600 text-center">{student.totalAbsentDays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}