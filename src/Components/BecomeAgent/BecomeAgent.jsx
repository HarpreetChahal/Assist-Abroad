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
import moment from "moment";

import "./BecomeAgent.css";
const BecomeAgent = () => {
  //   const [edit, setEdit] = useState(false);
  const fileInput = React.useRef();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  const { dispatch, isFetching, user } = useContext(Context);
  const navigate = useNavigate();

  const [showDiv, setShowDiv] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const toastRef = useRef(null);

  const handleClick = () => {
    // Perform any necessary actions
    // Show the notification div
    setShowDiv(true);

    // Redirect to homepage after 5 seconds
    // setTimeout(() => {
    //   window.location.href = '/'; // Replace '/' with the actual homepage URL
    // }, 10000);
  };

  const handleClose = () => {
    // Hide the notification div
    setShowDiv(false);
  };

  useEffect(() => {
    if (showDiv && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showDiv, countdown]);

  useEffect(() => {
    if (showDiv) {
      toastRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDiv]);

  const formik = useFormik({
    initialValues: {
      about: user?.bio || "",
      firstname: user.name?.firstName || "",
      email: user.email || "",
      phone: user?.phone?.phone || "",
      dob: user.dob || moment().format("yyyy-MM-DD"),
      carPlate: user?.vehicleInfo?.numberPlate || "",
      country: user?.address?.country || "",
      stAddress: user?.address?.streetAdress || "",
      city: user?.address?.city || "",
      state: user?.address?.state || "",
      zip: user?.address?.postalCode || "",
      accountNo: user?.bankDetails?.accountNo || "",
      bankName: user?.bankDetails?.name || "",
      passportNo: user?.sinNo || "",
    },
    validationSchema: Yup.object({
      about: Yup.string().required("Required"),
      firstname: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      carPlate: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      stAddress: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
      accountNo: Yup.string().required("Required"),
      bankName: Yup.string().required("Required"),
      passportNo: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      let data = {
        about: values.bio,
        firstname: values.firstName,
        email: values.email,
        phone: {
          countryCode: "+1",
          phone: values.phone,
        },
        dob: values.dob,
        carPlate: values.vehicleInfo?.numberPlate,
        country: values.address?.country,
        stAddress: values.address?.streetAdress,
        city: values.address?.city,
        state: values.address?.state,
        zip: values.address?.postalCode,
        accountNo: values.bankDetails?.accountNo,
        bankName: values.bankDetails?.name,
        passportNo: values.sinNo,
      };
      await commonApi({
        action: "becomeAgent",
        data: data,
        config: {
          authToken: true,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          dispatch({ type: "UPDATE_USER", payload: DATA });
          navigate("/arrival-form");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className="  bg-[#f8f8fa]">
      <Navbar />
      <div className="   pt-32 pb-32 lg:pt-32 lg:pb-12  px-3 ">
        <div className=" lg:max-w-7xl w-full  mx-auto  p-4 lg:py-10 lg:px-10 border-2 rounded-xl bg-white ">
          <div className="w-full flex items-center gap-2 justify-center">
            <div className="  items-start lg:items-center flex-col lg:flex-row gap-10 ">
              <img
                className="w-32 h-32 lg:w-30 lg:h-32 mx-auto lg:items-center "
                src={agent}
                alt=""
              />
              <div>
                <h1 className="text-lg mt-1 mb-4 text-[#23314C]">
                  {/* Member Since : 2020 */}
                </h1>
                <div className=" items-center text-center justify-center rounded-md">
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
          <form onSubmit={formik.handleSubmit}>
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
                        id="about"
                        multiline
                        rows={3}
                        name="about"
                        error={formik.touched.about && formik.errors.about}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.about}
                      />
                    </div>
                  </div>
                  {/* <div class="col-span-full">
                    <label
                      for="cover-photo"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Add documents
                    </label>
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div class="text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-300"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <Button
                              variant="contained"
                              onClick={() => fileInput.current.click()}
                              sx={{
                                color: "#ffffff",
                                bgcolor: "#6D81FC",
                                textTransform: "none",
                              }}
                            >
                              Choose files
                            </Button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div class=" pb-8">
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
                      Name
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="firstname"
                        variant="outlined"
                        name="firstname"
                        error={
                          formik.touched.firstname && formik.errors.firstname
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="email"
                        variant="outlined"
                        name="email"
                        error={formik.touched.email && formik.errors.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contact
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="phone"
                        variant="outlined"
                        name="phone"
                        error={formik.touched.phone && formik.errors.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Date of birth
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="dob"
                        variant="outlined"
                        name="dob"
                        error={formik.touched.dob && formik.errors.dob}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dob}
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Car Plate
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="carplate"
                        variant="outlined"
                        name="carPlate"
                        error={
                          formik.touched.carPlate && formik.errors.carPlate
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.carPlate}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="country"
                        variant="outlined"
                        name="country"
                        error={formik.touched.country && formik.errors.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                      />
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
                      <TextField
                        fullWidth
                        size="small"
                        id="stAddress"
                        variant="outlined"
                        name="stAddress"
                        error={
                          formik.touched.stAddress && formik.errors.stAddress
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.stAddress}
                      />
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
                      <TextField
                        fullWidth
                        size="small"
                        id="city"
                        variant="outlined"
                        name="city"
                        error={formik.touched.city && formik.errors.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                      />
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
                      <TextField
                        fullWidth
                        size="small"
                        id="state"
                        variant="outlined"
                        name="state"
                        error={formik.touched.state && formik.errors.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
                      />
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
                      <TextField
                        fullWidth
                        size="small"
                        id="zip"
                        variant="outlined"
                        name="zip"
                        error={formik.touched.zip && formik.errors.zip}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.zip}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2 sm:col-start-1">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Account No
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="accountNo"
                        variant="outlined"
                        name="accountNo"
                        error={
                          formik.touched.accountNo && formik.errors.accountNo
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.accountNo}
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="region"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Bank Name
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="bankName"
                        variant="outlined"
                        name="bankName"
                        error={
                          formik.touched.bankName && formik.errors.bankName
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bankName}
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      SIN No
                    </label>
                    <div class="mt-2">
                      <TextField
                        fullWidth
                        size="small"
                        id="passportNo"
                        variant="outlined"
                        name="passportNo"
                        error={
                          formik.touched.passportNo && formik.errors.passportNo
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.passportNo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-2 flex items-center justify-center text-center gap-x-6">
              <div>
                <Button
                  type="submit"
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
                  onClick={handleClick}
                >
                  Submit Request
                </Button>

                {showDiv && (
                  <div
                    ref={toastRef}
                    id="toast-simple"
                    class="flex items-center w-full max-w-xl mt-8 border-2 border-slate-200 p-4 space-x-4 text-gray-500 bg-white divide-x divide-slate-300 rounded-lg shadow shadow-slate-300 "
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-9 h-9 text-blue-600"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                      ></path>
                    </svg>
                    <div class="pl-4 text-sm font-small font-10 text-slate-500">
                      {" "}
                      Your request has been sent. We will get in touch with you
                      through email. Redirecting you to the homepage in{" "}
                      {countdown} seconds.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeAgent;
