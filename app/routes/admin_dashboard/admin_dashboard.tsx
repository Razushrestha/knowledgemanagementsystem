import React from "react";
// Export untyped meta to avoid runtime type import issues in SSR
export const meta = () => [
  { title: "Admin Dashboard" },
  { name: "description", content: "Admin control panel" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-teal-700 text-white p-6">
        <div className="text-lg font-bold mb-6">KMS</div>
        <nav className="space-y-3">
          <a className="block px-3 py-2 rounded bg-teal-800/20">Dashboard</a>
          <a className="block px-3 py-2 rounded hover:bg-teal-800/10">Attendance</a>
          <a className="block px-3 py-2 rounded hover:bg-teal-800/10">Examination</a>
          <a className="block px-3 py-2 rounded hover:bg-teal-800/10">Courses</a>
          <a className="block px-3 py-2 rounded hover:bg-teal-800/10">Reports</a>
          <a className="block px-3 py-2 rounded hover:bg-teal-800/10">Mentor</a>
          <a className="block px-3 py-2 rounded hover:bg-teal-800/10">Support</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Hi, John</h1>
          <div className="flex items-center gap-4">
            <div className="px-3 py-2 rounded bg-white shadow-sm">Search</div>
            <button className="px-3 py-2 rounded bg-white/60">Add Your Goal</button>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-teal-600 text-white rounded-lg p-6 shadow"> 
            <div className="text-sm">GPA</div>
            <div className="text-4xl font-bold">A</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="font-semibold">Assignment</h2>
            <p className="text-sm text-gray-500">Completed: 2/10</p>
            <div className="mt-4 border rounded p-4">Exam: 0/5</div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Courses</h3>
            <a className="text-sm text-teal-700">See All Courses</a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/assets/login_signup_forgetpass.jpg')" }} />
            </div>
            <div className="border rounded-lg p-6">
              <h4 className="font-semibold">Expert-led training programs</h4>
              <p className="text-sm text-gray-500 mt-2">Access world-class instruction from industry professionals</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
