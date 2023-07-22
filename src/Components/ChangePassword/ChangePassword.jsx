import React from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
import image from "../../Assets/changePassword.svg";
import imageLogo from "../../Assets/LoginPageLogoMobile.png";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import commonApi from "../../api/common";

const ChangePassword = () => {
  const search = useLocation().search;
  const email = new URLSearchParams(search).get("email");
  const emailCode = new URLSearchParams(search).get("code");

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: async (values, { setErrors }) => {
      let { confirmPassword, ...value } = values;
      await commonApi({
        action: "resetPassword",
        data: {
          password:values.password,
          email:email,
          OTP:emailCode
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          navigate("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });
  return (
    <div className="w-full">
      <Navbar />

      <div
        className=" max-w-7xl bg-[white] mt-32 sm:mt-36 items-center justify-center  mx-auto   lg:px-0 shadow-lg sm:border-2   rounded-md  grid grid-cols-1  lg:grid-cols-2  "
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
            <div className="text-pr text-2xl lg:text-3xl  text-center font_ab ">
              Reset your password?
            </div>
          </div>
          <div className="flex  items-center justify-center mx-auto flex-col ">
            <img src={imageLogo} alt="" className="h-46 w-46 " />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-0 px-20">
          <form className="form grid " onSubmit={formik.handleSubmit}>
            <div className="hidden lg:block">
              <div className="text-pr text-2xl text-center lg:text-4xl font_ab  mb-2 ">
                Reset your password?
              </div>
            </div>

            <div className="  ">
              <div className="flex items-center mt-2 rounded-md">
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg px-2 py-2 w-full"
                  size="small"
                  type="text"
                  id="email"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Enter new password"
                ></TextField>
              </div>
              <div className="flex items-center mt-2 rounded-md">
                <TextField
                  className="bg-[#fff] border-none outline-none text-lg px-2 py-2 w-full"
                  size="small"
                  type="text"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  placeholder="Confirm new password"
                ></TextField>
              </div>

              {/* { formik.touched.email && formik.errors.email && 
           <div className="text-[red]">{formik.errors.email}</div>} */}

              <div
                className="flex"
                style={{
                  marginTop: 15,
                }}
              >
            
                <div className="flex-1" style={{ }}>
                  <Button
                    type="submit"
                    className="rounded-md shadow-md w-full bg-pr text-center text-white font-medium cursor-pointer"
                    style={{
                      backgroundColor: "#6d81fe",
                      color: "#fff",
                      borderRadius: 10,
                      padding: 6,

                      textTransform: "none",
                      fontSize: 14,
                      border: "2px solid #6d81fe",
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
