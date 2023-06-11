import "./Register.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import moment from "moment";

//Assets
import image from "../../Assets/LOGIN.png";
import imageLogo from "../../Assets/LoginPageLogoMobile.png";
import logo from "../../Assets/LOGO.png";
import video from "../../Assets/video.mp4";

//Icons
import { FcGoogle } from "react-icons/Fc";
import { MdEmail } from "react-icons/Md";
import { RiLockPasswordFill } from "react-icons/Ri";

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Components/context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
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
    <>
      <Navbar />
      <div className="registerPage flex">
        <div className="container_register flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop alt="Login Image"></video>

            <div className="textDiv">
              {/* <h2 className='title'>ASSIST ABROAD</h2> */}
              {/* <p>Welcome Back</p> */}
            </div>
            <div className="footerDiv flex">
              <span className="text"> Already have an account?</span>
              <Link to={"/"}>
                <button className="btn">Log In</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img className="logoRegister" src={logo} alt="Logo Image"></img>

              {/* <span className='logoName'>Assist Abroad</span> */}
              <h3>Lets get started</h3>
              <img className="imageLogo" src={imageLogo} alt="Logo Image"></img>
            </div>

            <form onSubmit={formik.handleSubmit} className="form grid">
              <span className="showMessage"> Authetication error display</span>

              {/* <button className='google flex'>
                        <FcGoogle className='icon'/>
                            <span className='signInGoogle'>Sign in with Google</span>

                        </button> */}

              <div className="inputDiv">
                <label htmlFor="name">Name</label>
                <div className="inputRegister flex">
                  <MdEmail className="icon" />
                  <TextField
                    type="text"
                    id="firstName"
                    placeholder="Enter your name"
                    name="firstName"
                    error={formik.touched.firstName && formik.errors.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  ></TextField>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="inputRegister flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    error={formik.touched.email && formik.errors.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  ></TextField>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="phone">Phone Number</label>
                <div className="input flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                    type="number"
                    id="phone"
                    placeholder="Enter your phone number"
                    name="phone"
                    error={formik.touched.phone && formik.errors.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  ></TextField>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <div className="input flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                    type="date"
                    id="dob"
                    placeholder="Enter your date of birth"
                    name="dob"
                    error={formik.touched.dob && formik.errors.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dob}
                  ></TextField>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    error={formik.touched.password && formik.errors.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  ></TextField>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                    type="password"
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
                  ></TextField>
                </div>
              </div>

              <Button type="submit" className="btn flex"  disabled={!(formik.isValid && formik.dirty)}>
                Sign Up
              </Button>
              <br />

              {/* <span className='forgotPassword'>Forgot your password? <a href="">Click here</a></span> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
