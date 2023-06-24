import React, { useState, useContext } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRobot } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import agent from "/src/Assets/agent.png";
import { Context } from "../Components/context/Context";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, dispatch, token } = useContext(Context);
  const location=useLocation()
  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen);
  };
  const handleLogout = async () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-sm bg-white">
      <div className="lg:max-w-7xl px-5 lg:px-0 w-full mx-auto">
        <div className="lg:grid grid-cols-2 hidden">
          <div className="w-full">
            <div className="py-5">
              <Link to="/" className="text-pr text-4xl font_ab">
                Assist Abroad
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-10 justify-end text-gray-500">
            <Link
              to="/"
              className="text-[#23314C] hover:text-pr text-lg font_ab"
            >
              Home
            </Link>
            <div
              onClick={() => {
                window.scrollTo(0, 470);
              }}
              className="text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab"
            >
              Services
            </div>

            <div
              onClick={() => {
                window.scrollTo(0, 1370);
              }}
              className="text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab"
            >
              Contact
            </div>

            
              {user && token && (
                <div
                className="text-[#23314C] cursor-pointer hover:text-pr  font_ab">
                  <img
                    className={`text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab w-12 h-12 rounded-full ${
                      profileOpen ? "text-pr" : ""
                    }`}
                    onClick={toggleProfileDropdown}
                    src={agent}
                    alt="Rounded avatar"
                  />
                  {/* <div
                    className={`flex text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab  ${
                      profileOpen ? "text-pr" : ""
                    }`}
                    onClick={toggleProfileDropdown}
                  >
                    Avatar
                    <AiOutlineDown className="ml-1" size={14} />
                  </div> */}
                </div>
              )}
              {profileOpen && user && token && (
                <div className="absolute mt-52 px-2 py-2 bg-white rounded-md shadow-lg bg-[#ffffff]">
                  <Link
                    to="/profile"
                    className="flex items-start justify-start text-[#23314C] hover:text-pr text-lg font_ab px-1 py-1  mt-1  rounded-md hover:bg-[#6D81FE] hover:text-white"
                  >
                    <AiOutlineUser className="mr-2" />
                    Profile
                  </Link>
                  {user && token && !user.hasRequested && user.role==0 && (
                    <Link
                      to="/become-agent"
                      className="flex items-start justify-start text-[#23314C] hover:text-pr text-lg font_ab px-1 py-1  mt-1  rounded-md hover:bg-[#6D81FE] hover:text-white"
                    >
                      <AiOutlineRobot className="mr-2" />
                      Become Agent
                    </Link>
                  )}
                  {user && token && (
                    <div
                      onClick={handleLogout}
                      className="flex  items-start justify-start text-[#23314C] hover:text-pr text-lg font_ab px-1 py-1  mt-1 rounded-md hover:bg-[#6D81FE] hover:text-white"
                    >
                      <FiLogOut className="mr-2" />
                      Logout
                    </div>
                  )}
                </div>
              )}
            

            {!(user && token) ? (
            location.pathname!="/login" &&  <Link
            to="/login"
                className="text-[#23314C] hover:text-pr text-lg font_ab"
              >
                Sign In
              </Link>
            ) : null}
            {!(user && token) ? (
              location.pathname!="/register" &&
              <Link
                to="/register"
                className="text-pr border border-pr px-7 text-lg hover:bg-pr hover:text-white rounded-md py-1 font_ab"
              >
                Join
              </Link>
            ) : null}
          </div>
        </div>
        {/* mobile version */}
        <div className="lg:hidden w-full">
          <div className="w-full  flex items-center justify-between white-4">
            <div className="flex items-center">
              {open === false ? (
                <FaBars
                  onClick={() => setOpen(true)}
                  className="w-6 h-6 cursor-pointer text-pr"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setOpen(false)}
                  className="w-6 h-6 cursor-pointer text-pr"
                />
              )}
              <div className="py-4">
                <Link to="/" className="text-pr ml-2  text-2xl">
                  Assist Abroad
                </Link>
              </div>
            </div>

            { location.pathname=="/login" && <div className="flex items-center">
              <div>
                <Link
                  to="/register"
                  className="text-pr border border-pr  px-6 mt-2 rounded-md py-1.5 font_ab"
                >
                  Join
                </Link>
              </div>
            </div>}

            { location.pathname=="/register" && <div className="flex items-center">
              <div>
                <Link
                  to="/login"
                  className="text-pr border border-pr  px-6 mt-2 rounded-md py-1.5 font_ab"
                >
                  Sing In
                </Link>
              </div>
            </div>}
          </div>

          {open && (
            <div className="grid grid-cols-1 bg-white shadow-md px-3 items-center gap-4 justify-center text-gray-500 pb-5">
              <>
                <Link
                  to="/home"
                  className="text-[#23314C] hover:text-pr font_ab"
                >
                  Home
                </Link>

                <div
                  onClick={() => {
                    window.scrollTo(0, 470);
                    setOpen(false);
                  }}
                  className="text-[#23314C] cursor-pointer hover:text-pr font_ab"
                >
                  Services
                </div>
                <div
                  onClick={() => {
                    window.scrollTo(0, 3270);
                    setOpen(false);
                  }}
                  className="text-[#23314C] cursor-pointer hover:text-pr font_ab"
                >
                  Contact
                </div>
                {user && token && (
                  <Link
                    to="/profile"
                    className="text-[#23314C] cursor-pointer hover:text-pr font_ab"
                  >
                    Profile
                  </Link>
                )}
                {user && token && !user.hasRequested && user.role==0 && (
                  <Link
                    to="/become-agent"
                    className="text-[#23314C] cursor-pointer hover:text-pr font_ab"
                  >
                    Become Agent
                  </Link>
                )}
                {user && token && (
                  <div
                    onClick={handleLogout}
                    className="text-[#23314C] cursor-pointer hover:text-pr font_ab"
                  >
                    Logout
                  </div>
                )}
               
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
