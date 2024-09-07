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
import Navbar from "./routes/components/navBar.jsx";
import Practice from "./routes/practice.jsx";
import MockTest from "./routes/mockTest.jsx";
import Test from "./routes/test.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <Home /> },
  { path: "/practice", element: <Practice /> },
  { path: "/mock-test", element: <MockTest /> },
  { path: "test", element: <Test /> },
]);

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </StrictMode>
  </GlobalProvider>
);
