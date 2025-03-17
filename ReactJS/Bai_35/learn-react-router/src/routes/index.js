import PrivateRoutes from "../components/PrivateRoutes";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetail from "../pages/Blog/BlogDetail";
import BlogNews from "../pages/Blog/BlogNews";
import BlogRelated from "../pages/Blog/BlogRelated";
import InfoUser from "../pages/InfoUser";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import LayoutDefault from "../layout/LayoutDefault";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault></LayoutDefault>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />,
          },
          {
            path: "news",
            element: <BlogNews />,
          },
          {
            path: "related",
            element: <BlogRelated />,
          },
          {
            path: ":id",
            element: <BlogDetail />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "info-user",
            element: <InfoUser />,
          },
        ],
      },
    ],
  },
];
