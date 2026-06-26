import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaRobot } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://https://ai-mock-interview-platform-emsv.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login Successful");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111827] rounded-3xl shadow-2xl border border-purple-600 p-10">

        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5 rounded-full">
            <FaRobot className="text-5xl text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mt-6">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Login to continue your AI Interview
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              required
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
              font-bold
              text-lg
              hover:scale-105
              transition
            "
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 hover:text-purple-300"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;