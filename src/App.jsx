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
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import BecomeAgent from "./Components/BecomeAgent/BecomeAgent";
import { Route, Routes } from "react-router-dom";

import { useNavigate } from "react-router";
import { useContext } from "react";
import { Context } from "./Components/context/Context";

//React router dom import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewProfile from "./Components/ViewProfile/ViewProfile";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import PasswordPin from "./Components/PasswordPin/PasswordPin";

function App() {
  const { user, dispatch, token } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/register"
          element={
            !(token || user) ? (
              <Register />
            ) : token && user && user.role == 1 ? (
              <AgentHome />
            ) : (
              user.hasAppoinment ?<Arrival />:
              <Home />
            )
          }
        />
        <Route
          exact
          path="/login"
          element={ !(token || user) ? (
            <Login />
          ) : token && user && user.role == 1 ? (
            <AgentHome />
          ) : (
            user.hasAppoinment ?<Arrival />:   <Home />
          )}
        />
        <Route exact path="/" element={token && user && user.role == 1 ?<AgentHome/> : token && user && user.hasAppoinment ?<Arrival/> :<Home />} />

        <Route
          exact
          path="/quiz"
          element={token && user && user.role==0 ? <Quiz /> : token && user  && user.role==1?<PageNotFound /> :<Login />}
        />
        <Route
          exact
          path="/payment"
          element={token && user && user.role==0 ? <Payment /> : token && user  && user.role==1?<PageNotFound /> : <Login />}
        />
        <Route
          exact
          path="/payment-card"
          element={token && user && user.role==0 ? <PaymentCard /> : token && user  && user.role==1?<PageNotFound /> : <Login />}
        />
        <Route
          exact
          path="/profile"
          element={token && user ? <Profile /> : <Login />}
        />
        <Route
          exact
          path="/arrival-form"
          element={token && user && user.role==0 ? <Arrival /> : token && user  && user.role==1?<PageNotFound /> : <Login />}
        />
        <Route
          exact
          path="/agent-home"
          element={token && user && user.role==1? <AgentHome /> :  token && user  && user.role==0?<PageNotFound /> :<Login />}
        />
        <Route
          exact
          path="/agent-task"
          element={token && user && user.role==1 ? <AgentTask /> : token && user  && user.role==0?<PageNotFound /> :<Login />}
        />
        <Route exact path="/page-not-found" element={<PageNotFound />} />
        <Route
          exact
          path="/become-agent"
          element={token && user && user.role==0 ? <BecomeAgent /> : token && user  && user.role==1?<PageNotFound /> : <Login />}
        />
        <Route
          exact
          path="/view-profile"
          element={token && user ? <ViewProfile /> : <Login />}
        />
         <Route
          exact
          path="/forgetPassword"
          element={<ForgetPassword/>} />
           <Route
          exact
          path="/passwordPin"
          element={<PasswordPin/>} />
          <Route
          exact
          path="/changePassword"
          element={<ChangePassword/>} />
      </Routes>
      
    </div>
  );
}

export default App;
