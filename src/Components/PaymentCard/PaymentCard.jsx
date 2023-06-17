import React from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
// import commonApi from "../../api/common";
import agent from "/src/Assets/agent.png";
import cover from "/src/Assets/imageLogoRegister.png";
import { Button, TextField } from "@mui/material";

import { useState, useContext, useEffect } from "react";
import { Context } from "../../Components/context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";

import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PaymentCard = (params) => {
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();
  
  const {membershipId,price} = useLocation().state;

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
      cardEmail: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.number().required("Required"),
      expiryDate: Yup.string().required("Required"),
      cvv: Yup.string().required("Required"),
      cardName: Yup.string().required("Required"),
      cardEmail: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      let data={cardDetails:{
        ...values,
        number:values.cardNumber,
        exp_month:values.expiryDate.slice(0,2),
        exp_year:values.expiryDate.slice(2),
        cvc:values.cvv
      },
      membershipId:membershipId
    }
      
      await commonApi({
        action: "createPayment",
        data: data,
        config: {
          authToken: true,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          navigate("/")
        })
        .catch((error) => {
       
          console.error(error);
        });
    },
  });

  return (
    <div className=" min-h-screen">
      <Navbar />
      <section class="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <div class="h-full">
          {/* <!-- Pay component --> */}
          <div>
            {/* <!-- Card background --> */}
            <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto mt-32 ">
              <img
                class="rounded-t shadow-lg"
                src={"https://preview.cruip.com/mosaic/images/pay-bg.jpg"}
                width="460"
                height="180"
                alt="Pay background"
              />
            </div>
            {/* <!-- Card body --> */}
            <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto">
              <div class="bg-white px-8 pb-6 rounded-b shadow-lg">
                {/* <!-- Card header --> */}
                <div class="text-center mb-6 ">
                  <div class="mb-2">
                    <img
                      class="-mt-8 inline-flex rounded-full"
                      src={agent}
                      width="64"
                      height="64"
                      alt="User"
                    />
                  </div>
                  <h1 class="text-xl text-pr font-semibold mt-15 mb-2 font_ab px:4 ">
                    Pay now
                  </h1>
                  
                </div>

                {/* // <!-- Card form --> */}
                <form x-show="card" onSubmit={formik.handleSubmit}>
                  <div class="space-y-4">
                    {/* <!-- Card Number --> */}
                    <div>
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-nr"
                      >
                        Card Number <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="cardNumber"
                        variant="outlined"
                        placeholder="1234-1234-1234"
                        name="cardNumber"
                        error={
                          formik.touched.cardNumber && formik.errors.cardNumber
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                      />
                    </div>
                    {/* <!-- Expiry and CVC --> */}
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          class="block text-sm font-medium mb-1"
                          for="card-expiry"
                        >
                          Expiry Date <span class="text-red-500">*</span>
                        </label>
                        <TextField
                          fullWidth
                          size="small"
                          id="expiryDate"
                          variant="outlined"
                          placeholder="MM/YY"
                          name="expiryDate"
                          error={
                            formik.touched.expiryDate &&
                            formik.errors.expiryDate
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.expiryDate}
                        />
                      </div>
                      <div class="flex-1">
                        <label
                          class="block text-sm font-medium mb-1"
                          for="card-cvc"
                        >
                          CVC <span class="text-red-500">*</span>
                        </label>
                        <TextField
                          fullWidth
                          size="small"
                          id="cvv"
                          variant="outlined"
                          placeholder="CVV"
                          name="cvv"
                          error={formik.touched.cvv && formik.errors.cvv}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.cvv}
                        />
                      </div>
                    </div>
                    {/* <!-- Name on Card --> */}
                    <div>
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-name"
                      >
                        Name on Card <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="cardName"
                        variant="outlined"
                        placeholder="John Doe"
                        name="cardName"
                        error={
                          formik.touched.cardName && formik.errors.cardName
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardName}
                      />
                    </div>
                    {/* <!-- Email --> */}
                    <div>
                      <label
                        class="block text-sm font-medium mb-1"
                        for="card-email"
                      >
                        Email <span class="text-red-500">*</span>
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="cardEmail"
                        variant="outlined"
                        placeholder="john@gmail.com"
                        name="cardEmail"
                        error={
                          formik.touched.cardEmail && formik.errors.cardEmail
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardEmail}
                      />
                    </div>
                  </div>
                  {/* <!-- Form footer --> */}
                  <div class="mt-6">
                    <div class="mb-4">
                 
                        <Button
                          fullWidth
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
                          type="submit"
                        >
                          Pay ${price}
                        </Button>
                      
                    </div>
                   {/* <div class="text-xs text-gray-500 italic text-center">
                      You'll be charged $253, including $48 for VAT{" "}
                    </div>
                    */}
                  </div>
                </form>

                {/* <!-- PayPal form --> 
                <div x-show="!card" x-cloak>
                  <div>
                    <div class="mb-4 mt-4">
                      <Button
                        fullWidth
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
                        Pay $253.00 with paypal
                        
                      </Button>
                    </div>
                    <div class="text-xs text-gray-500 italic text-center">
                      You'll be charged $253, including $48 for VAT{" "}
                    </div>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentCard;
