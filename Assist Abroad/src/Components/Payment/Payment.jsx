import React from "react";
import Navbar from "../../layout/Navbar";

const Payment = () => {
    return(
<div className="bg-[#F6F7FC] min-h-screen">
    <Navbar/>
    <section class="bg-white pt-20 lg:pt-12 px-5 lg:mx-0">
  <div class=" mx-auto lg:max-w-7xl py-9  px-5 lg:px-10 lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-tc font_ab ">Choose a package that suits you</h2>
          <p class="mb-5 font-light text-tc sm:text-xl font_ab ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-10 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          <div class=" flex flex-col  mx-auto  text-center text-tc bg-white  border border-pr shadow">
              <h3 class="w-full   text-2xl font-semibold text-wt bg-tc p-6 ">Starter</h3>
              <p class="w-full font-light sm:text-lg text-wt bg-pr p-4">Best option for personal use & for your next project.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$29</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span class="font-semibold">1 developer</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span class="font-semibold">6 months</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span class="font-semibold">6 months</span></span>
                  </li>
              </ul>
              <a href="#" class="text-wt bg-pr hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 mb-4">Get started</a>
          </div>
                   {/* <!-- Pricing Card --> */}
                   <div class=" flex flex-col  mx-auto  text-center text-tc bg-white  border border-pr shadow">
              <h3 class="w-full   text-2xl font-semibold text-wt bg-tc p-6 ">Starter</h3>
              <p class="w-full font-light sm:text-lg text-wt bg-pr p-4">Best option for personal use & for your next project.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$29</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span class="font-semibold">1 developer</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span class="font-semibold">6 months</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span class="font-semibold">6 months</span></span>
                  </li>
              </ul>
              <a href="#" class="text-wt bg-pr hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 mb-4">Get started</a>
          </div>
                   {/* <!-- Pricing Card --> */}
                   <div class=" flex flex-col  mx-auto  text-center text-tc bg-white  border border-pr shadow">
              <h3 class="w-full   text-2xl font-semibold text-wt bg-tc p-6 ">Starter</h3>
              <p class="w-full font-light sm:text-lg text-wt bg-pr p-4">Best option for personal use & for your next project.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$29</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span class="font-semibold">1 developer</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span class="font-semibold">6 months</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      {/* <!-- Icon --> */}
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span class="font-semibold">6 months</span></span>
                  </li>
              </ul>
              <a href="#" class="text-wt bg-pr hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 mb-4">Get started</a>
          </div>
      </div>
  </div>
</section>
</div>
    );
};

export default Payment;