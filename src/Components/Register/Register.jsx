import "./Register.css";
// import "../../App.css";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import moment from "moment";

//Assets
import image from "../../Assets/SIGNUP8.svg";
import imageLogo from "../../Assets/LoginPageLogoMobile.png";
import logo from "../../Assets/LOGO.png";
import video from "../../Assets/video.mp4";

//Icons
import { FcGoogle } from "react-icons/Fc";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/Md";
import { BiUserPin } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/Ri";
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
const Register = () => {
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      phone: "",
      dob: moment().format("yyyy-MM-DD"),
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      phone: Yup.string().required("Required"),
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values, { setErrors }) => {
      let { confirmPassword, ...value } = values;
      value.name = {
        firstName: values.firstName,
        fullName: values.firstName,
      };
      await commonApi({
        action: "register",
        data: value,
      })
        .then(({ DATA = {}, MESSAGE }) => {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: DATA.user,
            token: DATA.token,
          });
          navigate("/");
        })
        .catch((error) => {
          dispatch({ type: "LOGIN_FAILURE" });
          if (error?.response?.data?.MESSAGE == "EMAIL") {
            setErrors({ email: "Email Id already exists" });
          }
          console.error(error);
        });
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  return (
    <div className=" w-full">
      <Navbar />

      <div className=" max-w-7xl bg-[white] mt-32   mx-auto px-5 lg:px-0 shadow-lg border-2 rounded-md  grid grid-cols-1  lg:grid-cols-2  ">
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
            <h3 className="text-2xl lg:text-5xl text-[#4F5C78] text-center ">
              Let's get started
            </h3>
          </div>
          <div className="flex  items-center justify-center mx-auto flex-col ">
            <img src={imageLogo} alt="" className="h-46 w-46 " />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-0">
          <form onSubmit={formik.handleSubmit} className="form grid">
            {/* <form onSubmit="" className="form grid"> */}

            <div className="hidden lg:block">
              <div className="text-pr text-4xl text-center lg:text-6xl font_ab mt-20 ">
                Assist Abroad
              </div>
              <h3 className="text-xl text-center lg:text-2xl font_ab text-[#4F5C78] mb-10 ">
                Let's get started
              </h3>
            </div>
            {/* <div className="w-96 text-white rounded-md bg-gray-800 py-3 text-center">
          Authentication error display
        </div> */}
            {/* <div
              className="  text-[#ffffff] cursor-pointer  rounded-md bg-[#23314c] py-3 flex items-center mt-5 justify-center gap-3 "
              style={{ border: "1px solid #bfbfbf" }}
            >
              <FcGoogle className="w-6 h-6 " />
              Sign up with Google
            </div>
            <div className="flex items-center  justify-center gap-1 w-full">
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
              <div className="flex items-center  rounded-md">
                <TextField
                  size="small"
                  type="text"
                  id="firstName"
                  className="bg-[#fff] border-none outline-none text-lg px-2 py-2 w-full"
                  placeholder="John Doe"
                  name="firstName"
                  error={formik.touched.firstName && formik.errors.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BiUserPin className="w-6 h-6 text-[#4F5C78] " />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>
              {formik.touched.firstName && formik.errors.firstName && (
                <div>{formik.errors.firstName}</div>
              )}
              <div className="flex items-center mt-4 rounded-md">
                {/* <MdOutlineEmail className="w-6 h-6 text-[#4F5C78]" /> */}
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg px-2 py-2 w-full"
                  //  sx={{"& fieldset" : {border:'none'},}}
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
              {formik.touched.email && formik.errors.email && (
                <div className="text-[red]  ">{formik.errors.email}</div>
              )}
              <div className="flex items-center mt-4 rounded-md">
                {/* <SlCalender className="w-6 h-6 text-[#4F5C78]" /> */}
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg px-2 py-2 w-full"
                  //  sx={{"& fieldset" : {border:'none'},}}
                  size="small"
                  id="phone"
                  placeholder="Enter your phone number"
                  name="phone"
                  error={formik.touched.phone && formik.errors.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  inputProps={{
                    maxLength: 10,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FiPhone className="w-5 h-6 text-[#4F5C78] " />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>
              <div className="flex items-center mt-4 rounded-md">
                {/* <SlCalender className="w-6 h-6 text-[#4F5C78]" /> */}
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg  w-full"
                  //  sx={{"& fieldset" : {border:'none'},}}
                  size="small"
                  type="date"
                  id="dob"
                  placeholder="Enter your date of birth"
                  name="dob"
                  error={formik.touched.dob && formik.errors.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                  inputProps={{ max: "2023-06-27" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SlCalender className="w-5 h-6 text-[#4F5C78] " />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>
              <div className="flex mt-4 items-center  rounded-md">
                {/* <RiLockPasswordFill className="w-6 h-6 text-[#4F5C78]" /> */}
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg  w-full"
                  //  sx={{"& fieldset" : {border:'none'},}}
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
                        <RiLockPasswordFill className="w-5 h-6 text-[#4F5C78] " />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <AiFillEye
                            className="w-5 h-6 text-[#4F5C78] cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                          />
                        ) : (
                          <AiFillEyeInvisible
                            className="w-5 h-6 text-[#4F5C78] cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>
              <div className="flex mt-4 items-center  rounded-md">
                {/* <RiLockPasswordFill className="w-6 h-6 text-[#4F5C78]" /> */}
                <TextField
                  className="bg-[#fff] border-[#f8f8fa] outline-none text-lg px-2 py-2 w-full"
                  size="small"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  error={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <RiLockPasswordFill className="w-5 h-6 text-[#4F5C78] " />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {showConfirmPassword ? (
                          <AiFillEye
                            className="w-5 h-6 text-[#4F5C78] cursor-pointer"
                            onClick={() =>
                              setConfirmPassword(!showConfirmPassword)
                            }
                          />
                        ) : (
                          <AiFillEyeInvisible
                            className="w-5 h-6 text-[#4F5C78] cursor-pointer"
                            onClick={() =>
                              setConfirmPassword(!showConfirmPassword)
                            }
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-[red]">
                    {formik.errors.confirmPassword}
                  </div>
                )}
              {/* <button className="mt-8 rounded-md w-full bg-pr text-center py-3 text-white font-medium">
            Sign Up
          </button> */}
          <div className="mb-20">
              <Button
                type="submit"
                className=" mt-8 rounded-md shadow-md w-full bg-pr text-center  text-white font-medium "
                disabled={!(formik.isValid && formik.dirty)}
                style={{
                  backgroundColor: "#6d81fe",
                  color: "#fff",
                  borderRadius: 10,
                  padding: 8,
                  marginTop: 18,
                  textTransform: "none",
                  fontSize: 14,
                  border: "2px solid #6d81fe",
                  marginBottom: 30,
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Button>
              </div>
              {/* <p className="mt-2 ">Already have an account?</p>
          <Link to="/login">
            <Button 
              type="submit"
              className="mt-8 rounded-md w-full bg-pr text-center  text-white font-medium "
              style={{
                backgroundColor: "#fff",
                color: "#6d81fe",
                padding: 10,
                marginBottom:10,
                textTransform: "none",
                fontSize: 14,
                border: "2px solid #6d81fe",
                
              }}
            >
              Login
            </Button>
          </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
