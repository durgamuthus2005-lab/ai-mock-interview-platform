import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaBriefcase,
  FaUserTie,
  FaChartLine,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";
function InterviewSetup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Frontend Developer");
  const [experience, setExperience] = useState("Fresher");
  const [difficulty, setDifficulty] = useState("Medium");
  const [type, setType] = useState("Technical");
  const [questions, setQuestions] = useState(5);

  const startInterview = () => {
    navigate("/interview", {
      state: {
        role,
        experience,
        difficulty,
        type,
        questions,
      },
    });
  };

  return (
  <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

    <div className="w-full max-w-3xl bg-[#111827] border border-purple-600 rounded-3xl shadow-2xl p-10">

      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5 rounded-full">
          <FaRobot className="text-5xl text-white" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center text-white mt-6">
        AI Interview Setup
      </h1>

      <p className="text-gray-400 text-center mt-2">
        Configure your interview before you begin.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div>
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaBriefcase /> Role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-[#0B1120] text-white p-4 rounded-xl border border-gray-700"
          >
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>Java Developer</option>
            <option>Python Developer</option>
            <option>Data Analyst</option>
            <option>Data Scientist</option>
            <option>AI Engineer</option>
            <option>HR Interview</option>
          </select>
        </div>

        <div>
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaUserTie /> Experience
          </label>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full bg-[#0B1120] text-white p-4 rounded-xl border border-gray-700"
          >
            <option>Fresher</option>
            <option>1-2 Years</option>
            <option>3-5 Years</option>
          </select>
        </div>

        <div>
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaChartLine /> Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full bg-[#0B1120] text-white p-4 rounded-xl border border-gray-700"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaClipboardList /> Interview Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-[#0B1120] text-white p-4 rounded-xl border border-gray-700"
          >
            <option>Technical</option>
            <option>HR</option>
            <option>Mixed</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaQuestionCircle /> Number of Questions
          </label>

          <select
            value={questions}
            onChange={(e) => setQuestions(Number(e.target.value))}
            className="w-full bg-[#0B1120] text-white p-4 rounded-xl border border-gray-700"
          >
            <option value={5}>5 Questions</option>
            <option value={10}>10 Questions</option>
            <option value={15}>15 Questions</option>
          </select>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div className="bg-[#0B1120] rounded-xl p-4 text-center">
          <h3 className="text-purple-400 text-xl font-bold">
            {questions * 3} min
          </h3>
          <p className="text-gray-400 text-sm">Estimated Time</p>
        </div>

        <div className="bg-[#0B1120] rounded-xl p-4 text-center">
          <h3 className="text-green-400 text-xl font-bold">
            AI
          </h3>
          <p className="text-gray-400 text-sm">Evaluation</p>
        </div>

        <div className="bg-[#0B1120] rounded-xl p-4 text-center">
          <h3 className="text-blue-400 text-xl font-bold">
            Voice
          </h3>
          <p className="text-gray-400 text-sm">Assistant</p>
        </div>

      </div>

      <button
        onClick={startInterview}
        className="
          w-full
          mt-10
          py-4
          rounded-xl
          bg-gradient-to-r
          from-purple-600
          to-blue-600
          text-white
          text-xl
          font-bold
          hover:scale-105
          transition
        "
      >
        🚀 Start AI Interview
      </button>

    </div>

  </div>
);
}

export default InterviewSetup;