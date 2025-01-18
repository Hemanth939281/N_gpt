import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./Login";

import Browse from "./Browse";
import ProtectedRoute from "./ProtectedRoute";
import PlayMovies from "./PlayMovies";

const Body = () => {

  const appRouter =  createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute route="/">
           <Browse/>
      </ProtectedRoute>
      ),
    },
    {
      path: "/movie/:id",
      element: <PlayMovies/>
    }
  ]);




  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  )
}

export default Body