import logo from "../assets/head-logo.webp";
import logor from "../assets/logo-round.webp";
import pay from "../assets/div.webp";
import img1 from "../assets/img-1.webp";
import img2 from "../assets/img-2.webp";
import mob from "../assets/mobile.webp";
import shp1 from "../assets/shp01.svg";
import shp2 from "../assets/shp02.svg";
import wrk1 from "../assets/wrk-1.svg";
import wrk2 from "../assets/wrk-2.svg";
import wrk3 from "../assets/wrk-3.svg";
import divid from "../assets/divider.svg";
import pdf from "../assets/pdf.svg";

import fb from "../assets/team/facebook.svg";
import lin from "../assets/team/linkedin.svg";
import ggl from "../assets/team/google-plus.svg";
import nav from "../assets/nav.svg";
import close from "../assets/close.svg";

import crd1 from "../assets/cards/crd (1).jpg";
import crd2 from "../assets/cards/crd (2).jpg";
import crd3 from "../assets/cards/crd (1).png";

import prtnr1 from "../assets/partners/partner (1).png";
import prtnr2 from "../assets/partners/partner (2).png";
import prtnr3 from "../assets/partners/partner (3).png";
import prtnr4 from "../assets/partners/partner (4).png";
import prtnr5 from "../assets/partners/partner (5).png";

import gp from "../assets/gp.png";
import as from "../assets/as.png";
import av1 from "../assets/team/ava (1).png";
import av2 from "../assets/team/ava (2).png";
import av3 from "../assets/team/ava (3).png";
import av4 from "../assets/team/ava (4).png";
import av5 from "../assets/team/ava (5).png";
import cmp1 from "../assets/company/Logo_1.png";
import cmp2 from "../assets/company/Logo_2.png";
import cmp3 from "../assets/company/Logo_3.png";
import cmp4 from "../assets/company/Logo_4.png";
import cmp5 from "../assets/company/Logo_5.png";
import cmp6 from "../assets/company/Logo_6.png";

import fe1 from "../assets/features/feat01.webp";
import fe2 from "../assets/features/feat02.webp";
import fe3 from "../assets/features/feat03.webp";
import fe4 from "../assets/features/feat04.webp";
import fe5 from "../assets/features/feat05.webp";
import fe6 from "../assets/features/feat06.webp";
import coin1 from "../assets/coin1.webp";
import coin2 from "../assets/coin2.webp";

import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import React, { useState, useEffect } from "react";

