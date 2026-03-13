import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { Home, MyLibrary } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "my-library", Component: MyLibrary },
    ],
  },
]);
