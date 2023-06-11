import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ThemeProvider from "@/components/ThemeToggle/Provider";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage"

import { BASE_PATH } from "@/lib/constance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
], {
  basename: BASE_PATH
});

function App() {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
