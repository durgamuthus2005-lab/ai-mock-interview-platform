import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", score: 72 },
  { day: "Tue", score: 80 },
  { day: "Wed", score: 78 },
  { day: "Thu", score: 85 },
  { day: "Fri", score: 91 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 95 },
];

function PerformanceChart() {
  return (
    <div className="bg-[#182235] rounded-2xl p-6 mt-8 h-[350px]">

      <h2 className="text-white text-2xl font-bold mb-6">
        📈 Interview Performance
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

          <XAxis
            dataKey="day"
            stroke="#9CA3AF"
          />

          <YAxis
            stroke="#9CA3AF"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#8B5CF6"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default PerformanceChart;