import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

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
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
];
