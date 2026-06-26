import { useNavigate } from "react-router-dom";

function Result() {

const navigate = useNavigate();

return (

<div className="min-h-screen bg-[#050816] flex justify-center items-center p-10">

<div className="bg-[#182235] rounded-3xl p-10 w-full max-w-5xl">

<h1 className="text-5xl font-bold text-green-400">

🎉 Interview Completed

</h1>

<p className="text-gray-400 mt-3">

Here is your interview report.

</p>

<div className="grid grid-cols-4 gap-6 mt-10">

<div className="bg-[#0B1120] p-6 rounded-xl">

<h3 className="text-gray-400">
Overall Score
</h3>

<h1 className="text-4xl text-white mt-3">
8.8
</h1>

</div>

<div className="bg-[#0B1120] p-6 rounded-xl">

<h3 className="text-gray-400">
Questions
</h3>

<h1 className="text-4xl text-white mt-3">
10
</h1>

</div>

<div className="bg-[#0B1120] p-6 rounded-xl">

<h3 className="text-gray-400">
Time
</h3>

<h1 className="text-4xl text-white mt-3">
18 min
</h1>

</div>

<div className="bg-[#0B1120] p-6 rounded-xl">

<h3 className="text-gray-400">
Average
</h3>

<h1 className="text-4xl text-white mt-3">
8.6
</h1>

</div>

</div>

<h2 className="text-3xl text-white mt-10">

AI Suggestions

</h2>

<div className="bg-[#0B1120] rounded-xl p-6 mt-6">

<ul className="text-green-400 space-y-3">

<li>✔ Good communication skills</li>

<li>✔ Improve technical explanation</li>

<li>✔ Add more examples</li>

<li>✔ Maintain confidence</li>

</ul>

</div>

<div className="flex gap-5 mt-10">

<button

className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl text-white"

>

Download Report

</button>

<button

onClick={()=>navigate("/dashboard")}

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