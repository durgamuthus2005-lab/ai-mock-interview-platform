import { useNavigate, useLocation } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score || 0;
  const evaluation =
    location.state?.evaluation || "No evaluation available.";
  const feedback =
    location.state?.feedback || "No feedback available.";

  return (
    <div className="min-h-screen bg-[#050816] flex justify-center items-center p-10">

      <div className="bg-[#182235] rounded-3xl p-10 w-full max-w-5xl">

        <h1 className="text-5xl font-bold text-green-400">
          🎉 Interview Completed
        </h1>

        <p className="text-gray-400 mt-3">
          Here is your AI Interview Report
        </p>

        {/* Score Card */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-[#0B1120] p-6 rounded-xl text-center">
            <h3 className="text-gray-400">Overall Score</h3>

            <h1 className="text-5xl text-green-400 mt-3 font-bold">
              {score}/100
            </h1>
          </div>

          <div className="bg-[#0B1120] p-6 rounded-xl text-center">
            <h3 className="text-gray-400">Interview</h3>

            <h1 className="text-3xl text-white mt-3">
              Completed
            </h1>
          </div>

          <div className="bg-[#0B1120] p-6 rounded-xl text-center">
            <h3 className="text-gray-400">Status</h3>

            <h1 className="text-3xl text-green-400 mt-3">
              Passed
            </h1>
          </div>

        </div>

        {/* Evaluation */}

        <h2 className="text-3xl text-white mt-10">
          AI Evaluation
        </h2>

        <div className="bg-[#0B1120] rounded-xl p-6 mt-4">
          <p className="text-green-400 text-lg leading-8">
            {evaluation}
          </p>
        </div>

        {/* Feedback */}

        <h2 className="text-3xl text-white mt-10">
          AI Feedback
        </h2>

        <div className="bg-[#0B1120] rounded-xl p-6 mt-4">
          <p className="text-white text-lg leading-8">
            {feedback}
          </p>
        </div>

        {/* Buttons */}

        <div className="flex gap-5 mt-10">

          <button
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl text-white"
          >
            Download Report
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white"
          >
            Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}

export default Result;