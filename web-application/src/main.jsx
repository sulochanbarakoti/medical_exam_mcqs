import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Login from "./routes/auth/login.jsx";
import ErrorPage from "./routes/errorPage.jsx";
import Signup from "./routes/auth/signup.jsx";
import Home from "./routes/home.jsx";
import GlobalProvider from "./context/globalProvider.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <Home /> },
]);

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </GlobalProvider>
);
