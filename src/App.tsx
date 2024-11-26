import ProductList from "./pages/ProductSearch"
import { useState } from "react"
import { SearchContext } from "./context/SerachContext"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Root } from "./pages/Root"
import { Error } from "./pages/Error"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"


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

  const intialParamsValue = {
    text: "",
    currentPage: 1,
    pageSize: 4
  }
  const [params, setParams] = useState<{ text: string; currentPage: number; pageSize: number }>(intialParamsValue);
  return (
    <>
      <SearchContext.Provider value={{ params, setParams }}>
        <RouterProvider router={router} />
      </SearchContext.Provider>
    </>
  )
}

export default App
