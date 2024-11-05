import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/app/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/index.tsx";
import { Login } from "./pages/app/login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "app",
        element: <App />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
