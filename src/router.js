import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import PageLogement from "./pages/PageLogement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/logement/:id",
    element: <PageLogement />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
