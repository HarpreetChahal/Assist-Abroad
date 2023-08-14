import React, { useRef } from "react";
import Navbar from "../../layout/Navbar";
import hero from "/src/Assets/HOME9.png";

import hotel from "/src/Assets/hotel.png";
import house from "/src/Assets/house.png";
import taxi from "/src/Assets/taxi.png";
import city from "/src/Assets/city.png";
import document from "/src/Assets/document.png";
import bank from "/src/Assets/bank.png";
import healthcard from "/src/Assets/healthcard.png";
import buspass from "/src/Assets/buspass.png";
import phone from "/src/Assets/phone.png";

import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";

const Home = () => {
  const form = useRef();
  const toastStyle = {
    background: "#6d81fe",
    color: "#ffffff",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w177nqe",
        "template_btcxizo",
        form.current,
        "4TbzYhqyU5WTSHK_R"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-[#F6F7FC] relative min-h-screen">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42" height="42"/> */}
      <Navbar />
      <section
        className="w-full pt-32 px-5 lg:mx-0
          "
      >
        <div className="bg-white mx-auto w-full lg:max-w-7xl gap-10 px-5 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 ">
          <div>
            <h1 className=" text-3xl text-[#6D81FE] lg:text-4xl font_ab mb-5">
              <span>
                Moving to a new <br className=" lg:hidden" /> country ?{" "}
              </span>
              <br /> Let us help you
            </h1>
            <div>
              <Link to={"/quiz"}>
                <Button
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
                  Get started
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <img src={hero} alt="" className="h-3/4 w-3/4" />
          </div>
        </div>
      </section>
      <section id="#service" className=" mt-10 mx-5 lg:mx-0">
        <h1 className="text-3xl text-[#23314C] text-center font-bold font_ab">
          Services
        </h1>
        <div className="mx-auto mt-10 grid grid-cols-1 pb-10 lg:grid-cols-3 gap-x-16 gap-y-10 w-full lg:max-w-7xl">
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={taxi} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 text-center font_ab">
              Airport Pickup
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              Airport pickup service provides a convenient and reliable
              transportation solution for travelers arriving at an airport.
              Whether you are a tourist visiting a new city or a business
              professional attending a conference, airport pickup services offer
              a hassle-free way to reach your destination comfortably and
              efficiently.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={hotel} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 text-center font_ab">
              Hotel Stay
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              Hotel stay service offers travelers a comfortable place to call
              home during their trips. With a range of amenities, personalized
              service, and a focus on guest satisfaction, hotels strive to
              create a welcoming and enjoyable experience for guests. Whether
              you are traveling for business or leisure, a hotel stay provides
              the ideal base .
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={city} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 text-center font_ab">
              City Tour
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              A city tour is an immersive and exciting way to explore the sights
              & culture of a new destination. Whether you are visiting a city
              for the first time or looking to discover hidden gems in your own
              hometown, a city tour offers a comprehensive experience. City
              tours come in various forms, catering to different interests and
              preferences.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={document} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 font_ab text-center ">
              Government Id
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              Getting government documents like official documents, such as
              identification cards, driver's licenses, and permits is a new
              place is hassle but if you have valuable resource that assists
              individuals in navigating the often complex process of obtaining
              and managing government-issued documents, it can be made smooth
              and efficient. seeking various .
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={bank} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 font_ab text-center">
              Banking
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              Setting up a bank account is a fundamental step towards managing
              your finances and accessing various banking services when moving
              to a new place. A banking service that assists individuals in
              opening an account provides a convenient and efficient process for
              establishing a banking relationship and accessing the benefits of
              modern banking.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={house} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 font_ab text-center">
              Housing
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              Moving to a new place can be an exciting yet challenging
              experience, and a housing service that assists individuals in the
              process can make it smoother and more convenient. This service
              provide support and resources to help individuals find, secure,
              and transition into their new home, whether it's renting an
              apartment or a house when relocating to a new city.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={buspass} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 font_ab text-center ">
              Bus Pass
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              Whether you're a student embarking on an academic adventure or a
              professional venturing into new work opportunities, having a
              reliable mode of transportation is paramount. This is where our
              dedicated team of agents steps in to ensure your travel experience
              is seamless and stress-free. A bus pass will help you with all
              travel needs.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={healthcard} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 font_ab text-center">
              Health Card
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              The adage "prevention is better than cure" holds true, and a
              health card acts as a shield against unforeseen health issues. Our
              agent will help you aquire the health card a powerful tool that
              not only offers financial security but also grants you access to
              timely medical care ensuring that you and your loved ones are
              prepared for any health-related emergency.
            </p>
          </div>
          <div className="bg-white border-2 px-5 py-10 rounded-xl  ">
            <div className="flex items-center justify-center">
              <img src={phone} alt="" className="w-16 h-16 " />
            </div>
            <h1 className="text-3xl font-semibold text-pr py-7 pl-5 font_ab text-center">
              Mobile/Sim Issue
            </h1>
            <p className=" text-[#747474] px-5 font_ab">
              Our team of experienced agents is dedicated to providing
              assistance for all your mobile needs, whether it's acquiring SIM
              cards or selecting the perfect mobile phone. With their knowledge
              and expertise, our agents are committed to guiding you through
              every step, ensuring that you make informed decisions that align
              with your requirements.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 pb-20 mx-5 lg:mx-0">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="text-3xl text-[#23314C] text-center font-bold font_ab">
            Contact Us
          </h1>
          <div className="mx-auto lg:max-w-7xl mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="bg-white border-2 px-4 py-4 outline-none rounded-lg text-lg w-full"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="E-mail"
              className="bg-white border-2 px-4 py-4 outline-none rounded-lg text-lg w-full"
              required
            />
            <textarea
              name="message"
              className="bg-white border-2 lg:col-span-2 px-4 py-4 outline-none rounded-lg text-lg w-full"
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
            <div className="lg:col-span-2 flex items-center justify-end">
              <Button
                type="submit"
                value="Send"
                variant="contained"
                sx={{
                  color: "#ffffff",
                  bgcolor: "#6D81FC",
                  textTransform: "none",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
          <ToastContainer
            toastStyle={toastStyle}
            position="top-right"
            autoClose={5000}
            hideProgressBar
            closeOnClick
            pauseOnHover
            closeButton
            progressStyle={{ background: "#6d81fe" }} // Change the color of the tick sign here
            progressClassName={"custom-progress-bar"}
            icon={false}
          />
        </form>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
