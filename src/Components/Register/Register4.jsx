import "./Register.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import moment from "moment";

//Assets
import image from "../../Assets/LOGIN5.svg";
import imageLogo from "../../Assets/LoginPageLogoMobile.png";
import logo from "../../Assets/LOGO.png";
import video from "../../Assets/video.mp4";

//Icons
import { FcGoogle } from "react-icons/Fc";
import { FaUserCircle } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/Md";
import { HiPhone } from "react-icons/hi";

import { RiLockPasswordFill } from "react-icons/Ri";

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
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
      value.name={
        firstName:values.firstName,
        fullName:values.firstName
      }
        await commonApi({
          action: "register",
          data: value
        })
          .then(({ DATA = {}, MESSAGE }) => {
          dispatch({ type: "LOGIN_SUCCESS", payload: DATA.user, token: DATA.token });
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
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="registerPage flex">
        <div className="container_register flex">
          <div className="videoDiv">
            {/* <video src={video} autoPlay muted loop alt="Login Image"></video> */}
            <div class="imageContainer">
            <img className="imageLogoLeftReg" src={image} alt="Register Image"></img>
            </div>
            <div className="textDiv">
              {/* <h2 className='title'>ASSIST ABROAD</h2> */}
              {/* <p>Welcome Back</p> */}
            </div>
            {/* <div className="footerDiv flex">
              <span className="text"> Already have an account?</span>
              <Link to={"/"}>
                <button className="btn">Log In</button>
              </Link>
            </div> */}
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img className="registerLogoName" src={logo} alt="Logo Image"></img>

              {/* <span className='logoName'>Assist Abroad</span> */}
              <h3>Lets get started</h3>
              <img className="imageLogoRegister" src={imageLogo} alt="Logo Image"></img>
            </div>

            <form onSubmit={formik.handleSubmit} className="form grid">
              {/* <span className="showMessage"> Authetication error display</span> */}

              {/* <button className='google flex'>
                        <FcGoogle className='icon'/>
                            <span className='signInGoogle'>Sign in with Google</span>

                        </button> */}

              <div className="inputDiv">
                <label htmlFor="name">Name</label>
                <div className="inputRegister flex">
                  <FaUserCircle className="icon" />
                  <TextField
                  className="inputField"
                  //  sx={{"& fieldset" : {border:'none'},}}
                  size="small"
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
                {/* <p className="authErrorReg">Enter your full name!</p> */}
              </div>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="inputRegister flex">
                  <MdEmail className="icon" />
                  <TextField
                  className="inputField"
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
                  ></TextField>
                </div>
                {/* <p className="authErrorReg">Email is not valid or incorrect!</p> */}
              </div>
              <div className="inputDiv">
                <label htmlFor="phone">Phone Number</label>
                <div className="inputRegister flex">
                  <HiPhone className="icon" />
                  <TextField
                  className="inputField"
                  //  sx={{"& fieldset" : {border:'none'},}}
                  size="small"
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
                {/* <p className="authErrorReg">Phone number is not valid!</p> */}
              </div>
              <div className="inputDiv">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <div className="inputRegister flex">
                  <FaBirthdayCake className="icon" />
                  <TextField
                  className="inputField"
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
                  ></TextField>
                </div>
                {/* <p className="authErrorReg">Date of birth is in incorrect format!</p> */}
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="inputRegister flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                  className="inputField"
                  //  sx={{"& fieldset" : {border:'none'},}}
                  size="small"
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
                {/* <p className="authErrorReg">Use a combination of letter and numbers!</p> */}
              </div>
              <div className="inputDiv">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="inputRegister flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                  className="inputField"
                  //  sx={{"& fieldset" : {border:'none'},}}
                  size="small"
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
                {/* <p className="authErrorReg">Passwords dont match!</p> */}
              </div>

              <Button type="submit" className="btn flex"  
              disabled={!(formik.isValid && formik.dirty)}
              style={{
                backgroundColor: "#6d81fe",
                color: "#fff",
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                textTransform: 'none',
                fontSize:14,
              }}>
                Sign Up
              </Button>
              <span className="forgotPassword">
                Already have an account? 
              </span>
              <Link to="/login">
                <button type="submit" className="btnSignup flex">
                  <span>Login</span>
                </button>
              </Link>

              {/* <span className='forgotPassword'>Forgot your password? <a href="">Click here</a></span> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
