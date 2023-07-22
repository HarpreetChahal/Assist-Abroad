import React ,{ useRef } from "react";
import Navbar from "../../layout/Navbar";
import agent1 from "/src/Assets/agent.png";
import agent2 from "/src/Assets/avatar2.jpg";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { dispatch, isFetching, user } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const fileInput = useRef(null);
  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
      name: user?.name?.firstName || "",
      dob:user.dob ? moment(user.dob).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD"),
      phone: user?.phone?.phone || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      name: Yup.string().required("Required"),
      dob: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          name: {
            firstName: values.name,
            fullName: values.name,
          },
          phone: {
            countryCode: "+1",
            phone: values.phone,
          },
          dob: values.dob,
        };

        await commonApi({
          action: "updateProfile",
          data: data,
          config: {
            authToken: true,
          },
        }).then(({ DATA = {}, MESSAGE }) => {
          dispatch({ type: "UPDATE_USER", payload: DATA });
          setEdit(false);
        });
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" });
        console.error(error);
      }
    },
  });

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#f8f8fa]">
        <div className="pt-32 pb-20 lg:pt-32 lg:pb-10 px-3">
          <form onSubmit={formik.handleSubmit}>
            <div className="lg:max-w-7xl w-full mx-auto p-4 lg:py-8 lg:px-8 shadow shadow-slate-300 bg-white rounded-xl">
              <div className="w-full flex items-start gap-2 justify-between">
                <div className="flex items-start lg:items-center flex-col lg:flex-row gap-10">
                  {/* <img className="w-32 lg:w-auto rounded-md" src={agent} alt="" /> */}
                  <img className="w-32 h-32 lg:w-auto rounded-md" src={user.role === 0 ? agent1 : agent2} alt="" />
                  <div>
                    <h1 className="text-4xl font_ab">{user?.name?.firstName}</h1>
                    <h1 className="text-lg mt-1 mb-4 font_ab ">Member Since : 2023</h1>
                    <div className=" items-center  rounded-md">
                    <input
        type="file"
        accept="image/*"
        ref={fileInput}
        style={{ display: "none" }}
        // Add any additional attributes or event handlers as needed
      />
                      <Button
                        variant="contained"
                        onClick={() => fileInput.current.click()}
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
                        Choose Image
                      </Button>
                      
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
                      
                        onClick={formik.handleSubmit}
                        variant="contained"
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
                <div className="bg-white rounded-b">
                  <div x-show="card">
                    <div className="space-y-4">
                      <p className="font_ab text-2xl font-medium text-underline">
                        Profile Information
                      </p>
                      <div className="space-x-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1" htmlFor="firstname">
                            Name 
                          </label>
                          <TextField
                            fullWidth
                            size="small"
                            id="firstname"
                            variant="outlined"
                            disabled={!edit}
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            error={formik.touched.name && formik.errors.name}
                           
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                          Email 
                        </label>
                        <TextField
                          fullWidth
                          size="small"
                          id="email"
                          variant="outlined"
                          disabled={true}
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          error={formik.touched.email && formik.errors.email}
                        
                        />
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1" htmlFor="phone">
                            Contact No 
                          </label>
                          <TextField
                            fullWidth
                            size="small"
                            id="phone"
                            variant="outlined"
                            disabled={!edit}
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            error={formik.touched.phone && formik.errors.phone}
                            inputProps={{
                              maxLength: 10,
                            }}
                          
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1" htmlFor="dob">
                            Date of Birth 
                          </label>
                          <TextField
                            fullWidth
                            size="small"
                            id="dob"
                            variant="outlined"
                            disabled={!edit}
                            type="date"
                            name="dob"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                            error={formik.touched.dob && formik.errors.dob}
                           
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
