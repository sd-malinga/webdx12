import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logor from "../assets/logo-round.webp";
import coin1 from "../assets/coin1.webp";
import shp1 from "../assets/shp01.svg";
import CountrySelector from "../components/Selector";
import { COUNTRIES } from "../components/Country";
const Login = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const bubble = {
    up: { y: 0 },
    down: { y: [-15, 0, -15] },
  };
  const [country, setCountry] = useState("IN");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <motion.div
        variants={container}
        className="pc botttt transition-all duration-500 ease-in-out "
      >
        <div className="scale-[50%] md:scale-[100%] md:w-[400px] h-[400px] grad absolute rounded-full drop-shadow-2xl absolute top-4 -left-[8%]">
          <img
            className="m-auto scale-[115%] topppp mt-14 "
            alt=""
            src={logor}
          />
        </div>
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
          className="scale-[50%] bottt md:scale-[100%] md:w-[150px] h-[150px] bg-white rounded-full drop-shadow-2xl absolute top-[45%] right-[12%]"
        ></motion.img>
        <motion.img
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="absolute -right-16 h-screen botttt"
          alt=""
          src={shp1}
        />
      </motion.div>

      <h1 className="text-center p-8 font-semibold uppercase">
        Register with Brit Gold
      </h1>
      <br />
      <form
        autoComplete="on"
        className="m-auto shad1 rounded-none lg:rounded-[2rem] topppp w-full lg:w-1/2 bg-white px-6 md:px-12 py-16 h-full flex flex-col gap-8"
      >
        <div className="relative w-full">
          <p className="-top-[1rem] absolute bg-white p-2 text-xs ml-3 text-black/60 toppp w-fit ">
            Enter your Name <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="name"
            className="p-4 rounded-lg w-full bg-white border-2 outline-none focus:drop-shadow-xl hover:border-blue-300 transition-all duration-300 ease-in-out border-gray-100 border-solid"
            placeholder="John Doe"
          />
        </div>
        <div className="relative w-full">
          <p className="-top-[1rem] absolute bg-white p-2 text-xs ml-3 text-black/60 toppp w-fit ">
            Enter your Email Address <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="email"
            className="p-4 rounded-lg w-full bg-white border-2 outline-none focus:drop-shadow-xl hover:border-blue-300 transition-all duration-300 ease-in-out border-gray-100 border-solid"
            placeholder="hello@johndoe.com"
          />
        </div>
        <div className="relative w-full">
          <p className="-top-[1rem] absolute bg-white p-2 text-xs ml-3 text-black/60 toppp w-fit ">
            Enter your Username <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="username"
            className="p-4 rounded-lg w-full bg-white border-2 outline-none focus:drop-shadow-xl hover:border-blue-300 transition-all duration-300 ease-in-out border-gray-100 border-solid"
            placeholder="johndoe"
          />
        </div>
        <div className="relative w-full">
          <p className="-top-[1rem] absolute bg-white p-2 text-xs ml-3 text-black/60 toppp w-fit ">
            Enter a strong Password <span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="p-4 rounded-lg w-full bg-white border-2 outline-none focus:drop-shadow-xl hover:border-blue-300 transition-all duration-300 ease-in-out border-gray-100 border-solid"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between">
          <CountrySelector
            id={"country-selector"}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={setCountry}
            selectedValue={COUNTRIES.find((option) => option.value === country)}
          />
          <div className="relative w-[60%]">
            <p className="-top-[1rem] absolute bg-white p-2 text-xs ml-3 text-black/60 toppp w-fit ">
              Enter your Mobile Number <span className="text-red-500">*</span>
            </p>
            <input
              type="tel"
              autocomplete="tel"
              name="tel"
              className="p-4 rounded-lg w-full bg-white border-2 outline-none focus:drop-shadow-xl hover:border-blue-300 transition-all duration-300 ease-in-out border-gray-100 border-solid"
            />
          </div>
        </div>
        <br />
        <button className="py-4 px-8 grad rounded-md w-full m-auto lg:w-1/2 hover:drop-shadow-xl transition-all duration-500 ease-in-out text-white shad">
          Register
        </button>
        <br />
        {/*         <Link
          to="/login"
          className="text-center underline text-blue-800 text-sm font-semibold uppercase"
        >
          Create a new Account
        </Link> */}
        <Link
          to="/"
          className="text-center underline text-black text-sm  font-semibold uppercase"
        >
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default Login;
