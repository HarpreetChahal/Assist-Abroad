import React from "react";
import Navbar from "../../layout/Navbar";
import { Link } from "react-router-dom";
// import commonApi from "../../api/common";


// import { useState, useContext, useEffect } from "react";



const PaymentCard = () => {
    return(
<div className=" min-h-screen">
    <Navbar/>
    <div class="max-w-sm mx-auto mt-40 bg-gray rounded-md shadow-md ">
    <div class="px-6 py-4 bg-gray-900 text-white">
        <h1 class="text-lg font-bold">Credit Card</h1>
    </div>
    <div class="px-6 py-4">

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="card-number">
                Card Number
            </label>
            <input
                class="appearance-none border border-gray-400 bg-[#F8F8FA] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="card-number" type="text" placeholder="**** **** **** ****"/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="expiration-date">
                Expiration Date
            </label>
            <input
                class="appearance-none border border-gray-400 bg-[#F8F8FA] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiration-date" type="text" placeholder="MM/YY"/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
                CVV
            </label>
            <input
                class="appearance-none border border-gray-400 bg-[#F8F8FA] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv" type="text" placeholder="***"/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
                Cardholder Name
            </label>
            <input
                class="appearance-none border border-gray-400 bg-[#F8F8FA] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Full Name"/>
        </div>

        <button className="text-white bg-pr px-5 font-medium text-lg py-3 border border-pr rounded-md mb-5 ">
            Pay Now
          </button>
    </div>
</div>
</div>
    );
};

export default PaymentCard;