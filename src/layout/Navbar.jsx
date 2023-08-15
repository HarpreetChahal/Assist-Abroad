import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { Avatar, MenuItem, Menu, Popper, Grow, Paper, ClickAwayListener } from "@mui/material";
import agent1 from "/src/Assets/agent.png";
import agent2 from "/src/Assets/avatar2.jpg";
import { Context } from "../Components/context/Context";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, dispatch, token } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleProfileDropdown = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLogout = async () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-sm bg-white">
      <div className="lg:max-w-7xl px-5 lg:px-0 w-full mx-auto">
        <div className="lg:grid grid-cols-2 hidden">
          <div className="w-full">
            <div className="py-5" >
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
          
            {((user && user.role === 0 && !user.hasAppoinment) || (!user)) && (
              <>
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
                    window.scrollTo(0, 1770);
                  }}
                  className="text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab"
                >
                  Contact
                </div>
              </>
            )}

            {user && token && (
              <Link
                to="/profile"
                className="text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab"
              >
                Profile
              </Link>
            )}

            {user && token && (
              <div>
                <Avatar
                  onClick={toggleProfileDropdown}
                  className={`cursor-pointer ${anchorEl ? "text-pr" : ""}`}
                  src={user.profilePicture || agent1}
                  alt="Rounded avatar"
                />
                <Popper
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  placement="bottom-end"
                  transition
                >
                  {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            {user && token && !user.hasRequested && user.role === 0 && (
                              <MenuItem
                              
                                onClick={handleClose}
                                component={Link}
                                to="/become-agent"
                              >
                                <AiOutlineRobot className="mr-2" />
                                Become Agent
                              </MenuItem>
                            )}
                            {user && token && (
                              <MenuItem onClick={handleLogout}>
                                <FiLogOut className="mr-2" />
                                Logout
                              </MenuItem>
                            )}
                          </Menu>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            )}

            {!(user && token) ? (
              location.pathname !== "/login" && (
                <Link
                  to="/login"
                  className="text-[#23314C] hover:text-pr text-lg font_ab"
                >
                  Sign In
                </Link>
              )
            ) : null}

            {!(user && token) ? (
              location.pathname !== "/register" && (
                <Link
                  to="/register"
                  className="text-pr border border-pr px-7 text-lg hover:bg-pr hover:text-white rounded-md py-1 font_ab"
                >
                  Join
                </Link>
              )
            ) : null}
          </div>
        </div>

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

            {location.pathname !== "/register" && !user && (
              <div className="flex items-center">
                <div>
                  <Link
                    to="/register"
                    className="text-pr border border-pr  px-6 mt-2 rounded-md py-1.5 font_ab"
                  >
                    Join
                  </Link>
                </div>
              </div>
            )}
            
          </div>

          {open && (
            <div className="grid grid-cols-1 bg-white shadow-md px-3 items-center gap-4 justify-center text-gray-500 pb-5">
              <>
                <Link
                  to="/"
                  className="text-[#23314C] hover:text-pr font_ab"
                >
                  Home
                </Link>
                {user && token && (
                  <Link
                    to="/profile"
                    className="text-[#23314C] cursor-pointer hover:text-pr font_ab"
                  >
                    Profile
                  </Link>
                )}
                {((user && user.role === 0 && !user.hasAppoinment) || !user) && (
                  <>
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
                  </>
                )}

                {user && token && !user.hasRequested && user.role === 0 && (
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

                {location.pathname !== "/login" && !user && (
                  <Link
                    to="/login"
                    className="text-[#23314C] cursor-pointer hover:text-pr font_ab"
                  >
                    Sign In
                  </Link>
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
