import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("./Pages/Login/Login"));
const Auth = lazy(() => import("./helpers/Auth/Auth"));
const Home = lazy(() => import("./Pages/Home/Home"));

const AddEmp = lazy(() => import("./Pages/AddEmp/AddEmp"));
const EditPage = lazy(() => import("./Pages/EditPage/EditPage"));
const UserPage = lazy(() => import("./Pages/UserPage/UserPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Auth />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/add",
        element: <AddEmp />,
      },
      {
        path: "/home/edit/:id",
        element: <EditPage />,
      },
      {
        path: "/home/user/:id",
        element: <UserPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>...loading</p>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </React.StrictMode>
);
