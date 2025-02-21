import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h3 className="text-center text-2xl font-semibold mb-6">Login</h3>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Your email*"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="password"
            placeholder="Password*"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <p className="text-gray-500 text-sm">Forgot your password?</p>

          <button className="w-full bg-black text-white p-3 rounded-full hover:bg-gray-800">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
