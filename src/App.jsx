import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login, { action as LoginUserAction } from "./pages/Login";
import SignUp, { action as createUserAction } from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    action: LoginUserAction,
  },
  {
    path: "/signup",
    element: <SignUp />,
    action: createUserAction,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
