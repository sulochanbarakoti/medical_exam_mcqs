import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Login from "./routes/auth/login.jsx";
import ErrorPage from "./routes/errorPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
