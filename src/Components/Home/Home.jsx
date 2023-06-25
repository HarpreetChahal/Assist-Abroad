import React, { useRef } from "react";
import Navbar from "../../layout/Navbar";
import hero from "/src/Assets/HOME9.png";
import love from "/src/Assets/love.png";
import rocket from "/src/Assets/rocket.png";
import thunder from "/src/Assets/thunder.png";
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
              content here&apos; making it look like readable English.
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
              content here&apos; making it look like readable English.
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
              content here&apos; making it look like readable English.
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
              content here&apos; making it look like readable English.
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
              content here&apos; making it look like readable English.
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
              content here&apos; making it look like readable English.
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
