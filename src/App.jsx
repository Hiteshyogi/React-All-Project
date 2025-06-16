import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Services from './Services';

 function App() {
  const routers = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/Services",
        element: <Services/>
      }
    ]
    }
    
  ])
  return (
    <RouterProvider router={routers}/>
    // <>
    // <Home/>
    // <About/>
    // <Contact/>
    // </>
  )
}

export default App;