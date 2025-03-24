import LayoutDefault from "../layout/LayoutDefault";
import BookRoom from "../pages/BookRoom";
import Dashboard from "../pages/Dashboard";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault></LayoutDefault>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/book-room",
        element: <BookRoom></BookRoom>,
      },
    ],
  },
];
