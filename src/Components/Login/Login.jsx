// import "./Register.css";
// import "../../App.css";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import moment from "moment";

//Assets
import image from "../../Assets/SIGNUP7.svg";
import imageLogo from "../../Assets/LoginPageLogoMobile.png";
import logo from "../../Assets/LOGO.png";
import video from "../../Assets/video.mp4";

//Icons
import { FcGoogle } from "react-icons/Fc";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/Md";
import { BiUserPin } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/Ri";
import { SlCalender } from "react-icons/sl";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import React, { useState, useContext, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Context } from "../context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values, { setErrors }) => {
      await commonApi({
        action: "login",
        data: values,
      })
        .then(({ DATA = {}, MESSAGE }) => {
          let { token, ...data } = DATA;
          dispatch({ type: "LOGIN_SUCCESS", payload: data, token: token });
          navigate("/");
        })
        .catch((error) => {
          dispatch({ type: "LOGIN_FAILURE" });
          if (error?.response?.data?.MESSAGE == "INCORRECT") {
            setErrors({
              password: "Email or Password is incorrect",
              email: " Email or password is incorrect",
            });
          }
          console.error(error);
        });
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  return (
    <div className=" w-full ">
      <Navbar />

      <div
        className=" max-w-7xl bg-[white] mt-32 sm:mt-36  mx-auto px-5 lg:px-0 shadow-lg sm:border-2   rounded-md  grid grid-cols-1  lg:grid-cols-2  "
        style={{ height: "79vh" }}
      >
        <div className="flex  items-center justify-center mx-auto h-full w-full  bg-pr  rounded-l-md">
          <img
            src={image}
            alt=""
            className="h-3/4 w-3/4 items-center justify-center mx-auto hidden lg:block"
          />
        </div>

        <div className="lg:border-r-2 lg:hidden mt-10 ">
          <div className=" lg:hidden">
            <div className="text-pr text-5xl lg:text-7xl  text-center font_ab ">
              Assist Abroad
            </div>
            <h3 className="text-2xl lg:text-5xl text-[#4F5C78] text-center  ">
              Welcome back
            </h3>
          </div>
          <div className="flex  items-center justify-center mx-auto flex-col ">
            <img src={imageLogo} alt="" className="h-46 w-46 " />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-0">
          <form onSubmit={formik.handleSubmit} className="form grid " id="form">
            <div className="hidden lg:block">
              <div className="text-pr text-4xl text-center lg:text-6xl font_ab mt-32 ">
                Assist Abroad
              </div>
              <h3 className="text-xl text-center lg:text-2xl mb-10 font_ab text-[#4F5C78]  ">
                Welcome back
              </h3>
            </div>

            {/* <div
              className="  text-[#ffffff] cursor-pointer  rounded-md bg-[#23314c] py-3 flex items-center mt-10 justify-center gap-3 "
              style={{ border: "1px solid #bfbfbf" }}
            >
              <FcGoogle className="w-6 h-6 " />
              Sign In with Google
            </div>
            <div className="flex items-center mt-2 justify-center gap-1 w-full">
              <div
                className="w-44 h-[1px] "
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              ></div>
              or
              <div
                className="w-44 h-[1px] "
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              ></div>
            </div> */}
            <div className="  ">
              <div className="flex items-center mt-2 rounded-md">
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg px-2 py-2 w-full"
                  size="small"
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  error={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdOutlineEmail className="w-6 h-6 text-[#4F5C78] " />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>

              {/* { formik.touched.email && formik.errors.email && 
           <div className="text-[red]">{formik.errors.email}</div>} */}
              <div className=" mt-4 items-center  rounded-md">
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg  w-full"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  error={formik.touched.password && formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <RiLockPasswordLine className="w-5 h-6 text-[#4F5C78] " />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <AiFillEye
                            className="w-5 h-6 text-[#4F5C78] cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <AiFillEyeInvisible
                            className="w-5 h-6 text-[#4F5C78] cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <Link to="/forgetPassword">
             
                  <p className="text-md  lg:text-md  font_ab  mt-2 text-slate-600 hover:text-pr">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-[red] mt-2 font-medium">
                  {formik.errors.password}
                </div>
              )}
              <div className="mb-32">
                <Button
                  type="submit"
                  className=" mt-8 rounded-md shadow-md w-full bg-pr text-center  text-white font-medium cursor-pointer"
                  disabled={!(formik.isValid && formik.dirty)}
                  style={{
                    backgroundColor: "#6d81fe",
                    color: "#fff",
                    borderRadius: 10,
                    padding: 8,
                    marginTop: 15,
                    textTransform: "none",
                    fontSize: 14,
                    border: "2px solid #6d81fe",
                    marginBottom: 30,
                  }}
                >
                  Log In
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
