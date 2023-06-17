import "./Login.css";
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
    onSubmit: async (values) => {
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
      <div className="loginPage flex">
        <div className="container_login flex">
          <div className="videoDiv">
            {/* <video src={video} autoPlay muted loop alt="Login Image"></video> */}
            <img className="imageLogoLeft" src={image} alt="Login Image"></img>

            <div className="textDiv">
              {/* <h2 className='title'>ASSIST ABROAD</h2> */}
              {/* <p>Welcome Back</p> */}
            </div>
            {/* <div className='footerDivLog flex'>
                        <span className='textDont'> Don't have an account?</span>
                    <Link to={'/register'}>
                    <button className='btn'>Sign Up</button></Link>
                    </div> */}
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} className="loginLogoName" alt="Logo Image"></img>

              {/* <span className='logoName'>Assist Abroad</span> */}
              <h3>Welcome Back</h3>
              <img className="imageLogo" src={imageLogo} alt="Logo Image"></img>
            </div>

            <form onSubmit={formik.handleSubmit} className="form grid">
              {/* <span className="showMessage"> Authetication error display</span> */}

              {/* <button className='google flex'>
                        <FcGoogle className='icon'/>
                            <span className='signInGoogle'>Sign in with Google</span>

                        </button> */}

              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="inputLogin flex">
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
                <p className="authError">Email is not registered or incorrect!</p>
              </div>
              
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="inputLogin flex">
                  <RiLockPasswordFill className="icon" />
                  <TextField
                    className="inputField"
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
                <p className="authError">Password is incorrect!</p>
              </div>

              <Button
                type="submit"
                className="btnLogin flex"
                style={{
                  backgroundColor: "#6d81fe",
                  color: "#fff",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                  textTransform: 'none',
                  fontSize:14,
                }}
              >
                Login
              </Button>

              <span className="forgotPassword">
                Forgot your password? <a href="">Click here</a>
              </span>
              <Link to="/register">
                <button type="submit" className="btnSignupLogin flex">
                  <span>Signup</span>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Login;
