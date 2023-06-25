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

import { BsCreditCard } from "react-icons/bs";

import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PaymentCard = (params) => {
  const { dispatch, isFetching } = useContext(Context);
  const [showDiv, setShowDiv] = useState(false);

  const navigate = useNavigate();

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

  const { membershipId, price } = useLocation().state;

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
      expiryDate: Yup.string().min(5,"").required("Required"),
      cvv: Yup.string()
        .matches(/^\d+$/, "CVV must contain only numbers")
        .max(3, "CVV must be exactly 3 digits")
        .required("Required"),
      cardName: Yup.string().required("Required"),
      cardEmail: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      let [month,year]=values.expiryDate.split("/")
      let data = {
        cardDetails: {
          ...values,
          number: values.cardNumber,
          exp_month: month,
          exp_year: year,
          cvc: values.cvv,
        },
        membershipId: membershipId,
      };

      await commonApi({
        action: "createPayment",
        data: data,
        config: {
          authToken: true,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          // navigate(-1)
          navigate("/arrival-form", {replace:true});
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className=" min-h-screen">
      <Navbar />
      <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <div className="h-full">
          {/* <!-- Pay component --> */}
          <div>
            {/* <!-- Card background --> */}
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-xl mx-auto mt-32 ">
              <img
                className="rounded-t shadow-lg"
                src={"https://preview.cruip.com/mosaic/images/pay-bg.jpg"}
                width="460"
                height="180"
                alt="Pay background"
              />
            </div>
            {/* <!-- Card body --> */}
            <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-xl mx-auto">
              <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                {/* <!-- Card header --> */}
                <div className="text-center mb-6 ">
                  <div className="mb-2">
                    <img
                      className="-mt-8 inline-flex rounded-full"
                      src={agent}
                      width="64"
                      height="64"
                      alt="User"
                    />
                  </div>
                  <h1 className="text-xl text-pr font-semibold mt-15 mb-2 font_ab px:4 ">
                    Pay now
                  </h1>
                </div>

                {/* // <!-- Card form --> */}
                <form x-show="card" onSubmit={formik.handleSubmit}>
                  <div className="space-y-4">
                    {/* <!-- Card Number --> */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-nr"
                      >
                        Card Number 
                      </label>
                      <TextField
                        fullWidth
                        size="small"
                        id="cardNumber"
                        variant="outlined"
                        placeholder="1234-1234-1234"
                        name="cardNumber"
                        inputProps={{ maxLength: 16 }}
                        error={
                          formik.touched.cardNumber && formik.errors.cardNumber
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                      />
                    </div>
                    {/* <!-- Expiry and CVC --> */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="card-expiry"
                        >
                          Expiry Date 
                        </label>
                        <TextField
                          fullWidth
                          size="small"
                          id="expiryDate"
                          variant="outlined"
                          placeholder="MM/YY"
                        inputProps={{ maxLength: 5 }}

                          name="expiryDate"
                          error={
                            formik.touched.expiryDate &&
                            formik.errors.expiryDate
                          }
                          onChange={(event) => {
                            const input = event.target.value;
                            let formattedDate = input;
                        
                            if (input.length === 2 && !input.includes('/')) {
                              formattedDate = `${input}/`;
                            } 
                            if (formattedDate.length > 5) {
                              formattedDate = formattedDate.slice(0, 5);
                            }
                        
                            formik.setFieldValue('expiryDate', formattedDate);
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.expiryDate}
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="card-cvc"
                        >
                          CVV 
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
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            maxLength: 3,
                          }}
                        />
                      </div>
                    </div>
                    {/* <!-- Name on Card --> */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-name"
                      >
                        Name on Card 
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
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-email"
                      >
                        Email 
                      </label>
                      <TextField
                        fullWidth
                        type="email"
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
                    { formik.touched.cardEmail && formik.errors.cardEmail && 
           <div>{formik.errors.cardEmail}</div>}
                  </div>
                  {/* <!-- Form footer --> */}
                  <div className="mt-6">
                    <div className="mb-4">
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
                        disabled={!(formik.isValid && formik.dirty)}
                        onClick={handleClick}
                      >
                        Pay ${price}
                      </Button>
                    </div>
                  </div>
                  {showDiv && (
                    <div
                      id="toast-simple"
                      className="flex items-center w-full max-w-xl mt-8 border-2 border-slate-200 p-4 space-x-4 text-gray-500 bg-white divide-x divide-slate-300 rounded-lg shadow shadow-slate-300 "
                      role="alert"
                      onClick={handleClose}
                    >
                      <BsCreditCard className="w-8 h-8 text-[#6d81fe] " />

                      <div className="pl-4 text-sm font-small font-10 text-slate-500">
                        {" "}
                        The payment has been successfully processed
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentCard;
