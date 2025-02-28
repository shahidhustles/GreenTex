import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login, { action as LoginUserAction } from "./pages/Login";
import SignUp, { action as createUserAction } from "./pages/SignUp";
import Find, { loader as textilesLoader } from "./pages/Find";
import Bookmarks from "./pages/Bookmarks";
import TextileDetails, {
  loader as textileLoader,
} from "./pages/TextileDetails";
import Chatbot from "./components/Chatbot";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "find",
        element: <Find />,
        loader: textilesLoader,
      },
      {
        path: "find/:textileId",
        element: <TextileDetails />,
        loader: textileLoader,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
    ],
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
  return (
    <>
      <RouterProvider router={router} />
      <Chatbot />
    </>
  );
}
