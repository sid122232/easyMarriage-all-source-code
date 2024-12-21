import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Category from './components/cateogory/category.jsx'
import Contact from './components/contact/contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>

    </RouterProvider >
  </StrictMode>,
)
