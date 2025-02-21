import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/index";
import Home from "./pages/ui/home/index";
import Shop from "./pages/ui/shop/index";
import Blog from "./pages/ui/blog/index";
import BlogDetail from "./pages/ui/blog-detail/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>Not Found</div>,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
