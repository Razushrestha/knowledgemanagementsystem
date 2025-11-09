import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Auth-related routes under /login directory
export default [
  // Auth routes
  index("routes/login/login.tsx"),
  route("reset-password", "routes/login/reset_password.tsx"),
  route("signup", "routes/login/signup.tsx"),
  
  // Dashboard routes
  route("admin_dashboard", "routes/admin_dashboard/admin_dashboard.tsx"),
  route("admin_dashboard/tutor", "routes/admin_dashboard/tutor.tsx"),
  route("admin_dashboard/school", "routes/admin_dashboard/school.tsx"),
  route("admin_dashboard/examination", "routes/admin_dashboard/examination.tsx"),
  route("admin_dashboard/attendance", "routes/admin_dashboard/attendance.tsx"),
  route("admin_dashboard/activities", "routes/admin_dashboard/activities.tsx"),
  route("admin_dashboard/teacher_kyc", "routes/admin_dashboard/teacher_kyc.tsx"),
  route("admin_dashboard/salary_commission", "routes/admin_dashboard/salary_commission.tsx"),
  route("admin_dashboard/components_delivery", "routes/admin_dashboard/components_delivery.tsx"),
  route("admin_dashboard/complain_box", "routes/admin_dashboard/complain_box.tsx"),
  route("admin_dashboard/teaching_learning", "routes/admin_dashboard/teaching_learning.tsx"),
  route("admin_dashboard/progress_tracking", "routes/admin_dashboard/progress_tracking.tsx"),
  route("school_dashboard", "routes/school_dashboard/school_dashboard.tsx"),
  route("school_dashboard/attendance", "routes/school_dashboard/attendance.tsx"),
  route("school_dashboard/tutor", "routes/school_dashboard/tutor.tsx"),
  route("school_dashboard/examination", "routes/school_dashboard/examination.tsx"),
  route("school_dashboard/invoice", "routes/school_dashboard/invoice.tsx"),
  route("school_dashboard/complain_box", "routes/school_dashboard/complain_box.tsx"),
  route("student_dashboard", "routes/student_dashboard/student_dashboard.tsx"),
  route("tutor_dashboard", "routes/tutor_dashboard/tutor_dashboard.tsx"),
] satisfies RouteConfig;
