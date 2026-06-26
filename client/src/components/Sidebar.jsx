import { Link } from "react-router-dom";
import {
  FaHome,
  FaMicrophone,
  FaHistory,
  FaFileAlt,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0B1120] border-r border-gray-800 flex flex-col justify-between">

      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-500">
            AI Interview
          </h1>

          <p className="text-gray-400 text-sm">
            Practice Like a Pro
          </p>
        </div>

        <nav className="mt-8">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-6 py-4 text-white hover:bg-purple-600 transition rounded-lg mx-3"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/setup"
            className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:bg-purple-600 hover:text-white transition rounded-lg mx-3"
          >
            <FaMicrophone />
            Start Interview
          </Link>

          <Link
            to="/history"
            className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:bg-purple-600 hover:text-white transition rounded-lg mx-3"
          >
            <FaHistory />
            History
          </Link>

          <Link
            to="/resume-analyzer"
            className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:bg-purple-600 hover:text-white transition rounded-lg mx-3"
          >
            <FaFileAlt />
            Resume Analyzer
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:bg-purple-600 hover:text-white transition rounded-lg mx-3"
          >
            <FaChartBar />
            Analytics
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:bg-purple-600 hover:text-white transition rounded-lg mx-3"
          >
            <FaCog />
            Settings
          </Link>

        </nav>
      </div>

      <div className="p-5">
        <button
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-xl"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

    </div>
  );
}

export default Sidebar;