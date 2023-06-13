import React from "react";
import Navbar from "../../layout/Navbar";
import agent from "/src/Assets/agent.png";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./BecomeAgent.css";
const BecomeAgent = () => {
  //   const [edit, setEdit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" mt-32 lg:mt-32 px-3 ">
        <div className=" lg:max-w-7xl w-full bg-[#F8F8FA] mx-auto p-4 lg:py-20 lg:px-20 border-2 rounded-xl  ">
          <div className="w-full flex items-center gap-2 justify-center">
            <div className="  items-start lg:items-center flex-col lg:flex-row gap-10 ">
              <img className="w-32 lg:w-auto" src={agent} alt="" />
              <div>
                <h1 className="text-3xl text-center text-[#23314C]">
                  AGENT NAME
                </h1>
                <h1 className="text-lg mt-1 mb-4 text-[#23314C]">
                  Member Since : 2020
                </h1>
                <input
                  type="file"
                  className="hidden"
                  name="myfile"
                  id="myfile"
                />
                <label
                  htmlFor="myfile"
                  className="text-white mt-8 text-center items-center bg-pr px-7 py-2 rounded-md"
                >
                  Choose image
                </label>
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
          <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
              <form action="" method="POST">
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="Address"
                        class="mb-3 block text-base font-medium text-[#23314C]"
                      >
                        Address
                      </label>
                      <TextField
                      
                        type="text"
                        size="small"
                        name="address"
                        id="address"
                        placeholder="Address"
                        sx={{ backgroundColor: "#ffffff" }}
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="city"
                        class="mb-3 block text-base font-medium text-[#23314C]"
                      >
                        City
                      </label>
                      <TextField
                        size="small"
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                        sx={{ backgroundColor: "#ffffff" }}
                      />
                    </div>
                  </div>
                </div>
             

                <div class="mb-5">
                  <label class="mb-3 block text-base font-medium text-[#07074D]">
                    Do you have car?
                  </label>
                  <div class="flex items-center space-x-6">
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton1"
                        class="h-5 w-5"
                      />
                      <label
                        for="radioButton1"
                        class="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Yes
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        class="h-5 w-5"
                      />
                      <label
                        for="radioButton2"
                        class="pl-3 text-base font-medium text-[#07074D]"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="accountNo"
                        class="mb-3 block text-base font-medium text-[#23314C]"
                      >
                        Account No
                      </label>
                      <TextField
                        size="small"
                        type="text"
                        name="accountNo"
                        id="accountNo"
                        placeholder="Account No"
                        sx={{ backgroundColor: "#ffffff" }}
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="bank"
                        class="mb-3 block text-base font-medium text-[#23314C]"
                      >
                        Bank
                      </label>
                      <TextField
                        size="small"
                        type="text"
                        name="bank"
                        id="bank"
                        placeholder="Bank name"
                        sx={{ backgroundColor: "#ffffff" }}
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label
                    for="sin"
                    class="mb-3 block text-base font-medium text-[#23314C]"
                  >
                    Enter your SIN number?
                  </label>
                  <TextField
                    size="small"
                    type="text"
                    name="sin"
                    id="sin"
                    placeholder="Sin"
                  />
                </div>

                <div>
                  <button className="text-white mt-4 text-center items-center justify-center bg-pr px-7 py-2 rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAgent;
