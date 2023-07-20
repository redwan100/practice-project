import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import App from "../App";
import PostView from "../features/posts/PostView";
import PostDetail from "../features/posts/PostDetail";
import CartView from "../features/cart/CartView";

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
        path: "postView",
        element: <PostView />,
      },
      {
        path: "postDetail/:id",
        element: <PostDetail />,
      },
      {
        path: "cart",
        element: <CartView />,
      },
    ],
  },
]);

export default router;
