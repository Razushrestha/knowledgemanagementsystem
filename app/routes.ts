import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Auth-related routes under /login directory
export default [
  // Auth routes
  index("routes/login/login.tsx"),
  route("reset-password", "routes/login/reset_password.tsx"),
  route("signup", "routes/login/signup.tsx"),
  
  // Dashboard routes
  route("admin_dashboard", "routes/admin_dashboard/admin_dashboard.tsx"),
  route("school_dashboard", "routes/school_dashboard/school_dashboard.tsx"),
  route("student_dashboard", "routes/student_dashboard/student_dashboard.tsx"),
  route("tutor_dashboard", "routes/tutor_dashboard/tutor_dashboard.tsx"),
] satisfies RouteConfig;
