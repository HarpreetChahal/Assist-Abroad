import React from "react";
import Navbar from "../../layout/Navbar";
import hero from "/src/Assets/home.png";
import love from "/src/Assets/love.png";
import rocket from "/src/Assets/rocket.png";
import thunder from "/src/Assets/thunder.png";
import Footer from "../../layout/Footer";
const Home = () => {
  return (
    <div className="bg-[#F6F7FC] relative min-h-screen">
      <Navbar />
      <section
      
        className="w-full pt-32 px-5 lg:mx-0
          "
      >
        <div className="bg-white mx-auto w-full lg:max-w-7xl gap-10 px-5 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 ">
          <div>
            <h1 className=" text-3xl lg:text-4xl font_ab">
              <span>Moving to a new <br className=" lg:hidden" /> country ? </span>
              <br /> Let us help you
            </h1>
            <button className="px-8 py-2 bg-pr text-white  mt-10 text-lg font_ab rounded-md">
              Get Started
            </button>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </section>
      <section id="#service" className=" mt-10 mx-5 lg:mx-0">
        <h1 className="text-3xl text-[#23314C] text-center font-bold">
          Services
        </h1>
        <div className="mx-auto mt-10 grid grid-cols-1 pb-10 lg:grid-cols-3 gap-x-16 gap-y-10 w-full lg:max-w-7xl">
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={rocket} alt="" className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5">
              From Zero to One
            </h1>
            <p className=" text-[#747474] px-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={thunder} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5">
              From Zero to One
            </h1>
            <p className=" text-[#747474] px-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={love} alt="" className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5">
              From Zero to One
            </h1>
            <p className=" text-[#747474] px-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={rocket} alt="" className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5">
              From Zero to One
            </h1>
            <p className=" text-[#747474] px-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={thunder} alt="" className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5">
              From Zero to One
            </h1>
            <p className=" text-[#747474] px-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={love} alt="" className="w-16 h-16" />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5">
              From Zero to One
            </h1>
            <p className=" text-[#747474] px-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 pb-20 mx-5 lg:mx-0">
        <h1 className="text-3xl text-[#23314C] text-center font-bold">
          Contact Us
        </h1>
        <div className="mx-auto lg:max-w-7xl mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Name"
            className="bg-white border-2 px-4 py-4 outline-none rounded-lg text-lg w-full"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="bg-white border-2 px-4 py-4 outline-none rounded-lg text-lg w-full"
          />
          <textarea   className="bg-white border-2 lg:col-span-2 px-4 py-4 outline-none rounded-lg text-lg w-full" placeholder="Message" name="" id="" cols="30" rows="10">

          </textarea>
          <div className="lg:col-span-2 flex items-center justify-end">
<button className="px-8 py-2 text-white bg-pr rounded-md text-xl">
    Submit
</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default Home;
