import React from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
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
  const [email,setEmail]=useState(user?.email || "")
  const [name,setName]=useState(user?.name?.firstName || "")
  const [dob,setDob]=useState(moment(user?.dob).format("DD/MM/YYYY") || moment().format("DD/MM/YYYY"))

  const [phone,setPhone]=useState(user?.phone?.phone || "")

  const fileInput = React.useRef();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

 

  const submitValue=async() => {
   console.log("here")
    let data = {
      name: {
        firstName: name,
        fullName: name,
      },
      phone: {
        countryCode: "+1",
        phone: phone,
      },
      dob: dob,
    };
    await commonApi({
      action: "updateProfile",
      data: data,
      config:{
        authToken:true
      }
    })
      .then(({ DATA = {}, MESSAGE }) => {
        console.log("HHD",DATA)
        // dispatch({ type: "UPDATE_USER", payload: DATA });
        setEdit(false);
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });

        console.error(error);
      });
  }
  return (
    <div>
      <Navbar />
      <div className="min-h-screen   bg-[#f8f8fa]">
      <div className=" pt-32 pb-20 lg:pt-32 lg:pb-10 px-3  ">
        <form>
          <div className=" lg:max-w-7xl w-full mx-auto p-4 lg:py-8 lg:px-8 shadow shadow-slate-300 bg-white rounded-xl ">
            <div className="w-full flex items-start gap-2 justify-between">
              <div className="flex items-start lg:items-center flex-col lg:flex-row gap-10 ">
                
                <img className="w-32 lg:w-auto rounded-md" src={agent} alt="" />
                <div>
                  <h1 className="text-4xl font_ab">{user?.name?.firstName}</h1>
                  
                  <h1 className="text-lg mt-1 mb-4 font_ab ">Member Since : 2023</h1>
                  <div className=" items-center  rounded-md">
                    {/* <Button
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
                    </Button> */}

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
                      type="submit"
                      variant="contained"
                       onClick={submitValue}
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
              <div class="bg-white   rounded-b ">
                <div x-show="card">
                  <div class="space-y-4">
                    <p className="font_ab text-2xl font-medium text-underline">Profile Information</p>
                    {/* <!-- Card Number --> */}
                    <div class="space-x-4">
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
                         
                          onChange={(e)=>{
                            setName(e.target.value)
                          }}
                         
                          value={name}
                        />
                      </div>
                      
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
                          disabled={true}
                          // defaultValue="sam@gmail.com"
                          name="email"
                       
                          onChange={(e)=>{
                            setEmail(e.target.value)
                          }}
                         
                          value={email}
                        />
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
                          onChange={(e)=>{
                            setPhone(e.target.value)
                          }}
                         
                          value={phone}
                        />
                      </div>
                     
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
                          type="date"
                          variant="outlined"
                          disabled={!edit}
                          name="dob"
                          onChange={(e)=>{
                            setDob(e.target.value)
                          }}
                         
                          value={dob}
                        />
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
