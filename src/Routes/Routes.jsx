import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Form from "../Pages/Form/Form";
import SignUp from "../Components/Form/SignUp";
import SignIn from "../Components/Form/SignIn";
import TopRated from "../Components/TopRated";
import About from "../Components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "topRated",
        element: <TopRated />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);
