import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { Home } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: Home }],
  },
]);
