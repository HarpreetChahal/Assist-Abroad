import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Quiz from "./Components/Quiz/Quiz";
import Payment from "./Components/Payment/Payment";
import Arrival from "./Components/Arrival/Arrival";
import Profile from "./Components/Payment/Payment";

//React router dom import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Creating a route
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/quiz",
    element: (
      <div>
        <Quiz />
      </div>
    ),
  },
  {
    path: "/payment",
    element: (
      <div>
        <Payment />
      </div>
    ),
  },
  {
    path: "/arrival-form",
    element: (
      <div>
        <Arrival />
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Profile />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
