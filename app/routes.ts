import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Auth-related routes under /login directory
export default [
	index("routes/login/login.tsx"),
	route("reset-password", "routes/login/reset_password.tsx"),
	route("signup", "routes/login/signup.tsx"),
] satisfies RouteConfig;
