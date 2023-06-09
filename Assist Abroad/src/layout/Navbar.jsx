import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [open, setOpen] = useState(false);



  return (
    <div className=" w-full fixed top-0 left-0 z-50 shadow-sm bg-white ">
     <div className="lg:max-w-7xl px-5 lg:px-0 w-full  mx-auto">
          <div className="lg:grid grid-cols-2 hidden">
            <div className=" w-full">
              <div className="py-5">
                <Link to="/" className="text-pr text-4xl font_ab ">
                Assist Abroad
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-10 justify-end text-gray-500">
                <Link to="/home" className=" text-[#23314C] hover:text-pr text-lg font_ab">
                Home
                </Link>
                <div onClick={()=>{
                  window.scrollTo(0,470)
                }} className=" text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab">
                Services
                </div>
            
                <div onClick={()=>{
                  window.scrollTo(0,1370)
                }} className=" text-[#23314C] cursor-pointer hover:text-pr text-lg font_ab">
                 Contact
                </div>
               
            
                <Link to="/" className=" text-[#23314C] hover:text-pr text-lg font_ab">
                Sign In
                </Link>
                <Link to='/register' className=" text-pr border border-pr px-7 text-lg hover:bg-pr hover:text-white rounded-md py-1 font_ab">
                Join
                </Link>
            
              </div>
       
          </div>
          {/* mobile version */}
          <div className=" lg:hidden w-full">
            {/* <div className=" w-full pr-7 px-3 flex items-center justify-between white-4"> */}
            <div className=" w-full  flex items-center justify-between white-4">
                <div className=" flex items-center" >
              {/* <div className="py-4">
                <Link to="/" className="text-pr text-2xl">
                Assist Abroad
                </Link>
              </div> */}
              {open === false ? (
                <FaBars
                  onClick={() => setOpen(true)}
                  className="w-6 h-6 cursor-pointer text-pr"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setOpen(false)}
                  className="w-6 h-6 cursor-pointer text-pr"
                />
              )}
              <div className="py-4">
                <Link to="/" className="text-pr ml-2  text-2xl">
                Assist Abroad
                </Link>
              </div>
              </div>


              <div className=" flex items-center" >
              <div><Link to="/register" className=" text-pr border border-pr  px-6 mt-2 rounded-md py-1.5 font_ab">
                Join
                </Link></div>
                </div>
            </div>


            
            {open && (
              <div className=" grid grid-cols-1 bg-white  shadow-md px-3 items-center gap-4 justify-center text-gray-500 pb-5">
                    <>
                    <Link to="/home" className=" text-[#23314C] hover:text-pr font_ab">
                Home
                </Link>
               
            
                <div onClick={()=>{
                  window.scrollTo(0,470)
                  setOpen(false)
                }}  className=" text-[#23314C] cursor-pointer hover:text-pr font_ab">
                Services
                </div>
                <div onClick={()=>{
                  window.scrollTo(0,3270)
                  setOpen(false)
                }}  className=" text-[#23314C] cursor-pointer hover:text-pr font_ab">
                Contact
                </div>
            
                <Link to="/" className=" text-[#23314C] hover:text-pr font_ab">
                Sign In
                </Link>
             <div>
             {/* <Link to="/sign-up" className=" text-pr border border-pr  px-10 mt-2 rounded-md py-1 font_ab">
                Join
                </Link> */}
             </div>
            
                  </>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Navbar;
