import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import moment from "moment";

//Assets
import image from "../../Assets/SIGNUP.png";
import logo from "../../Assets/LOGO.png";
import imageLogo from "../../Assets/LoginPageLogoMobile.png";
// import logo from "../../Assets/LOGO.png";
import video from "../../Assets/video.mp4";

//Icons
import { FcGoogle } from "react-icons/Fc";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/Md";
import { BiUserPin } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/Ri";
import { SlCalender } from "react-icons/sl";




import { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
// import Navbar from "../../layout/Navbar";

const Register = () => {
    const { dispatch, isFetching } = useContext(Context);
const navigate=useNavigate()
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
      confirmPassword: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      let {confirmPassword,...value}=values
        await commonApi({
          action: "register",
          data: value
        })
          .then(({ DATA = {}, MESSAGE }) => {
          console.log("heheh",DATA)
            navigate("/");
          })
          .catch((error) => {
            dispatch({ type: "LOGIN_FAILURE" });
          
            console.error(error);
          });
    },
  });
  return (
    <div className=" w-full">
     <Navbar/>
      <div className=" max-w-7xl mt-20 lg:mt-24 mx-auto px-5 lg:px-0   grid grid-cols-1  lg:grid-cols-2 items-center ">
        <div className="lg:border-r-2 mt-20 lg:mt-0">
          <div className=" lg:hidden">
            <div className="text-pr text-4xl lg:text-7xl text-center font_ab ">
              Assist Abroad
            </div>
            <h3 className="text-xl lg:text-3xl text-[#4F5C78] text-center pb-5">
            Let's get started
            </h3>
          </div>
          <div className="flex items-center justify-center px-2 md:px-0  md:w-196 mx-auto flex-col">
            <img src={image} alt="" />
            {/* <div className="flex items-center pl-4  bg-gray-200 rounded-md justify-between w-full gap-4 mt-10">
              <p className="text-lg">Already have an account?</p>
              <Link
                className="px-8 py-2 bg-pr text-white rounded-md"
                to="/login"
              >
                Login
              </Link>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col items-center my-10 lg:mt-0">
          <div className="hidden lg:block">
            <div className="text-pr text-4xl lg:text-7xl font_ab ">
              Assist Abroad
            </div>
            <h3 className="text-xl text-center lg:text-3xl text-[#4F5C78] py-4">
              Let's get started
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
          <div className="w-96 text-white rounded-md bg-gray-800 py-3 text-center">
Authentication error display
          </div>
          <div className="w-96 my-4 text-[#4F5C78] cursor-pointer bg-[#F8F8FA] py-3 flex items-center justify-center gap-3">
            <FcGoogle className="w-6 h-6" />
            Sign up with Google
          </div>
          <div className="flex items-center gap-1 w-96">
            <div
              className="w-44 h-[1px] "
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            ></div>
            or
            <div
              className="w-44 h-[1px] "
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            ></div>
          </div>
          <div className=" mt-4 w-96">
            <div className="flex items-center gap-2 bg-[#EEF0F4] px-4 rounded-md">
              <BiUserPin className="w-6 h-6 text-[#4F5C78]" />
              <TextField
              size="small"
                type="text"
                className="bg-[#EEF0F4] border-none outline-none text-lg px-2 py-2 w-full"
                placeholder="John Doe"
                name="firstName"
                error={formik.touched.firstName && formik.errors.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              ></TextField>
            </div>
            <div className="flex items-center mt-4 gap-2 bg-[#EEF0F4] px-4 rounded-md">
              <MdOutlineEmail className="w-6 h-6 text-[#4F5C78]" />
              <TextField
              size="small"
                type="text"
                className="bg-[#EEF0F4] border-none outline-none text-lg px-2 py-2 w-full"
                placeholder="John.doe@email.com"
                name="email"
                error={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              ></TextField>
            </div>
            <div className="flex items-center mt-4 gap-2 bg-[#EEF0F4] px-4 rounded-md">
              <SlCalender className="w-6 h-6 text-[#4F5C78]" />
              <input
              size="small"
                type="number"
                className="bg-[#EEF0F4] border-none outline-none text-lg px-2 py-2 w-full"
                placeholder="3065555555"
                  name="phone"
                    error={formik.touched.phone && formik.errors.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
              />
            </div>
            <div className="flex mt-4 items-center gap-2 bg-[#EEF0F4] px-4 rounded-md">
              <FaRegAddressCard className="w-6 h-6 text-[#4F5C78]" />
              <TextField
              size="small"
                type="date"
                className="bg-[#EEF0F4] border-none outline-none text-lg px-2 py-2 w-full"
                placeholder="#2, 875 Regina"
                name="dob"
                error={formik.touched.dob && formik.errors.dob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              ></TextField>
            </div>
            
            <div className="flex mt-4 items-center gap-2 bg-[#EEF0F4] px-4 rounded-md">
              <RiLockPasswordFill className="w-6 h-6 text-[#4F5C78]" />
              <TextField
              size="small"
                type="password"
                className="bg-[#EEF0F4] border-none outline-none text-lg px-2 py-2 w-full"
                placeholder="password"
                name="password"
                    error={formik.touched.password && formik.errors.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
              ></TextField>
            </div>
            <div className="flex mt-4 items-center gap-2 bg-[#EEF0F4] px-4 rounded-md">
              <RiLockPasswordFill className="w-6 h-6 text-[#4F5C78]" />
              <TextField
              size="small"
                type="password"
                className="bg-[#EEF0F4] border-none outline-none text-lg px-2 py-2 w-full"
                placeholder="confirm password"
                name="confirmPassword"
                error={
                  formik.touched.confirmPassword && formik.errors.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              ></TextField>
            </div>
            <button className="mt-8 rounded-md w-full bg-pr text-center py-3 text-white font-medium">
              Sign Up
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
