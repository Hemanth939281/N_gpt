import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./Login";

import Browse from "./Browse";
import ProtectedRoute from "./ProtectedRoute";

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
      
    }
  ]);




  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  )
}

export default Body