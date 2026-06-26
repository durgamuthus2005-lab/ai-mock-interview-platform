import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div>
        <h1 className="text-4xl font-bold text-white">
          AI Mock Interview Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back 👋 Ready for today's interview?
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <FaBell
            size={24}
            className="text-gray-300 hover:text-purple-500 transition"
          />

          <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={40}
            className="text-purple-400"
          />

          <div>
            <h3 className="text-white font-semibold">
              Muthu
            </h3>

            <p className="text-gray-400 text-sm">
              AI Developer
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;