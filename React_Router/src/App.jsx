import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import PageNotFound from "./Page/PageNotFound";
import RootLayout from "./layout/RootLayout";
import Dashboardinfo from "./Components/Dashboardinfo";
import Dashboardform from "./Components/Dashboardform";
import Dashboardlayout from "./layout/Dashboardlayout";
import Joblayout from "./layout/Joblayout";
import Jobs, { jobsloader } from "./Page/Jobs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route path="info" element={<Dashboardinfo />} />
        <Route path="form" element={<Dashboardform />} />
      </Route>
      <Route path="/job" element={<Joblayout />}>
        <Route index element={<Jobs />} loader={jobsloader} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// CREATING BROWSERROUTER -----------------------------------------------------------------------------
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Page/Home";
// import About from "./Page/About";
// import Dashboard from "./Page/Dashboard";
// import PageNotFound from "./Page/PageNotFound";
// import Navbar from "./Components/Navbar";
// import Subpage from "./Page/Subpage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Navbar />
//         <Home />
//       </div>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <div>
//         <Navbar />
//         <About />
//       </div>
//     ),
//     children: [
//       {
//         path: ":id",
//         element: <About />,
//       },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <div>
//         <Navbar />
//         <Dashboard />
//       </div>
//     ),
//     children: [
//       {
//         path: "subpage",
//         element: <Subpage />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <PageNotFound />,
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;

// BROWSER ROUTER-------------------------------------------------------------------

// import { Route, Routes } from "react-router-dom";
// import Home from "./Page/Home";
// import About from "./Page/About";
// import Dashboard from "./Page/Dashboard";
// import Navbar from "./Components/Navbar";
// import PageNotFound from './Page/PageNotFound'

// const App = () => {
//     return(
//       <div>
//         <Navbar />
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/dashboard' element={<Dashboard />} />
//             <Route path='*' element={<PageNotFound />} />
//           </Routes>
//       </div>
//     )
// };

// export default App;
