import React from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import  {  useContext } from "react";
import { Context } from "../context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [edit, setEdit] = useState(false);

  const fileInput = React.useRef();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  
  const { dispatch, isFetching } = useContext(Context);
const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      firstname: "",
      email:"",
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
          action: "profile",
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
    <div>
      <Navbar />
      <div className=" mt-32 lg:mt-32 px-3 ">
        <form>
        <div className=" lg:max-w-7xl w-full mx-auto p-4 lg:py-20 lg:px-20 border-2 rounded-xl ">
          <div className="w-full flex items-start gap-2 justify-between">
            <div className="flex items-start lg:items-center flex-col lg:flex-row gap-10 ">
              <img className="w-32 lg:w-auto" src={agent} alt="" />
              <div>
                <h1 className="text-3xl">SAMAR DAHIYA</h1>
                <h1 className="text-lg mt-1 mb-4">Member Since : 2020</h1>
                <div className=" items-center  rounded-md">
                  <Button
                    variant="contained"
                    onClick={() => fileInput.current.click()}
                    sx={{
                      color: "#6d81fc",
                      bgcolor: "#ffffff",
                      textTransform: "none",
                      border: 2,
                      "&:hover": {
                        bgcolor: "#6d81fc",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Choose Image
                  </Button>

                  <input
                    ref={fileInput}
                    type="file"
                    style={{ display: "none" }}
                  />
                  {/* <label
                  htmlFor="myfile"
                  className="text-white mt-8 text-center items-center bg-pr px-7 py-2 rounded-md"
                >
                  Choose image
                </label> */}
                </div>
              </div>
            </div>
            <div className="flex items-center  gap-3">
              {!edit ? (
                // <button
                //   onClick={() => setEdit(true)}
                //   className="px-4 bg-pr text-white py-2 rounded-md"
                // >
                //   Edit
                // </button>
                <Button
                  variant="contained"
                  onClick={() => setEdit(true)}
                  sx={{
                    color: "#ffffff",
                    bgcolor: "#6D81FC",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#6d81fc",
                      color: "#ffffff",
                    },
                  }}
                >
                  Edit
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => setEdit(false)}
                    sx={{
                      color: "#6d81fc",
                      bgcolor: "#ffffff",
                      textTransform: "none",
                      border: 2,
                      "&:hover": {
                        bgcolor: "#ffffff",
                        color: "#6d81fc",
                        
                      },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => setEdit(false)}
                    sx={{
                      color: "#ffffff",
                      bgcolor: "#6D81FC",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#6d81fc",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Save
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="mt-10">
            <div class="bg-white  pb-6 rounded-b ">
              <div x-show="card">
                <div class="space-y-4">
                  {/* <!-- Card Number --> */}
                  <div class="flex space-x-4">
                    <div class="flex-1">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-expiry"
                      >
                        Name <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="firstname"
                        variant="outlined"
                        disabled={!edit}
                        
                        name="firstname"
                    error={formik.touched.firstname && formik.errors.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                      />
                    </div>
                    <div class="flex-1">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-cvc"
                      >
                        Email <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="email"
                        variant="outlined"
                        disabled={!edit}
                        // defaultValue="sam@gmail.com"
                        name="email"
                    error={formik.touched.email && formik.errors.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                      />
                    </div>
                  </div>
                  <div class="flex space-x-4">
                    <div class="flex-1">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-expiry"
                      >
                        Contact No <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="phone"
                        variant="outlined"
                        disabled={!edit}
                        name="phone"
                    error={formik.touched.phone && formik.errors.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                      />
                    </div>
                    <div class="flex-1">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-cvc"
                      >
                        Date of birth <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="dob"
                        variant="outlined"
                        disabled={!edit}
                        name="dob"
                    error={formik.touched.dob && formik.errors.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dob}
                      />
                    </div>
                  </div>
                  <div class="flex space-x-4">
                    <div class="flex-1">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-expiry"
                      >
                        Password <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="password"
                        variant="outlined"
                        disabled={!edit}
                        name="password"
                        error={formik.touched.password && formik.errors.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                    </div>
                    <div class="flex-1">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-cvc"
                      >
                        Confirm Password <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="confirmPassword"
                        variant="outlined"
                        disabled={!edit}
                        name="confirmPassword"
                    error={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Form footer --> */}
              </div>
            </div>
            {/* <div className="flex items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Name
              </p>{" "}
              <input
                type="text"
                disabled={!edit}
                defaultValue={"Samar Dahiya"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div> */}
            {/* <div className="flex mt-2 items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Contact
              </p>{" "}
              <input
                type="text"
                disabled={!edit}
                defaultValue={"(306)***-**96"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div>
            <div className="flex mt-2 items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Email
              </p>{" "}
              <input
                type="email"
                disabled={!edit}
                defaultValue={"samar******@gmail.com"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div>
            <div className="flex mt-2 items-center border-2 bg-[#F8F8FA] max-w-2xl ">
              <p className="w-32 text-center border-r-2 text-lg  py-2 text-[#23314C]">
                Address
              </p>{" "}
              <input
                type="text"
                disabled={!edit}
                defaultValue={"#2, 875 Regina"}
                className={` outline-none border-none ${
                  edit && " ring-1 ring-pr"
                } text-xl py-2 w-full text-[#23314C] px-5 bg-transparent`}
              />
            </div> */}
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
