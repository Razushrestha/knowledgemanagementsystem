import React from "react";
import { useNavigate } from "react-router";

export default function AttendanceSelector() {
  const navigate = useNavigate();

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Attendance Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Option: Grades */}
        <div
          onClick={() => navigate("/school_dashboard/grades")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all"
        >
          <h2 className="text-2xl font-semibold text-[#3A7D7D] mb-3">
            By Grades
          </h2>
          <p className="text-gray-600">
            Mark attendance for students based on grade level.
          </p>
        </div>

        {/* Option: Tutors */}
        <div
          onClick={() => navigate("/school_dashboard/attendance/tutors")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-all"
        >
          <h2 className="text-2xl font-semibold text-[#3A7D7D] mb-3">
            By Tutors
          </h2>
          <p className="text-gray-600">
            Mark attendance for students based on tutor or class teacher.
          </p>
        </div>

      </div>
    </div>
  );
}
