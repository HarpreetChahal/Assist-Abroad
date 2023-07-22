import React,{useState} from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
import image from "../../Assets/forgot.svg";
import imageLogo from "../../Assets/LoginPageLogoMobile.png";
import { Button, TextField } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import commonApi from "../../api/common";

const PasswordPin = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("email");
  const navigate=useNavigate()
  const [showError,setShowError]=useState(false)
  const formik = useFormik({
    initialValues: {
      email: name,
      emailCode:""
    },
    validationSchema: Yup.object({
      emailCode: Yup.string().min(6).max(6).required("Required"),
    }),
    onSubmit: async (values, { setErrors }) => {
     
      await commonApi({
        action: "forgotPasswordOTP",
        data: values,
      })
        .then(({ DATA = {}, MESSAGE }) => {
       
          navigate("/changePassword/?email=" + values.email+"&code="+values.emailCode);
        })
        .catch((error) => {
          setShowError(true)
          console.error(error);
        });
    },
  });
  return (
    <div className="w-full">
      <Navbar />

      <div
        className=" max-w-7xl bg-[white] mt-32 sm:mt-36 items-center justify-center  mx-auto   lg:px-0 shadow-lg sm:border-2   rounded-md  grid grid-cols-1  lg:grid-cols-2  "
        style={{height:"79vh"}}
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
            <div className="text-pr text-2xl lg:text-3xl  text-center font_ab ">
            Forgot your password?
            </div>
            <h3 className="text-sm lg:text-sm justify-center text-[#4F5C78] text-center mb-10  ">
              Just enter your email below and we'll send you link to reset your password
            </h3>
          </div>
          <div className="flex  items-center justify-center mx-auto flex-col ">
            <img src={imageLogo} alt="" className="h-46 w-46 " />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-0 px-20">
          <form className="form grid " onSubmit={formik.handleSubmit}>
            <div className="hidden lg:block">
              <div className="text-pr text-2xl text-center lg:text-4xl font_ab mt-48 ">
              Confirm Password Change
              </div>
              <h3 className="text-lg text-center justify-center lg:text-md mt-5 mb-5 font_ab text-[#4F5C78]  ">
              Enter the code you received on your email to change the password
              </h3>
            </div>
   {showError&& <div>Email or OTP is not correct.</div>}
            <div className="  ">
              <div className="flex items-center mt-2 rounded-md">
                <TextField
                
                  className="bg-[#fff] border-none outline-none text-lg px-2 py-2 w-full"
                  size="small"
                  type="text"
                  id="emailCode"
                  name="emailCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailCode}
                  placeholder="Enter your code"
                ></TextField>
              </div>

              {/* { formik.touched.email && formik.errors.email && 
           <div className="text-[red]">{formik.errors.email}</div>} */}
              

              <div className="mb-32">
                <Button
                
                  type="submit"
                  className=" mt-8 rounded-md shadow-md w-full bg-pr text-center  text-white font-medium cursor-pointer"
                  style={{
                    backgroundColor: "#6d81fe",
                    color: "#fff",
                    borderRadius: 10,
                    padding: 6,
                    marginTop: 18,
                    textTransform: "none",
                    fontSize: 14,
                    border: "2px solid #6d81fe",
                    marginBottom: 62,
                  }}
                >
                  Confirm Pin
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordPin;
