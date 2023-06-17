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
import ViewProfile from "./Components/ViewProfile/ViewProfile";


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
  const handleLogout = async () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div>
      <Routes>
      <Route
          exact
          path="/register"
          element={
            token && user ? <Home handleLogout={handleLogout} /> :   <Register />
          }
        />
        <Route
          exact
          path="/login"
          element={
            token && user ? <Home handleLogout={handleLogout} /> : <Login />
          }
        />
      <Route
          exact
          path="/"
          element={
            token && user ? <Home handleLogout={handleLogout} /> : <Login /> 
          }
        />
       
        <Route
          exact
          path="/quiz"
          element={
            token && user ? <Quiz handleLogout={handleLogout} /> :   <Login />
          }
        />
        <Route
          exact
          path="/payment"
          element={
            token && user ? <Payment handleLogout={handleLogout} /> :   <Login />
          }
        />
        <Route
          exact
          path="/payment-card"
          element={
            token && user ? <PaymentCard handleLogout={handleLogout} /> :   <Login />
            
          }
        />
        <Route
          exact
          path="/profile"
          element={
            token && user ? <Profile handleLogout={handleLogout} /> :   <Login />
           
          }
        />
         <Route
          exact
          path="/arrival-form"
          element={
            token && user ? <Arrival handleLogout={handleLogout} /> :   <Login />
            
          }/>
          <Route
          exact
          path="/agent-home"
          element={
            token && user ? <AgentHome handleLogout={handleLogout} /> :   <Login />
            
          }
          />
          <Route
          exact
          path="/agent-task/:id"
          element={
            token && user ? <AgentTask handleLogout={handleLogout} /> :   <Login />
          
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
            token && user ? <BecomeAgent handleLogout={handleLogout} /> :   <Login />
          
          }
          />
           <Route
          exact
          path="/view-profile"
          element={
            token && user ? <ViewProfile handleLogout={handleLogout} /> :   <Login />
          }
          />

            </Routes>
    </div>
  );
}

export default App;
