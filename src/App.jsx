import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Quiz from "./Components/Quiz/Quiz";
import Payment from "./Components/Payment/Payment";
import Arrival from "./Components/Arrival/Arrival";
import Profile from "./Components/Profile/Profile";
import AgentHome from "./Components/AgentHome/AgentHome";
import AgentTask from "./Components/AgentTask/AgentTask";
import PaymentCard from "./Components/PaymentCard/PaymentCard";
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import BecomeAgent from "./Components/BecomeAgent/BecomeAgent";
import { Route, Routes } from "react-router-dom";



import { useNavigate } from "react-router";
import { useContext } from "react";
import { Context } from "./Components/context/Context";


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
  const { user, dispatch, token } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
      <Route
          exact
          path="/"
          element={
            <Home />
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Register />
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          exact
          path="/quiz"
          element={
            <Quiz />
          }
        />
        <Route
          exact
          path="/payment"
          element={
            <Payment />
          }
        />
        <Route
          exact
          path="/payment-card"
          element={
            <PaymentCard />
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <Profile />
          }
        />
         <Route
          exact
          path="/arrival-form"
          element={
            <Arrival />
          }/>
          <Route
          exact
          path="/agent-home"
          element={
            <AgentHome />
          }
          />
          <Route
          exact
          path="/agent-task/:id"
          element={
            <AgentTask />
          }
          />
           <Route
          exact
          path="/page-not-found"
          element={
            <PageNotFound />
          }
          />
             <Route
          exact
          path="/become-agent"
          element={
            <BecomeAgent />
          }
          />

            </Routes>
    </div>
  );
}

export default App;
