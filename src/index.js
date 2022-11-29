import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


//react router
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Add from './pages/Add'
// import Home from './pages/Home';
import Details from './pages/Details';
import Edit from "./pages/Edit";
import Delete from './pages/Delete';
import NotFound from './pages/NotFound';
import PostList from "./components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "post/add",
        element: <Add />,
      },
      {
        path: "post/:id",
        element: <Details />,
      },
      {
        path: ":post/id/edit",
        element: <Edit />,
      },
      {
        path: "/delete",
        element: <Delete />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
