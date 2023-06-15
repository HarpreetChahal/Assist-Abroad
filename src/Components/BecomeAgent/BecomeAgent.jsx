import React from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { Button, TextField } from "@mui/material";
import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Context } from "../../Components/context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";

import "./BecomeAgent.css";
const BecomeAgent = () => {
  //   const [edit, setEdit] = useState(false);
  const fileInput = React.useRef();

  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      accountNo: "",
      bank: "",
      sin: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      accountNo: Yup.string().required("Required"),
      bank: Yup.string().required("Required"),
      sin: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      let { confirmPassword, ...value } = values;
      await commonApi({
        action: "become-agent",
        data: value,
      })
        .then(({ DATA = {}, MESSAGE }) => {
          console.log("heheh", DATA);
          navigate("/");
        })
        .catch((error) => {
          dispatch({ type: "BECOME_AGENT_INFO_FAIL" });

          console.error(error);
        });
    },
  });

  return (
    <div>
      <Navbar />
      <div className=" mt-32 lg:mt-32 px-3 ">
        <div className=" lg:max-w-7xl w-full bg-[#F8F8FA] mx-auto p-4 lg:py-20 lg:px-20 border-2 rounded-xl  ">
          <div className="w-full flex items-center gap-2 justify-center">
            <div className="  items-start lg:items-center flex-col lg:flex-row gap-10 ">
              <img className="w-32 h-32 lg:w-30 lg:h-32 mx-auto lg:items-center rounded-full" src={agent} alt="" />
              <div>
                <h1 className="text-3xl text-center text-[#23314C]">
                  AGENT NAME
                </h1>
                <h1 className="text-lg mt-1 mb-4 text-[#23314C]">
                  Member Since : 2020
                </h1>
                <div className=" items-center text-center justify-center rounded-md">
                <Button 
        variant="contained" 
        
        onClick={()=>fileInput.current.click()}
        sx={{color:"#ffffff", bgcolor:"#6D81FC",textTransform:"none"}}
      >
        Choose Image
      </Button>

                
      <input 
        ref={fileInput} 
        type="file" 
        style={{ display: 'none' }} 
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
          </div>
          {/* <div className="flex items-center justify-center flex-col ">
                <div className="mt-10 space-y-3">
                  <div className="w:full relative flex items-center  border-2 bg-[#F8F8FA] gap-x-6 py-2">
                    <p className="text-center border-r-2 text-lg   text-[#23314C] lg:w-40 ">
                      Address
                    </p>
                    
                    <TextField
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#ffffff",marginRight:2,color:"#23314c" ,}}
                    />
                  </div>
                  
                </div>
                <div className="mt-2 space-y-3">
                  <div className="relative flex items-center  border-2 bg-[#F8F8FA] gap-x-6 py-2">
                    <p className="text-center border-r-2 text-lg   text-[#23314C] lg:w-40 ">
                     Address
                    </p>
                    
                    <TextField
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#ffffff",marginRight:2,color:"#23314c" ,}}
                    />
                  </div>
                  
                </div>
                <div className="mt-2 space-y-3">
                  <div className="relative flex items-center  border-2 bg-[#F8F8FA] gap-x-6 py-2">
                    <p className="text-center border-r-2 text-lg   text-[#23314C] lg:w-40 ">
                      Bank Account
                    </p>
                    
                    <TextField
                      className="inputField"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "#ffffff",marginRight:2,color:"#23314c" ,}}
                    />
                  </div>
                  
                </div>
                <div className=" mt-2 space-y-3">
                  <div className="w-96 flex   border-2 bg-[#F8F8FA] gap-x-6 py-2">
                    <p className="text-center border-r-2 text-lg   text-[#23314C] lg:w-40 ">
                      Car Plate
                    </p>
                    
                    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        
      </RadioGroup>
                  </div>
                  
                </div>
             
                <Link to={"/"}>
                  <button className="text-white mt-16 bg-pr px-7 py-2 rounded-md">
                    SUBMIT REQUEST
                  </button>
                </Link>
              </div> */}
          {/* <!-- component --> */}
          <form>
            <div class="space-y-4">
              <div class="">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Profile
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
        

                  <div class="col-span-full">
                    <label
                      for="about"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      About
                    </label>
                    <div class="mt-2">
                    <TextField
                    fullWidth
          id="outlined-multiline-static"
          
          multiline
          rows={3}
          
         
        />
                      {/* <textarea
                        id="about"
                        name="about"
                        rows="3"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea> */}
                    </div>
                    
                  </div>
                  <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Add documents</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  {/* <span>Upload a file</span> */}
                  <Button 
        variant="contained" 
        
        onClick={()=>fileInput.current.click()}
        sx={{color:"#ffffff", bgcolor:"#6D81FC",textTransform:"none"}}
      >
        Choose files
      </Button>
                </label>
              </div>
            </div>
          </div>
        </div>

                </div>
              </div>

              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div class="mt-2">
                      {/* <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}

<TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div class="mt-2">
                      {/* <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                      <TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>

                  <div class="sm:col-span-full">
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div class="mt-2">
                      {/* <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                         class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                      <TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div class="mt-2">
                      {/* <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select> */}
                      <TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label
                      for="street-address"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div class="mt-2">
                      {/* <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autocomplete="street-address"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                      <TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>

                  <div class="sm:col-span-2 sm:col-start-1">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div class="mt-2">
                      {/* <input
                        type="text"
                        name="city"
                        id="city"
                        autocomplete="address-level2"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                      <TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="region"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div class="mt-2">
                      {/* <input
                        type="text"
                        name="region"
                        id="region"
                        autocomplete="address-level1"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                      <TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div class="mt-2">
                      {/* <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autocomplete="postal-code"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                      <TextField fullWidth size="small" id="outlined-basic"  variant="outlined" />
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            <div class="mt-6 flex items-center justify-center gap-x-6">
              
              <Link to={"/"}>
                  <button className="text-white mt-16 bg-pr px-7 py-2 rounded-md">
                    SUBMIT REQUEST
                  </button>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeAgent;
