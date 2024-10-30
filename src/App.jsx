import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {
  const abc = createBrowserRouter([
    {path:'/',
      element:<Product/>
    },
    {path:'/cart',
      element:<Cart/>
    }
  ])
  return (
    <div>
    <RouterProvider router={abc}></RouterProvider>
    </div>
  )
}

export default App
