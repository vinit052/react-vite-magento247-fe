import ProductList from "./pages/ProductSearch"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Root } from "./pages/Root"
import { Error } from "./pages/Error"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { AppContext } from "./context/AppContext"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products",
          element: <ProductList />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        }
      ]
    }
  ]);

  return (
    <>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </>
  )
}

export default App
