import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PerformanceChart from "../components/PerformanceChart";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
  totalInterviews: 0,
  averageScore: 0,
  bestScore: 0,
  todayInterviews: 0,
});

useEffect(() => {
  fetch("http://https://ai-mock-interview-platform-emsv.onrender.com/api/interview/stats")
    .then((res) => res.json())
    .then((data) => setStats(data))
    .catch((err) => console.log(err));
}, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

return (
  <div className="flex bg-[#050816] min-h-screen">

    <Sidebar />

    

    <div className="flex-1 p-8 pt-20 max-w-[1400px] mx-auto">


     <Navbar />

<div className="space-y-8">

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    <StatCard title="Interviews" value={stats.totalInterviews} />
<StatCard title="Average Score" value={stats.averageScore} />
<StatCard title="Best Score" value={stats.bestScore} />
<StatCard title="Today's Interviews" value={stats.todayInterviews} />

  </div>

  <PerformanceChart />


</div>

      <div className="mt-10 flex gap-5">
        <button
          onClick={() => navigate("/setup")}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white"
        >
          Start New Interview
        </button>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white"
        >
          Logout
        </button>
      </div>

    </div>

  </div>
);
}

export default Dashboard;