import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

//React router dom import
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//Creating a route
const router = createBrowserRouter([
  {
    path:'/',
    element: <div><Login/></div>
  },
  {
    path:'/register',
    element: <div><Register/></div>
  },
  {
    path:'/home',
    element: <div><Home/></div>
  }
])

function App() {
 

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
