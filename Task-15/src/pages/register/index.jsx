import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthApi } from "../../services/api";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    AuthApi("register", form).then((res) => {
      if (res) {
        navigate("/login");
      }
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-[400px]"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h3 className="text-center text-2xl font-semibold mb-6">
          Create Account
        </h3>

        <div className="space-y-4">
          <input
            onChange={handleChange}
            name="fullname"
            value={form.fullname}
            type="text"
            placeholder="Full name"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
            aria-label="Full name"
            required
          />

          <input
            onChange={handleChange}
            name="email"
            value={form.email}
            type="email"
            placeholder="Your email*"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
            aria-label="Email"
            required
          />

          <input
            onChange={handleChange}
            name="password"
            value={form.password}
            type="password"
            placeholder="Password*"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
            aria-label="Password"
            required
          />

          <p className="text-gray-500 text-sm py-3">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>

          <Link to="/login">
            <button className="w-full bg-black text-white p-3 rounded-full hover:bg-gray-800">
              LOGIN
            </button>
          </Link>

          <button
            type="submit"
            className={`w-full border border-black text-black p-3 rounded-full hover:bg-gray-100 mt-4 ${
              !form.fullname || !form.email || !form.password
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={!form.fullname || !form.email || !form.password}
          >
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
