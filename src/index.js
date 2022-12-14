import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//redux
import { store } from "./store/index";
import { Provider } from "react-redux";

import { AnimatePresence } from "framer-motion";

//react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AddPost from "./pages/AddPost";
import Index from "./pages/Index";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "post/add",
        element: <AddPost />,
      },
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "please enter id number",
              status: 400,
            });
          }
        },
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
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
