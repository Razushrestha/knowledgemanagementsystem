import React from "react";

export const meta = () => [
  { title: "Admin Dashboard" },
  { name: "description", content: "Admin control panel" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f6f1e7] text-gray-800 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#166d68] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">K</div>
            <div>
              <div className="text-lg font-semibold">KMS</div>
              <div className="text-xs text-white/80">Knowledge Management</div>
            </div>
          </div>

          <nav className="space-y-2 mt-4">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10">
              <span className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">🏠</span>
              <span className="font-medium">Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">📅</span>
              Attendance
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">📝</span>
              Examination
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">📚</span>
              Courses
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">📊</span>
              Reports
            </a>
          </nav>
        </div>

        <div className="mt-6">
          <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20">Log Out</button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Hi, John</h1>
            <p className="text-sm text-gray-600">Welcome back — here's what's happening with your account.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input className="w-72 rounded-full px-4 py-2 border border-gray-200 shadow-sm" placeholder="Search" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">🔍</button>
            </div>
            <button className="px-4 py-2 rounded-full bg-white shadow-sm">Add Your Goal +</button>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">JS</div>
          </div>
        </header>

        <section className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-1 bg-[#1b8f87] text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase opacity-80">GPA</div>
                <div className="text-5xl font-extrabold">A</div>
              </div>
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center text-xl">⭐</div>
            </div>
            <div className="mt-6 bg-white/10 p-3 rounded-lg">
              <div className="text-sm">Assignment</div>
              <div className="text-lg font-semibold">Completed: 2/10</div>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold">Upcoming Exams</h3>
              <p className="mt-2 text-sm text-gray-500">No upcoming exams. Good job!</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold">Notifications</h3>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li>Assignment 3 deadline approaching</li>
                <li>New course available: Advanced IoT</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Courses</h3>
            <a className="text-sm text-[#166d68]">See All Courses</a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/assets/login_signup_forgetpass.jpg')" }} />
              <div className="p-4">
                <h4 className="font-semibold">IoT Fundamentals</h4>
                <p className="text-sm text-gray-500 mt-2">Beginner friendly course about Internet of Things.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow flex flex-col justify-between">
              <div>
                <h4 className="font-semibold">Expert-led training programs</h4>
                <p className="text-sm text-gray-500 mt-2">Access world-class instruction from industry professionals</p>
              </div>
              <div className="mt-4 text-sm text-[#166d68]">Discover →</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold">Reports</h4>
              <p className="text-sm text-gray-500 mt-2">View performance reports and analytics.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
