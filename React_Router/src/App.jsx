import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Dashboard from "./Page/Dashboard";
import PageNotFound from "./Page/PageNotFound";
import Navbar from "./Components/Navbar";
import Subpage from "./Page/Subpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
    children: [
      {
        path: ":id",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "subpage",
        element: <Subpage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
