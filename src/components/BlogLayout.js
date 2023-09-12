import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/head-logo-hd.png";
import nav from "../assets/nav.svg";
import { motion } from "framer-motion";
import close from "../assets/close.svg";
import { useNavigate } from "react-router-dom";
import logor from "../assets/logo-round.webp";
import divid from "../assets/divider.svg";
const BlogLayout = ({ children }) => {
  const [popup, setPop] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(!popup);
  };
  const navigateSection = (section) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);
      const offset = 100; // Offset for fixed header or navbar
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <div>
      <section
        id="nav"
        className="flex fixed backdrop-blur-xl w-full top-0 bg-white/90 topppp justify-center md:justify-between p-6 lg:p-4 items-center"
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            navigateSection("");
          }}
        >
          <img
            className="h-[1rem] ml-0 lg:ml-4 object-contain lg:h-[2rem]"
            alt=""
            src={logo}
          />
        </div>
        <div className="pc hidden lg:visible text-black/60 font-medium text-md flex lg:gap-10">
          <div
            onClick={() => {
              navigateSection("about");
            }}
            className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
          >
            About
          </div>
          {/*      <Link
                to="services"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                Services
              </Link> */}

          <div
            onClick={() => {
              navigateSection("token");
            }}
            className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
          >
            Token
          </div>
          <div
            onClick={() => {
              navigateSection("roadmap");
            }}
            className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
          >
            Roadmap
          </div>
          <div
            onClick={() => {
              navigateSection("Goldpaper");
            }}
            className="cursor-pointer hover:text-yellow-500 transition-all duration-500 ease-in-out "
          >
            Goldpaper
          </div>
          <div
            onClick={() => {
              navigateSection("faq");
            }}
            className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
          >
            FAQ
          </div>
          <div
            onClick={() => {
              navigateSection("team");
            }}
            className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
          >
            Team
          </div>
          <div
            onClick={() => {
              navigateSection("blog");
            }}
            className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
          >
            Blog
          </div>
        </div>
        <a href="https://app.brit.gold/register">
          <button className="rounded-lg pc px-6 py-4 text-white mr-4 font-medium text-sm grad">
            Join Brit World
          </button>
        </a>
        <div onClick={handleClickOpen} className="mob h-full fixed right-8">
          <img onClick={handleClickOpen} alt="" src={nav} className="w-6" />
          {popup ? (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, ease: "linear" }}
              onClick={closePopup}
              className="fixed h-screen w-[70vw] shad drop-shadow-xl right-0 backdrop-blur-lg bg-white/80 toppp"
            >
              <div className="w-full h-full px-16 pt-8 leading-loose absolute flex flex-col items-end gap-4 backdrop-blur-lg bg-white/80 toppp">
                <img
                  onClick={closePopup}
                  alt=""
                  src={close}
                  className="w-8 mb-3"
                />
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("home");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Home
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("about");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  About
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("services");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Services
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("token");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Token
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("apps");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Apps
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("roadmap");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Roadmap
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("Goldpaper");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Goldpaper
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("faq");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  FAQ
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("team");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Team
                </div>
                <div
                  onClick={() => {
                    closePopup();
                    navigateSection("blog");
                  }}
                  className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out"
                >
                  Blog
                </div>

                <a href="https://app.brit.gold/register">
                  <button className="rounded-lg absolute bottom-8 centerh w-10/12 px-6 py-4 text-white font-medium text-sm grad">
                    Join Brit World
                  </button>
                </a>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      </section>
      {children}
      <section
        name="contact"
        id="contact"
        className="grad relative mt-12 h-screen"
      >
        <img
          alt=""
          src={divid}
          className="absolute top-0 md:-top-[1px] rotate-[180deg] w-screen"
        />
        <img
          alt=""
          src={logor}
          className="absolute top-4 left-4 w-[10rem] pc "
        />
        <div className="flex w-full md:w-[70%] justify-center flex-wrap md:flex-nowrap h-full m-auto">
          <div className=" text-center mt-[14%] md:mt-[20%] lg:text-left lg:w-[70%] m-auto text-white">
            <p className="text-xs text-blue-200">▽ CONTACT US</p>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className=" lg:w-[60%] mt-4 font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Get in Touch
            </motion.h1>
            <p className="text-white/60 text-sm mt-4  leading-loose font-light">
              The Solus Organisation Ltd
              <br /> Registered in the UK <br />
              www.solus.org and www.brit.gold
              <br /> Email: nick@solus.org
              <br />
              Tel: +44 (0) 333 4444 333 <br /> +1 (234) 56789
              <br /> +1 987 654 3210
            </p>
          </div>

          <div className=" flex gap-6 flex-col mt-8 md:mt-[20%] w-10/12 md:w-[60%]">
            <input
              className="p-3 bg-white/10 focus:bg-white hover:bg-white transition-all duration-500 ease-in-out  outline-none rounded-full px-5"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-3 bg-white/10 focus:bg-white hover:bg-white transition-all duration-500 ease-in-out  outline-none rounded-full px-5"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-3 pt-5 pb-12 md:pb-24 rounded-2xl bg-white/10 focus:bg-white hover:bg-white transition-all duration-500 ease-in-out  outline-none rounded-full px-5"
              type="text"
              placeholder="Message"
            />
            <button
              className="p-3 bg-white rounded-2xl px-5 hover:bg-blue-100 transition-all duration-500 ease-in-out "
              type="submit"
            >
              {" "}
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogLayout;
