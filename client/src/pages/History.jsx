import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch(
        "https://ai-mock-interview-platform-emsv.onrender.com/api/interview/history"
      );

      const data = await response.json();

      setHistory(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex bg-[#050816] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <Navbar />

        <h1 className="text-4xl font-bold text-white mt-8">
          Interview History
        </h1>

        <p className="text-gray-400 mt-2">
          View all your previous interviews.
        </p>

        <div className="mt-8 overflow-x-auto">

          <table className="w-full rounded-xl overflow-hidden">

            <thead className="bg-[#182235]">

              <tr>

                <th className="p-4 text-left text-white">
                  Date
                </th>

                <th className="p-4 text-left text-white">
                  Question
                </th>

                <th className="p-4 text-left text-white">
                  Score
                </th>

                <th className="p-4 text-left text-white">
                  Feedback
                </th>

              </tr>

            </thead>

            <tbody>

              {history.map((item, index) => (

                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#111827]"
                >

                  <td className="p-4 text-gray-300">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-gray-300">
                    {item.question}
                  </td>

                  <td className="p-4 text-green-400">
                    {item.score}
                  </td>

                  <td className="p-4 text-gray-300">
                    {item.feedback}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default History;