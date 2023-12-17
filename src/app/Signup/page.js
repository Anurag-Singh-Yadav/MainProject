'use client';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function Page() {
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
    // Add your logic for form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-[50%] mx-auto py-2 z-20 border px-4">
      <div className="flex justify-around items-center">
        <div>Sign up</div>
        <div>Sign In</div>
      </div>
      <p>Get Started.</p>
      <p>
        Already have an account? <button>Sign in</button>
      </p>
      <div className="flex gap-4">
        <button className="flex gap-2 justify-between items-center">
          <FcGoogle />
          <span>Sign up with Google</span>
        </button>
        <button className="flex gap-2 justify-between items-center">
          <FaGithub />
          <span>Sign up with Github</span>
        </button>
      </div>
      <div>
        <div>or</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Page;
