"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import "./signup.css";
function Signup({setSignInBtn}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="sm:w-[45%] w-full bg-white sm:mx-auto mx-2 py-2 z-20 border px-4">
      <div className="py-3 flex justify-between items-center"><span>Please Login To Continue</span> <AiOutlineCloseCircle className=" cursor-pointer scale-150" onClick={()=>setSignInBtn(false)}/> </div>
      <div className="flex justify-around items-center bg-[#31304D] text-white px-4 py-2">
        <div>Sign up</div>
        <div>Sign In</div>
      </div>
      <p className="my-3 text-xl md:text-3xl font-serif font-semibold ">
        Get Started.
      </p>
      <p className="my-3 text-normal md:text-xl">
        Already have an account?{" "}
        <button className="text-primarybtn italic font-bold hover:text-[#7A0BC0] font-serif">
          Sign in
        </button>
      </p>

      <div className="flex flex-wrap justify-around lg:flex-nowrap  items-center gap-2 lg:gap-3 font-semibold">
        <button className="flex gap-1 sm:gap-2 lg:gap-3 justify-between border py-2 px-2 md:px-6 items-center">
          <FcGoogle />
          <span>Sign up with Google</span>
        </button>
        <button className="flex gap-1 sm:gap-2 lg:gap-4 justify-between border bg-slate-600 text-white py-2 px-2 md:px-10 items-center">
          <FaGithub />
          <span>Sign up with Github</span>
        </button>
      </div>

      <div className="grid grid-cols-7 justify-center items-center my-3">
        <div className="h-[1px] col-span-3 bg-slate-700"></div>
        <div className="col-span-1 mx-auto">or</div>
        <div className="h-[1px] col-span-3  bg-slate-700"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          label="User Name"
          variant="outlined"
          style={{ marginBottom: 10 }}
          name="userName" // Add the name attribute
          onChange={handleChange}
        />

        <TextField
          fullWidth
          required
          label="Email Address"
          variant="outlined"
          style={{ marginBottom: 10 }}
          name="email" // Add the name attribute
          onChange={handleChange}
        />

        <TextField
          fullWidth
          required
          label="Password"
          variant="outlined"
          style={{ marginBottom: 10 }}
          type="password" // Set input type to password
          name="password" // Add the name attribute
          onChange={handleChange}
        />

        <TextField
          fullWidth
          required
          label="Confirm Password"
          variant="outlined"
          style={{ marginBottom: 10 }}
          type="password" // Set input type to password
          name="confirmPassword" // Add the name attribute
          onChange={handleChange}
        />

        <div className="flex justify-center items-center">
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>
  );
}

export default Signup;
