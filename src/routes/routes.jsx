import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import App from "../App";
import ShowBook from "../features/books/BookView";
import AddBook from "../features/books/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "show-book",
        element: <ShowBook />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
    ],
  },
]);

export default router;
