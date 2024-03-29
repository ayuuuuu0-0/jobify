import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Login,
  Register,
  DashboardLayout,
  Error,
  Admin,
  Profile,
  Stats,
} from "./pages";
import AllJobs from "./pages/AllJobs";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
      },
      {
        path: "/dashboard/admin",
        element: <Admin />,
      },
      {
        path: "/dashboard/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/stats",
        element: <Stats />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
