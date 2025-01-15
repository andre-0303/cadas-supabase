import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorElement from './pages/error/ErrorComponent.jsx'
import SignIn from './pages/(auth)/SignIn/SignIn.jsx'
import SignUp from './pages/(auth)/SignUp/SignUp.jsx'
import Home from './pages/(panel)/home/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:"/",
        element:<SignIn/>
      },
      {
        path:"cadastro",
        element:<SignUp/>
      },
      {
        path:"home",
        element:<Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