const Home = () => {

  const [popup, setPop] = useState(false);

  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(!popup);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const bubble = {
    up: { y: 0 },
    down: { y: [-15, 0, -15] },
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          key="hom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 3 } }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/**
    import vid from '../assets/vid.webp' */}
          <section
            id="nav"
            className="flex fixed backdrop-blur-xl w-full top-0 bg-white/90 topppp justify-center md:justify-between p-6 lg:p-4 items-center"
          >
            <Link className="cursor-pointer" to="home">
              <img
                className="h-[1rem] ml-0 lg:ml-4 object-contain lg:h-[1.5rem]"
                alt=""
                src={logo}
              />
            </Link>
            <div className="pc hidden lg:visible text-black/60 font-medium text-md flex lg:gap-10">
              <Link
                to="about"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                About
              </Link>
              <Link
                to="services"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                Services
              </Link>
              
              <Link
                to="token"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                Token
              </Link>
              <Link
                to="roadmap"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                Roadmap
              </Link>
              <Link
                to="Goldpaper"
                className="cursor-pointer hover:text-yellow-500 transition-all duration-500 ease-in-out "
              >
                Goldpaper
              </Link>
              <Link
                to="faq"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                FAQ
              </Link>
              <Link
                to="team"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                Team
              </Link>
              <Link
                to="blog"
                className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
              >
                Community
              </Link>
            </div>
            <a href='/login'>
                <button className="rounded-lg pc px-6 py-4 text-white mr-4 font-medium text-sm grad">
                Join Brit World
                </button>
            </a>
            <div
              onClick={handleClickOpen}
              className="mob h-full fixed right-8"
            >
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
                    <Link
                      onClick={closePopup}
                      to="home"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Home
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="about"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      About
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="services"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Services
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="token"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Token
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="apps"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Apps
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="roadmap"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Roadmap
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="Goldpaper"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Goldpaper
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="faq"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      FAQ
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="team"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Team
                    </Link>
                    <Link
                      onClick={closePopup}
                      to="blog"
                      className="cursor-pointer hover:text-blue-800 transition-all duration-500 ease-in-out "
                    >
                      Blog
                    </Link>
                    <a href='/login'>
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

          <section name="home" className="mt-[15%] lg:mt-[8%] relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-16 text-center font-black text-[2rem] md:text-[2.8rem] leading-[2.3rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span><br/>
              <span className="font-[100] text-[1.7rem] md:text-[2.7rem] text-black/60">
              Just Entered the Real World
              </span>
            </motion.h1>

            <motion.div
              variants={container}
              className="pc botttt transition-all duration-500 ease-in-out "
            >
              <div className="scale-[50%] md:scale-[100%] md:w-[400px] h-[400px] grad absolute rounded-full drop-shadow-2xl absolute top-12 -left-[5%]">
                <img className="m-auto topppp mt-14 " alt="" src={logor} />
              </div>
              <motion.img
                src={coin2}
                variants={bubble}
                initial="up"
                animate="down"
                viewport={{ once: false }}
                transition={{
                  repeatType: "loop",
                  ease: "linear",
                  type: "tween",
                  repeat: Infinity,
                  duration: 4,
                }}
                className="scale-[50%] md:scale-[100%] md:w-[150px] h-[150px] bg-white rounded-full drop-shadow-2xl absolute bottom-[0%] left-[16%]"
              ></motion.img>
              <motion.img
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2 }}
                className="absolute right-0 w-[25%] top-[10%] bottt"
                alt=""
                src={shp1}
              />
              <motion.img
                src={coin1}
                variants={bubble}
                initial="up"
                animate="down"
                viewport={{ once: false }}
                transition={{
                  repeatType: "loop",
                  ease: "linear",
                  type: "tween",
                  repeat: Infinity,
                  duration: 4,
                }}
                className="scale-[50%] md:scale-[100%] md:w-[150px] h-[150px] bg-white rounded-full drop-shadow-2xl absolute -bottom-[68%] right-[12%]"
              ></motion.img>
            </motion.div>

            <div className="m-auto w-full mt-16 flex gap-3 items-center lg:gap-8 flex-col lg:flex-row justify-center">
              <button className="py-4 px-8 grad rounded-md w-11/12 lg:w-[15rem] hover:drop-shadow-xl transition-all duration-500 ease-in-out text-white shad">
                Buy Tokens 45% Off
              </button>
              <button className="py-4 px-8 bg-yellow-500 w-11/12 lg:w-[15rem] hover:drop-shadow-xl transition-all duration-500 ease-in-out rounded-md text-white shad">
                Goldpaper
              </button>
            </div>
            {/*<img className="m-auto mt-12 noselect" alt="" src={pay} />*/}
            <form className="mt-12 m-auto flex flex-col gap-2">
              <h1 className="mt-4 text-center font-semibold text-blue-900">Track Your Brit.Gold</h1>
              <div className="flex -gap-4 w-11/12 lg:w-[36%] m-auto mt-4 justify-center items-center">
                <input type='text' placeholder="Enter your Unique ID" className="p-4 px-6 border-solid border-2 rounded-xl outline-none border-blue-400 w-11/12 lg:w-[32rem] m-auto" />
                <button type="submit" className="py-4 px-8 -ml-3 grad rounded-md m-auto lg:w-[15rem] hover:drop-shadow-xl transition-all duration-500 ease-in-out text-white shad" >Verify</button>
              </div>
            </form>

          </section>

          {/*<img className='m-auto w-11/12 mt-12 drop-shadow-xl shad hover:p-4 bg-white/20 backdrop-blur-xl hover:scale-[102%] transition-all duration-700 ease-in-out rounded-lg  md:w-1/2' alt='' src={vid} />*/}

          <h1 className="text-black/90 w-10/12 lg:w-[60%] my-24 m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">
          <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span> Just Entered
            <br />
            <span className="font-[100] text-[1.7rem] md:text-[2.7rem] text-black/60">
              the Real World
            </span>
          </h1>

          <section
            name="about"
            className="mt-8 md:mt-16 relative w-full lg:w-10/12  gap-8 px-3 lg:px-8 m-auto flex flex-col-reverse lg:flex-row toppp"
          >
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="p-6 w-11/12 m-auto object-contain"
              alt=""
              src={img1}
            />
            <div className="">
              <p className="text-xs pt-24 w-10/12 m-auto text-[#303C8B]">
                ▽ DECENTRALISED ECONOMY
              </p>
              <motion.h1
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="text-black/90 w-10/12 m-auto pt-6 font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
              >
                <a
                  className="transition-all duration-500 ease-in-out hover:text-blue-700"
                  href="#about"
                >
                  A banking platform that <br />
                  <span className="font-[100] text-[1.7rem] md:text-[2.4rem] text-black/60">
                    enables developer solutions
                  </span>
                </a>
              </motion.h1>
              <p className="text-black/50 w-10/12 mt-4  m-auto text-lg ">
                Spend real fights effective anything extra by leading.
                Mouthwatering leading how real formula also locked-in have can
                mountain thought. Jumbo plus shine sale.
              </p>
              <div className="w-10/12 m-auto mt-6 md:mt-10">
                <div className="flex gap-3 p-2 justify-start items-start">
                  <div className="mt-2 ">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z"
                        fill="#0008B2"
                      />
                      <path
                        d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z"
                        fill="#0008B2"
                      />
                    </svg>
                  </div>
                  <p className="text-black/80 ">
                    <strong>Modular structure </strong>enabling easy
                    implementation for different softwares
                  </p>
                </div>
                <div className="flex gap-3 p-2 justify-start items-start">
                  <div className="mt-2">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z"
                        fill="#0008B2"
                      />
                      <path
                        d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z"
                        fill="#0008B2"
                      />
                    </svg>
                  </div>
                  <p className="text-black/80 ">
                    <strong>Advanced payment </strong>and processing
                    technologies, fine-tuned from more than 3 years of
                    development testing
                  </p>
                </div>
                <div className="flex gap-3 p-2 justify-start items-start">
                  <div className="mt-2">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z"
                        fill="#0008B2"
                      />
                      <path
                        d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z"
                        fill="#0008B2"
                      />
                    </svg>
                  </div>
                  <p className="text-black/80 ">
                    <strong>Unified AppStore </strong>for retail cryptocurrency
                    solutions with a Crypterium products audience
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 md:mt-16 relative w-full gap-8 px-3 lg:px-12 flex flex-col-reverse lg:flex-row-reverse toppp">
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="p-6 w-11/12 m-auto object-contain"
              alt=""
              src={img2}
            />
            <div className="">
              <p className="text-xs pt-24 w-10/12 m-auto text-[#303C8B]">
                ▽ ABOUT BRIT GOLD
              </p>
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2 }}
                className="text-black/90 w-10/12 pt-6 m-auto font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
              >
                <a
                  className="transition-all duration-500 ease-in-out hover:text-blue-700"
                  href="#about"
                >
                  <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span> Theme <br />
                  <span className="font-[100] text-[1.7rem] md:text-[2.4rem] text-black/60">
                    is the best for your ICO
                  </span>
                </a>
              </motion.h1>
              <p className="text-black/50 w-10/12 mt-4  m-auto text-lg ">
                Spend real fights effective anything extra by leading.
                Mouthwatering leading how real formula also locked-in have can
                mountain thought. Jumbo plus shine sale.
              </p>

              <div className="w-10/12 m-auto mt-6 md:mt-10">
                <div className="flex gap-3 p-2 justify-start items-start">
                  <div className="mt-2 ">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z"
                        fill="#0008B2"
                      />
                      <path
                        d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z"
                        fill="#0008B2"
                      />
                    </svg>
                  </div>
                  <p className="text-black/80 ">
                    Mouthwatering leading how real formula also
                  </p>
                </div>
                <div className="flex gap-3 p-2 justify-start items-start">
                  <div className="mt-2">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z"
                        fill="#0008B2"
                      />
                      <path
                        d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z"
                        fill="#0008B2"
                      />
                    </svg>
                  </div>
                  <p className="text-black/80 ">
                    Locked-in have can mountain thought
                  </p>
                </div>
                <div className="flex gap-3 p-2 justify-start items-start">
                  <div className="mt-2">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z"
                        fill="#0008B2"
                      />
                      <path
                        d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z"
                        fill="#0008B2"
                      />
                    </svg>
                  </div>
                  <p className="text-black/80 ">
                    Locked-in have can mountain thought
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section name="services" className="mt-8 md:mt-16 relative">
            <p className="text-xs pt-24 w-10/12 text-center m-auto text-[#303C8B]">
              ▽ FEATURES BRIT GOLD
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-6 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span> Features
            </motion.h1>

            <div className="w-full md:w-[85%] m-auto scale-[90%] md:scale-[85%] mt-12 justify-center flex flex-wrap gap-4">
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]">
                <img
                  className=" object-contain p-2 shad1 rounded-full"
                  alt=""
                  src={fe1}
                />
                <div className="text-center md:text-left ">
                  <h3 className=" font-bold text-2xl my-2">
                    General ecosystem
                  </h3>
                  <p className="text-black/60">
                    Surf sardine mooneye, sawtooth eel trout-perch, Death Valley
                    pupfish zebra tilapia medaka golden shiner, danio Black
                    angelfish sandperch, whiff.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]">
                <img
                  className=" object-contain p-2 shad1 rounded-full"
                  alt=""
                  src={fe2}
                />
                <div className="text-center md:text-left ">
                  <h3 className=" font-bold text-2xl my-2">
                    General ecosystem
                  </h3>
                  <p className="text-black/60">
                    Surf sardine mooneye, sawtooth eel trout-perch, Death Valley
                    pupfish zebra tilapia medaka golden shiner, danio Black
                    angelfish sandperch, whiff.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]">
                <img
                  className=" object-contain p-2 shad1 rounded-full"
                  alt=""
                  src={fe3}
                />
                <div className="text-center md:text-left ">
                  <h3 className=" font-bold text-2xl my-2">
                    Exchange for other crypto currency
                  </h3>
                  <p className="text-black/60">
                    Surf sardine mooneye, sawtooth eel trout-perch, Death Valley
                    pupfish zebra tilapia medaka golden shiner, danio Black
                    angelfish sandperch, whiff.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]">
                <img
                  className=" object-contain p-2 shad1 rounded-full"
                  alt=""
                  src={fe4}
                />
                <div className="text-center md:text-left ">
                  <h3 className=" font-bold text-2xl my-2">
                    Protection against fraud
                  </h3>
                  <p className="text-black/60">
                    Surf sardine mooneye, sawtooth eel trout-perch, Death Valley
                    pupfish zebra tilapia medaka golden shiner, danio Black
                    angelfish sandperch, whiff.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]">
                <img
                  className=" object-contain p-2 shad1 rounded-full"
                  alt=""
                  src={fe5}
                />
                <div className="text-center md:text-left ">
                  <h3 className=" font-bold text-2xl my-2">
                    Transfer to Debit card
                  </h3>
                  <p className="text-black/60">
                    Surf sardine mooneye, sawtooth eel trout-perch, Death Valley
                    pupfish zebra tilapia medaka golden shiner, danio Black
                    angelfish sandperch, whiff.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]">
                <img
                  className=" object-contain p-2 shad1 rounded-full"
                  alt=""
                  src={fe6}
                />
                <div className="text-center md:text-left ">
                  <h3 className=" font-bold text-2xl my-2">Anonymity</h3>
                  <p className="text-black/60">
                    Surf sardine mooneye, sawtooth eel trout-perch, Death Valley
                    pupfish zebra tilapia medaka golden shiner, danio Black
                    angelfish sandperch, whiff.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section name="token" className="relative mt-12">
            <p className="text-xs md:pt-24 w-10/12 text-center m-auto text-[#303C8B]">
              ▽ WORKING
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-6 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Working of <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span>{" "}
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={container}
              className="flex flex-wrap scale-[100%] md:scale-[95%] gap-4 md:gap-8  m-auto w-full md:w-10/12 justify-center items-start mt-8 md:mt-16"
            >
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">Blockchain</h2>
                <img className="p-3 shad1 rounded-full" alt="" src={wrk1} />
                <hr />
                <p className="text-sm text-black/60">
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </p>
              </motion.div>
              <hr className="rotate-[90deg] pc" />
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">Indefication</h2>
                <img className="p-3 shad1 rounded-full" alt="" src={wrk3} />
                <hr />
                <p className="text-sm text-black/60">
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </p>
              </motion.div>
              <hr className="rotate-[90deg] pc" />
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">Make payments</h2>
                <img className="p-3 shad1 rounded-full" alt="" src={wrk2} />
                <hr />
                <p className="text-sm text-black/60">
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </p>
              </motion.div>
              <hr className="rotate-[90deg] pc" />
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">Buy or sell orders</h2>
                <img className="p-3 shad1 rounded-full" alt="" src={wrk3} />
                <hr />
                <p className="text-sm text-black/60">
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </p>
              </motion.div>
            </motion.div>
          </section>

          <section name="apps" className="mt-8 md:mt-24 relative">
            <p className="absolute mob top-8 m-auto left-8 md:left-0 bottt text-xs text-[#303C8B]">
              ▽ APPS
            </p>
            <p className="absolute pc top-8 m-auto ml-4 left-16 bottt  text-xs text-[#303C8B]">
              ▽ APPS
            </p>
            <div className="relative w-full h-auto md:h-[70vh] overflow-hidden">
              <img
                className="absolute bottt pc right-0 w-1/2"
                alt=""
                src={shp2}
              />
              <div className="flex flex-col justify-center ml-[8%] md:ml-[6%]">
                <motion.h1
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2 }}
                  className="text-black/90 w-11/12 lg:w-[40%] pt-16 font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
                >
                  <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span> App for ICO Platform
                </motion.h1>
                <p className="text-black/50 w-11/12 lg:w-[50%]  mt-4  text-lg ">
                  JavaScript virtual machines (VMs) and platforms built upon
                  them have also increased the popularity of JavaScript for
                  server-side web applications. On the client side, JavaScript
                </p>
                <div className="flex w-10/12 gap-3 md:gap-6 mt-8">
                  <motion.img
                src={logor}
                    variants={bubble}
                    initial="up"
                    animate="down"
                    viewport={{ once: false }}
                    transition={{
                      repeatType: "loop",
                      ease: "linear",
                      type: "tween",
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className="scale-[50%] pc md:scale-[100%] md:w-[150px] h-[150px] bg-white rounded-full drop-shadow-2xl absolute top-[25%] right-[12%]"
                  ></motion.img>
                  <img className="w-[45%] md:w-auto" alt="" src={gp} />
                  <img className="w-[45%] md:w-auto" alt="" src={as} />
                </div>
                <img
                  className="absolute pc -bottom-4 right-[20%] w-1/4"
                  alt=""
                  src={mob}
                />
              </div>
            </div>
          </section>

          <section name="roadmap" className="relative ">
            <p className="text-xs pt-24 w-10/12 text-center m-auto text-[#303C8B]">
              ▽ ROADMAP
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-6 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Roadmap
            </motion.h1>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="flex flex-wrap scale-[100%] md:scale-[95%] gap-4 md:gap-8  m-auto w-full md:w-10/12 justify-center items-start mt-6 md:mt-16"
            >
              <motion.div className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4">
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Performing Closed Beta testing, launching a pre-ICO campaing.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[35px] h-[35px] border-white/80 border-solid border-[10px] rounded-full bg-red-400">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black">
                  Issuing JCR tokens into the Ethereum blockchain.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Preparing for Open Beta launch. Basic Employment Smart
                  Contracts Templates Development.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Invoicing & billing system implementation. Channel partner
                  program launch. 200+ companies in Open Beta.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Running of the crowdfunding campaign, 500+ companies
                  subscribed for Open Beta.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Performing Closed Beta testing, launching a pre-ICO campaing.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Issuing JCR tokens into the Ethereum blockchain.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Preparing for Open Beta launch. Basic Employment Smart
                  Contracts Templates Development.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Invoicing & billing system implementation. Channel partner
                  program launch. 200+ companies in Open Beta.
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
              >
                <h2 className="font-semibold">July 2023</h2>
                <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-blue-200">
                  <br />
                </div>
                <hr />
                <p className="text-sm text-black/60">
                  Running of the crowdfunding campaign, 500+ companies
                  subscribed for Open Beta.
                </p>
              </motion.div>
            </motion.div>
          </section>

          <section name="Goldpaper" className="relative mt-12">
            <p className="text-xs pt-24 w-10/12 text-center m-auto text-[#303C8B]">
              ▽ DOCUMENTS
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-6 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Documents of <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span>{" "}
            </motion.h1>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-12 md:gap-12 toppp items-center w-full"
            >
              <motion.div
                variants={item}
                className="flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]"
              >
                <img className="w-[2rem]" alt="" src={pdf} />
                <p>Terms & Conditions</p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]"
              >
                <img className="w-[2rem]" alt="" src={pdf} />
                <p>Goldpapers</p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]"
              >
                <img className="w-[2rem]" alt="" src={pdf} />
                <p>Privacy Policy</p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]"
              >
                <img className="w-[2rem]" alt="" src={pdf} />
                <p>Business Profile</p>
              </motion.div>
            </motion.div>
          </section>

          <section name="faq" className=" ">
            <p className="text-xs w-10/12 text-center pt-24 m-auto text-[#303C8B]">
              ▽ FAQs
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-6 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              FAQs{" "}
            </motion.h1>

            <div className="mt-[2rem] p-4 px-4 md:px-12 w-11/12 md:w-[60%] scale-[100%] md:scale-[110%] my-24 m-auto rale rounded-2xl">
              <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white shad1 px-4 md:px-8 bottt mix-blend-screen">
                <Accordion className="scale-x-[110%] p-2">
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="text-blue-200 hover:text-black transition-all duration-500 ease-in-out ">
                      Accordion 1
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      JavaScript is also used in environments that aren't
                      web-based, such as PDF documents, site-specific browsers,
                      and desktop widgets. Newer and faster JavaScript virtual
                      machines (VMs) and platforms built upon them have also
                      increased the popularity of JavaScript for server-side web
                      applications. On the client side, JavaScript has been
                      traditionally implemented as an interpreted language, but
                      more recent browsers perform just-in-time compilation.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <br />
              <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white shad1 px-4 md:px-8 bottt mix-blend-screen">
                <Accordion className="scale-x-[110%] p-2">
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="text-blue-200 hover:text-black transition-all duration-500 ease-in-out ">
                      Accordion 2
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      JavaScript is also used in environments that aren't
                      web-based, such as PDF documents, site-specific browsers,
                      and desktop widgets. Newer and faster JavaScript virtual
                      machines (VMs) and platforms built upon them have also
                      increased the popularity of JavaScript for server-side web
                      applications. On the client side, JavaScript has been
                      traditionally implemented as an interpreted language, but
                      more recent browsers perform just-in-time compilation.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <br />
              <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white shad1 px-4 md:px-8 bottt mix-blend-screen">
                <Accordion className="scale-x-[110%] p-2">
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="text-blue-200 hover:text-black transition-all duration-500 ease-in-out ">
                      Accordion 3
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      JavaScript is also used in environments that aren’t
                      web-based, such as PDF documents, site-specific browsers,
                      and desktop widgets. Newer and faster JavaScript virtual
                      machines (VMs) and platforms built upon them have also
                      increased the popularity of JavaScript for server-side web
                      applications. On the client side, JavaScript has been
                      traditionally implemented as an interpreted language, but
                      more recent browsers perform just-in-time compilation.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <br />
              <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white shad1 px-4 md:px-8 bottt mix-blend-screen">
                <Accordion className="scale-x-[110%] p-2">
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="text-blue-200 hover:text-black transition-all duration-500 ease-in-out ">
                      Accordion 4
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      JavaScript is also used in environments that aren't
                      web-based, such as PDF documents, site-specific browsers,
                      and desktop widgets. Newer and faster JavaScript virtual
                      machines (VMs) and platforms built upon them have also
                      increased the popularity of JavaScript for server-side web
                      applications. On the client side, JavaScript has been
                      traditionally implemented as an interpreted language, but
                      more recent browsers perform just-in-time compilation.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </section>

          <section name="team" className="grad pb-12 relative">
            <img alt="" src={divid} className="absolute bottom-0 w-screen" />
            <div className=" text-center lg:text-left lg:w-[70%] m-auto text-white">
              <p className="text-xs pt-12 lg:pt-24 text-blue-200">▽ TEAM</p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2 }}
                className=" lg:w-[60%] mt-4 font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
              >
                Awesome Team
              </motion.h1>
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={container}
                className="flex flex-wrap justify-center lg:justify-between items-center  m-auto gap-8 lg:w-[70%] my-8"
              >
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av1} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av2} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av3} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av4} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av5} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av1} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av2} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av4} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av3} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex flex-col p-4 gap-2 justify-center items-center w-[10rem]"
                >
                  <img alt="" src={av5} />
                  <h2 className="font-semibold text-white text-lg">John Doe</h2>
                  <p className=" text-white/60 font-thin text-sm -mt-2">
                    Designer
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a href="/">
                      <img className="w-6" alt="" src={fb} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={lin} />
                    </a>
                    <a href="/">
                      <img className="w-6" alt="" src={ggl} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section name="media">
            <p className="text-xs w-10/12 text-center pt-24 m-auto text-[#303C8B]">
              ▽ Media
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-6 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Company in Media
            </motion.h1>

            <div className="flex flex-wrap m-auto scale-[95%] md:scale-[90%] gap-12 justify-center items-center">
              <div className="flex p-8 py-16 bg-white drop-shadow-2xl flex-col justify-center items-center gap-6 w-10/12 md:w-[23rem] h-[23rem] ">
                <img className="w-[8rem]" alt="" src={cmp1} />
                <p className=" text-black/60 text-center ">
                  COO of KrowdMentor, a strategic investment and advisory firm
                  as well as Under Development Office, a software development
                  company focused on
                </p>
              </div>
              <div className="flex p-8 py-16 bg-white drop-shadow-2xl flex-col justify-center items-center gap-6 w-10/12 md:w-[23rem] h-[23rem] ">
                <img className="w-[8rem]" alt="" src={cmp2} />
                <p className=" text-black/60 text-center ">
                  COO of KrowdMentor, a strategic investment and advisory firm
                  as well as Under Development Office, a software development
                  company focused on
                </p>
              </div>
              <div className="flex p-8 py-16 bg-white drop-shadow-2xl flex-col justify-center items-center gap-6 w-10/12 md:w-[23rem] h-[23rem] ">
                <img className="w-[8rem]" alt="" src={cmp3} />
                <p className=" text-black/60 text-center ">
                  COO of KrowdMentor, a strategic investment and advisory firm
                  as well as Under Development Office, a software development
                  company focused on
                </p>
              </div>
              <div className="flex p-8 py-16 bg-white drop-shadow-2xl flex-col justify-center items-center gap-6 w-10/12 md:w-[23rem] h-[23rem] ">
                <img className="w-[8rem]" alt="" src={cmp4} />
                <p className=" text-black/60 text-center ">
                  COO of KrowdMentor, a strategic investment and advisory firm
                  as well as Under Development Office, a software development
                  company focused on
                </p>
              </div>
              <div className="flex p-8 py-16 bg-white drop-shadow-2xl flex-col justify-center items-center gap-6 w-10/12 md:w-[23rem] h-[23rem] ">
                <img className="w-[8rem]" alt="" src={cmp5} />
                <p className=" text-black/60 text-center ">
                  COO of KrowdMentor, a strategic investment and advisory firm
                  as well as Under Development Office, a software development
                  company focused on
                </p>
              </div>
              <div className="flex p-8 py-16 bg-white drop-shadow-2xl flex-col justify-center items-center gap-6 w-10/12 md:w-[23rem] h-[23rem] ">
                <img className="w-[8rem]" alt="" src={cmp6} />
                <p className=" text-black/60 text-center ">
                  COO of KrowdMentor, a strategic investment and advisory firm
                  as well as Under Development Office, a software development
                  company focused on
                </p>
              </div>
            </div>
          </section>

          <section name="blog">
            <p className="text-xs w-10/12 text-center pt-12 md:pt-[24] m-auto text-[#303C8B]">
              ▽ Blog
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
              className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-6 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Blog by <span className="conthrax uppercase text-blue-900 text-4xl">Brit.</span><span className="conthrax font-semibold uppercase text-yellow-500 text-4xl">Gold</span>
            </motion.h1>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={container}
              className="w-10/12 mt-12 m-auto overflow-x-scroll flex gap-6 px-4 py-8"
            >
              <motion.div
                variants={item}
                className="bg-white drop-shadow-xl pb-6 rounded-2xl w-[20rem] shrink-0"
              >
                <div className="h-[10rem] overflow-hidden w-full  rounded-tr-2xl rounded-tl-2xl">
                  <img alt="" className=" h-full w-full" src={crd1} />
                </div>
                <div className="px-6 py-2">
                  <h2 className="text-blue-200 mt-2 text-sm font-semibold">
                    Blockchain
                  </h2>
                  <h1 className="mt-3 text-black text-2xl font-bold">
                    New trends in Blockchain UIUX
                  </h1>
                  <p className=" text-black/60 mt-2">
                    COO of KrowdMentor, a strategic investment and advisory firm
                    as well as Under Development Office, a software development
                    company focused on
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className="bg-white drop-shadow-xl pb-6 rounded-2xl w-[20rem] shrink-0"
              >
                <div className="h-[10rem] overflow-hidden w-full  rounded-tr-2xl rounded-tl-2xl">
                  <img alt="" className=" h-full w-full" src={crd2} />
                </div>
                <div className="px-6 py-2">
                  <h2 className="text-blue-200 mt-2 text-sm font-semibold">
                    Blockchain
                  </h2>
                  <h1 className="mt-3 text-black text-2xl font-bold">
                    New trends in Blockchain UIUX
                  </h1>
                  <p className=" text-black/60 mt-2">
                    COO of KrowdMentor, a strategic investment and advisory firm
                    as well as Under Development Office, a software development
                    company focused on
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className="bg-white drop-shadow-xl pb-6 rounded-2xl w-[20rem] shrink-0"
              >
                <div className="h-[10rem] overflow-hidden w-full rounded-tr-2xl rounded-tl-2xl">
                  <img alt="" className=" h-full w-full" src={crd3} />
                </div>
                <div className="px-6 py-2">
                  <h2 className="text-blue-200 mt-2 text-sm font-semibold">
                    Blockchain
                  </h2>
                  <h1 className="mt-3 text-black text-2xl font-bold">
                    New trends in Blockchain UIUX
                  </h1>
                  <p className=" text-black/60 mt-2">
                    COO of KrowdMentor, a strategic investment and advisory firm
                    as well as Under Development Office, a software development
                    company focused on
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className="bg-white drop-shadow-xl pb-6 rounded-2xl w-[20rem] shrink-0"
              >
                <div className="h-[10rem] overflow-hidden w-full   rounded-tr-2xl rounded-tl-2xl">
                  <img alt="" className=" h-full w-full" src={crd1} />
                </div>
                <div className="px-6 py-2">
                  <h2 className="text-blue-200 mt-2 text-sm font-semibold">
                    Blockchain
                  </h2>
                  <h1 className="mt-3 text-black text-2xl font-bold">
                    New trends in Blockchain UIUX
                  </h1>
                  <p className=" text-black/60 mt-2">
                    COO of KrowdMentor, a strategic investment and advisory firm
                    as well as Under Development Office, a software development
                    company focused on
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={item}
                className="bg-white drop-shadow-xl pb-6 rounded-2xl w-[20rem] shrink-0"
              >
                <div className="h-[10rem] overflow-hidden w-full  rounded-tr-2xl rounded-tl-2xl">
                  <img alt="" className=" h-full w-full" src={crd2} />
                </div>
                <div className="px-6 py-2">
                  <h2 className="text-blue-200 mt-2 text-sm font-semibold">
                    Blockchain
                  </h2>
                  <h1 className="mt-3 text-black text-2xl font-bold">
                    New trends in Blockchain UIUX
                  </h1>
                  <p className=" text-black/60 mt-2">
                    COO of KrowdMentor, a strategic investment and advisory firm
                    as well as Under Development Office, a software development
                    company focused on
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section name="partners" className=" relative">
            <div className=" text-center lg:text-left lg:w-[80%] m-auto">
              <p className="text-xs pt-12 lg:pt-24 text-[#303C8B]">
                ▽ OUR FRIENDS
              </p>
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2 }}
                className=" lg:w-[60%] mt-4 font-black text-black/90 text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"
              >
                Partners
              </motion.h1>
            </div>
            <div className="flex gap-12 m-auto flex-wrap mt-12 w-[80%] justify-center md:justify-between items-center">
              <img
                className="transition-all duration-500 ease-in-out w-[40%] md:w-auto object-contain opacity-40 hover:opacity-90 "
                alt=""
                src={prtnr1}
              />
              <img
                className="transition-all duration-500 ease-in-out w-[40%] md:w-auto object-contain opacity-40 hover:opacity-90 "
                alt=""
                src={prtnr2}
              />
              <img
                className="transition-all duration-500 ease-in-out w-[40%] md:w-auto object-contain opacity-40 hover:opacity-90 "
                alt=""
                src={prtnr3}
              />
              <img
                className="transition-all duration-500 ease-in-out w-[40%] md:w-auto object-contain opacity-40 hover:opacity-90 "
                alt=""
                src={prtnr4}
              />
              <img
                className="transition-all duration-500 ease-in-out w-[40%] md:w-auto object-contain opacity-40 hover:opacity-90 "
                alt=""
                src={prtnr5}
              />
            </div>
          </section>

          <section name="contact" className="grad relative mt-12 h-screen">
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
                  523 Sylvan Ave, 5th Floor Mountain View, CA
                  <br />
                  +1 (234) 56789, +1 987 654 3210
                  <br />
                  info@cryptoland.com
                  <br />
                  <a href="mailto:supportcenter@cryptoland.com">
                    supportcenter@cryptoland.com
                  </a>
                </p>

                <div className="flex gap-16 mt-8 md:mt-16 w-full justify-center md:justify-start m-auto items-start">
                  <div className="flex gap-3 flex-col text-white/70">
                    <Link
                      className="cursor-pointer hover:text-white transition-all duration-500 ease-in-out "
                      to="about"
                    >
                      About
                    </Link>
                    <Link
                      className="cursor-pointer hover:text-white transition-all duration-500 ease-in-out "
                      to="roadmap"
                    >
                      Roadmap
                    </Link>
                    <Link
                      className="cursor-pointer hover:text-white transition-all duration-500 ease-in-out "
                      to="token"
                    >
                      Token
                    </Link>
                    <Link
                      className="cursor-pointer hover:text-white transition-all duration-500 ease-in-out "
                      to="team"
                    >
                      Team
                    </Link>
                  </div>
                  <div className="flex gap-3 flex-col text-white/70">
                    <Link
                      className="cursor-pointer hover:text-white transition-all duration-500 ease-in-out "
                      to="services"
                    >
                      Services
                    </Link>
                    {/*<Link className='cursor-pointer hover:text-white transition-all duration-500 ease-in-out ' to='statistics'>Statistics</Link>*/}
                    <Link
                      className="cursor-pointer hover:text-white transition-all duration-500 ease-in-out "
                      to="Goldpaper"
                    >
                      Goldpaper
                    </Link>
                    <Link
                      className="cursor-pointer hover:text-white transition-all duration-500 ease-in-out "
                      to="faq"
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
