import React, { useState, useRef } from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
import commonApi from "../../api/common";
import { Button, TextField } from "@mui/material";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const scrollRef = useRef(null);

  const navigate = useNavigate();
  const [membership, setMembership] = useState([]);
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
    const fetchMembership = async () => {
    await commonApi({
      action: "getMembership",
      data: {},
    })
      .then(({ DATA = {}, MESSAGE }) => {
        setMembership(DATA.data);
        for (let i = 0; i < DATA.data.length; i++) {
       
          let data=DATA.data
          if (data[i]?.featured === true) {
            setSelectedMembership(data[i]._id);
            setSelectedPrice(data[i].price);
            setHighlightedIndex(i)
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchMembership();
  }, []);

  const handleSelectMembership = (memId, price, index, event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    setSelectedMembership(memId);
    setSelectedPrice(price);
    setHighlightedIndex(index);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="bg-white pt-20 lg:pt-12 px-5 lg:mx-0">
        <div className=" mx-auto lg:max-w-7xl py-9  px-5 lg:px-10 lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-tc font_ab">
              Choose a package
            </h2>
            <p className="mb-5 font-light text-tc sm:text-xl font_ab">
              Select a plan that works best for you
            </p>
          </div>
          <div className="space-y-10 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            {membership.map((mem, index) => {
           
              const isHighlighted = selectedMembership == mem._id;
              return (
                <div
                  className={`flex flex-col mx-auto text-center text-tc bg-white border-2 ${
                    isHighlighted
                      ? "border-4 border-pr shadow-lg transform scale-105"
                      : ""
                  }`}
                  key={index}
                >
                  <h3 className="w-full text-2xl font-semibold text-wt bg-tc p-6">
                    {mem.name}
                  </h3>
                  <p className="w-full font-light sm:text-lg text-wt bg-pr p-4">
                    {mem?.description}
                  </p>
                  <div className="flex justify-center items-baseline my-6">
                    <span className="mr-2 text-5xl font-extrabold">
                      ${mem.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <a
                    href="#"
                    
                    className="text-wt bg-pr hover:bg-primary-700  font-medium rounded-lg text-sm px-8 py-2.5 mb-10 text-center mb-4"
                    onClick={(event) =>
                      handleSelectMembership(mem._id, mem.price, index, event)
                    }
                  >
                    Select
                  </a>
                  {/* List */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {mem.services.map((service, index) => (
                      <li className="flex items-center space-x-3" key={index}>
                        {/* Icon */}
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div
        className="mt-5 mb-20 flex items-center justify-center"
        ref={scrollRef}
      >
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            bgcolor: "#6D81FC",
            textTransform: "none",
            marginBottom: 5,
            "&:hover": {
              bgcolor: "#6d81fc",
              color: "#ffffff",
            },
          }}
          disabled={!selectedMembership}
          onClick={() => {
            navigate("/payment-card", {
              state: { membershipId: selectedMembership, price: selectedPrice },
              replace: true,
            });
          }}
        >
          Continue to payment
        </Button>
      </div>
    </div>
  );
};

export default Payment;
