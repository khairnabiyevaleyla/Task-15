import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedEmail = sessionStorage.getItem("email");
    const storedPassword = sessionStorage.getItem("password");

    if (form.email === storedEmail && form.password === storedPassword) {
      sessionStorage.setItem("token", "fake-jwt-token");
      navigate("/shop");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-[400px]"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-2xl font-semibold mb-6">Login</h3>

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email*"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password*"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p className="text-gray-500 text-sm">Forgot your password?</p>

          <button
            type="submit"
            className={`w-full bg-black text-white p-3 rounded-full hover:bg-gray-800 ${
              !form.email || !form.password
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={!form.email || !form.password}
          >
            LOGIN
          </button>
          <button
            type="submit"
            className={`w-full bg-black text-white p-3 rounded-full hover:bg-gray-800`}
            onClick={() => navigate("/register")}
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
