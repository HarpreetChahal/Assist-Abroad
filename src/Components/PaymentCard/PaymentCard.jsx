import React from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
// import commonApi from "../../api/common";
import agent from "/src/Assets/agent1.jpg";
import visa from "/src/Assets/visa.png";
import mastercard from "/src/Assets/mastercard.png";
import amex from "/src/Assets/amex.png";
import cover from "/src/Assets/imageLogoRegister.png";
import { Button, TextField } from "@mui/material";

import { useState, useContext, useEffect } from "react";
import { Context } from "../../Components/context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsCreditCard } from "react-icons/bs";
import InputAdornment from "@mui/material/InputAdornment";
import { number } from "card-validator";
import creditCardType from "credit-card-type"; // Import credit-card-type library


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
      cardNumber: Yup.number().typeError("Must be a number").required("Required"),
      expiryDate: Yup.string().min(5, "").required("Required"),
      cvv: Yup.string()
        .matches(/^\d+$/, "CVV must contain only numbers")
        .max(3, "CVV must be exactly 3 digits")
        .required("Required"),
      cardName: Yup.string().required("Required"),
      cardEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      const cardNumberValidation = number(values.cardNumber);
      const isCardNumberValid = cardNumberValidation.isValid;

      if (!isCardNumberValid) {
        formik.setFieldError("cardNumber", "Invalid credit card number");
        return;
      }

      const cardType = creditCardType(values.cardNumber);
      // console.log("Card Type:", cardType[0].niceType);

      let [month, year] = values.expiryDate.split("/");
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
        .then(async ({ DATA = {}, MESSAGE }) => {
          // navigate(-1)

          await commonApi({
            action: "getProfile",
            data: {},
            config: {
              authToken: true,
            },
          }).then(({ DATA = {}, MESSAGE }) => {
            dispatch({ type: "UPDATE_USER", payload: DATA });
            navigate("/arrival-form", { replace: true });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  const getCardIcon = (cardType) => {
    switch (cardType) {
      case "visa":
        return <img src={visa} alt="Visa" className="w-7 h-8"/>;
      case "mastercard":
        return <img src={mastercard} alt="Mastercard" className="w-7 h-6" />;
        case "amex":
          return <img src={amex} alt="American Express" className="w-7 h-6" />;
      
      default:
        return null;
    }
  };
  
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
                        placeholder="1234 1234 1234 1234"
                        name="cardNumber"
                        InputProps={{
                          inputProps: {
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            maxLength: 19,
                          },
                          endAdornment: (
                            <InputAdornment position="end">
        {formik.values.cardNumber && (
          <>
            {formik.values.cardNumber.startsWith("4") ? (
              <img src={visa} alt="Visa" className="w-7 h-8" />
            ) : formik.values.cardNumber.startsWith("5") ? (
              <img src={mastercard} alt="Mastercard" className="w-7 h-6" />
            ) : formik.values.cardNumber.startsWith("34") ||
              formik.values.cardNumber.startsWith("37") ? (
              <img src={amex} alt="American Express" className="w-7 h-6" />
            ) : (
              <>
                {getCardIcon(
                  creditCardType(formik.values.cardNumber)[0]?.type
                )}
              </>
            )}
          </>
        )}
      </InputAdornment>
                          
                          ),
                        }}
                        inputProps={{ maxLength: 19 }}
                        error={
                          formik.touched.cardNumber && formik.errorscardNumber
                        }
                        onChange={(event) => {
                          const input = event.target.value;
                          let formattedNumber = input.replace(/\s/g, ""); // Remove existing spaces

                          if (formattedNumber.length > 0) {
                            formattedNumber = formattedNumber
                              .match(new RegExp(".{1,4}", "g"))
                              .join(" ");
                          }

                          formik.setFieldValue("cardNumber", formattedNumber);

                          const cardType = creditCardType(formattedNumber);
                          if (cardType.length > 0) {
                            formik.setFieldValue("cardType", cardType[0].type);
                          } else {
                            formik.setFieldValue("cardType", "");
                          }
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                      />
                      {formik.touched.cardNumber && formik.errors.cardNumber && (
                        <div className="text-[red] mt-2 font-medium">
                          {formik.errors.cardNumber}
                        </div>
                      )}
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

                            if (input.length === 2 && !input.includes("/")) {
                              formattedDate = `${input}/`;
                            }
                            if (formattedDate.length > 5) {
                              formattedDate = formattedDate.slice(0, 5);
                            }

                            formik.setFieldValue("expiryDate", formattedDate);
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
                    {formik.touched.cardEmail && formik.errors.cardEmail && (
                      <div className="text-[red] mt-2 font-medium">
                        {formik.errors.cardEmail}
                      </div>
                    )}
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
