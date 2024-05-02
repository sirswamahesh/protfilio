import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Hero from "./Components/Hero.jsx";
import Intro from "./Components/Intro.jsx";
import Resume from "./Components/Resume.jsx";
import MainSection from "./Components/MainSection.jsx";
import MyProjects from "./Components/Layout/MyProjects.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "Resume",
        element: <Resume />,
      },
      {
        path: "Projects",
        element: <MyProjects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
