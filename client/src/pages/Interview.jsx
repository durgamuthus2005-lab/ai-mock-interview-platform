import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaVolumeUp } from "react-icons/fa";
import {
  FaRobot,
  FaMicrophone,
  FaPaperPlane,
  FaLightbulb,
} from "react-icons/fa";



function Interview() {

const location = useLocation();

const {
  role,
  experience,
  difficulty,
  type,
  questions,
} = location.state || {};

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [allEvaluations, setAllEvaluations] = useState([]);

  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [listening, setListening] = useState(false);
  
 

  const generateQuestion = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/interview/question",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
          role,
          experience,
          difficulty,
          type,
}),
      }
    );

    const data = await response.json();

    setQuestion(data.question);
    speakQuestion(data.question);

    setAnswer("");
    setEvaluation("");

  } catch (error) {
    console.log(error);
  }
};



const speakQuestion = (text) => {
  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
};
 


const handleSubmit = async () => {
  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:5000/api/interview/evaluate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          answer,
        }),
      }
    );

    const data = await response.json();

    setLoading(false);

    // Show AI Feedback
    setEvaluation(data.evaluation);

    // Save interview
    setAllEvaluations((prev) => [
      ...prev,
      {
        question,
        answer,
        evaluation: data.evaluation,
      },
    ]);

  } catch (error) {
    setLoading(false);
    console.error(error);
    alert("Evaluation Failed");
  }
};

useEffect(() => {

  if (timeLeft <= 0) {
    setInterviewCompleted(true);
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);

}, [timeLeft]);

const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;


if (interviewCompleted) {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center">

      <div className="bg-[#182235] rounded-3xl p-10 shadow-2xl text-center border border-purple-500">

        <h1 className="text-6xl">🎉</h1>

        <h2 className="text-4xl font-bold text-white mt-5">
          Interview Completed
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Congratulations! You completed {questions} interview questions.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-white"
        >
          Start Again
        </button>

      </div>

    </div>
  );
}

  return (
<div className="min-h-screen bg-[#050816] p-10">

<div className="w-full max-w-[1600px] mx-auto px-10">

<h1 className="text-4xl font-bold text-white mb-2">
AI Mock Interview
</h1>

<h2 className="text-2xl font-bold text-white mt-6">
  Interview Question
</h2>
<p className="text-gray-400 mt-6">
  Interview Progress
</p>
<div className="mt-6 p-8 min-h-[140px] bg-[#101827] rounded-2xl border border-purple-500 shadow-lg">

  <p className="text-white text-xl leading-8">
    {question || "Click Generate Question to begin."}
  </p>

</div>

<div className="w-full bg-gray-700 rounded-full h-3 mt-4">

  <div
    className="bg-purple-600 h-3 rounded-full transition-all duration-500"
    style={{
      width: `${(currentQuestion / questions) * 100}%`,
    }}
  ></div>

</div>

<div className="grid lg:grid-cols-12 gap-8 mt-8">

{/* LEFT */}

<div className="lg:col-span-8">

<div className="bg-[#182235] rounded-2xl p-8">

<div className="flex justify-between">

<div>
<p className="text-gray-400">
Role
</p>

<h2 className="text-white text-xl">
{role}
</h2>
</div>

<div>
<p className="text-gray-400">
Difficulty
</p>

<h2 className="text-white">
{difficulty}
</h2>
</div>

<div>
<p className="text-gray-400">
Experience
</p>

<h2 className="text-white">
{experience}
</h2>
</div>

</div>

<hr className="my-8 border-gray-700"/>

<div className="flex items-center gap-3">

<FaRobot className="text-purple-400 text-3xl"/>

<h2 className="text-white text-2xl font-semibold">
AI Interviewer
</h2>

</div>

<div className="flex gap-4 mt-8">

  <button
    onClick={generateQuestion}
    className="
      flex-1
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
    Generate Question
  </button>

  <button
    onClick={() => speakQuestion(question)}
    disabled={!question}
    className="
      px-6
      py-4
      rounded-xl
      bg-indigo-600
      hover:bg-indigo-700
      text-white
      flex
      items-center
      gap-2
      disabled:opacity-50
    "
  >
    <FaVolumeUp />
    Repeat
  </button>

</div>
 



<h3 className="text-white text-xl font-semibold mt-8">
Your Answer
</h3>

<textarea
rows = 
{14}
value={answer}
onChange={(e)=>setAnswer(e.target.value)}
placeholder="Type your answer..."
className="
w-full
mt-8
bg-[#0B1120]
text-white
p-8
rounded-2xl
border
border-gray-700
focus:border-purple-500
outline-none
resize-none
transition
"
/>

<div className="flex gap-4 mt-6">

<button
  onClick={() =>startListening()}
  className="
  bg-gradient-to-r
  from-green-500
  to-green-700
  hover:scale-105
  transition
  px-6
  py-3
  rounded-xl
  text-white
  flex
  items-center
  gap-2
  "
>
  <FaMicrophone />
  {listening ? "Listening..." : "Voice Answer"}
</button>



<button
  onClick={handleSubmit}
  disabled={!answer.trim()}
className={`
bg-gradient-to-r
from-purple-600
to-blue-600
px-6
py-3
rounded-xl
text-white
flex
items-center
gap-2
transition
${!answer.trim() ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
`}
>
<FaPaperPlane/>
Submit
</button>

</div>

</div>

</div>

  <div className="lg:col-span-4">

<div>

<div className="bg-[#182235] rounded-2xl p-8 shadow-xl border border-gray-700 sticky top-8">

<h2 className="text-white text-xl mb-6">
Interview Progress
</h2>

<p className="text-gray-400">
Question
</p>

<h1 className="text-7xl font-bold text-purple-400 mt-4">
{currentQuestion}/{questions}
</h1>

<div className="mt-8">

<p className="text-gray-400">
Interview Type
</p>

<h3 className="text-white">
{type}
</h3>

</div>

<div className="mt-8">

  <p className="text-gray-400">
    Time Remaining
  </p>

  <h2
  className={`text-3xl font-bold ${
    timeLeft < 300 ? "text-red-500" : "text-green-400"
  }`}
>
  {minutes}:{seconds.toString().padStart(2, "0")}
</h2>
</div>

</div>
</div>

{loading && (

<div className="bg-[#182235] mt-8 rounded-2xl p-6">

<h3 className="text-yellow-400">
Evaluating Answer...
</h3>

</div>

)}

{evaluation && (
  <button
    onClick={() => {

      if (currentQuestion < questions) {

        setCurrentQuestion(currentQuestion + 1);

        setQuestion("");

        setAnswer("");

        setEvaluation("");

      } else {

        setInterviewCompleted(true);

      }

    }}
    className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl"
  >
    {currentQuestion === questions
      ? "Finish Interview"
      : "Next Question"}
  </button>
)}

</div>

</div>

</div>

</div>
);
}

export default Interview;