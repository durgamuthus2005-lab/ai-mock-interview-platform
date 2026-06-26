import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://https://ai-mock-interview-platform-emsv.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111827] border border-purple-600 rounded-3xl shadow-2xl p-10">

        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5 rounded-full">
            <FaRobot className="text-5xl text-white"/>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white mt-6">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join the AI Mock Interview Platform
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-6 mt-10"
        >

          <div className="relative">

            <FaUser className="absolute left-4 top-4 text-gray-400"/>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              className="
              w-full
              bg-[#0B1120]
              text-white
              py-4
              pl-12
              pr-4
              rounded-xl
              border
              border-gray-700
              focus:border-purple-500
              outline-none
              "
            />

          </div>

          <div className="relative">

            <FaEnvelope className="absolute left-4 top-4 text-gray-400"/>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="
              w-full
              bg-[#0B1120]
              text-white
              py-4
              pl-12
              pr-4
              rounded-xl
              border
              border-gray-700
              focus:border-purple-500
              outline-none
              "
            />

          </div>

          <div className="relative">

            <FaLock className="absolute left-4 top-4 text-gray-400"/>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="
              w-full
              bg-[#0B1120]
              text-white
              py-4
              pl-12
              pr-4
              rounded-xl
              border
              border-gray-700
              focus:border-purple-500
              outline-none
              "
            />

          </div>

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-blue-600
            text-white
            text-lg
            font-bold
            hover:scale-105
            transition
            "
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-400 mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-purple-400 ml-2 hover:text-purple-300"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;