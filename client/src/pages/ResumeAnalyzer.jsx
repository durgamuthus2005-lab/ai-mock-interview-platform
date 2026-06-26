import { useState } from "react";
import { FaFileUpload, FaRobot, FaFilePdf } from "react-icons/fa";

function ResumeAnalyzer() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");




const analyzeResume = async () => {

  if (!file) {
    alert("Please upload a resume.");
    return;
  }

  try {

    setLoading(true);

    const formData = new FormData();

    formData.append("resume", file);

    const response = await fetch(
      "http://localhost:5000/api/resume/analyze",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || "Resume Analysis Failed");
}

setAnalysis(data.analysis);

  } catch (error) {

    console.error(error);

    alert("Resume Analysis Failed");

   } finally{
    setLoading(false);
   }

};
  
  
  
  return (

    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-8">

      <div className="w-full max-w-4xl bg-[#111827] rounded-3xl border border-purple-600 shadow-2xl p-10">

        <div className="flex justify-center">

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5 rounded-full">

            <FaRobot className="text-5xl text-white"/>

          </div>

        </div>

        <h1 className="text-4xl font-bold text-center text-white mt-6">

          AI Resume Analyzer

        </h1>

        <p className="text-center text-gray-400 mt-3">

          Upload your resume and receive AI-powered feedback.

        </p>

        <label
          className="
          mt-10
          border-2
          border-dashed
          border-purple-500
          rounded-2xl
          p-12
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          hover:bg-[#1A2238]
          transition
          "
        >

          <FaFileUpload className="text-6xl text-purple-400"/>

          <p className="text-white mt-6 text-xl">

            Click to Upload Resume

          </p>

          <p className="text-gray-400 mt-2">

            PDF Only

          </p>

          <input
            type="file"
            accept=".pdf"
            hidden
            onChange={(e)=>setFile(e.target.files[0])}
          />

        </label>

        {file && (

          <div className="mt-8 bg-[#0B1120] rounded-xl p-5 flex items-center gap-4">

            <FaFilePdf className="text-red-500 text-3xl"/>

            <div>

              <h3 className="text-white">

                {file.name}

              </h3>

              <p className="text-gray-400">

                Ready for Analysis

              </p>

            </div>

          </div>

        )}

        <button
  onClick={analyzeResume}
  disabled={loading}
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
    disabled:opacity-50
  "
>
  {loading ? "Analyzing Resume..." : "Analyze Resume"}
</button>


{analysis ? (

<div className="mt-10 bg-[#0B1120] rounded-2xl border border-green-500 p-6">

<h2 className="text-2xl text-green-400 font-bold mb-4">
AI Resume Analysis
</h2>

<pre className="text-white whitespace-pre-wrap">
{analysis}
</pre>

</div>

) : (

<div className="mt-10 text-center text-gray-500">
Upload a resume and click Analyze Resume.
</div>



)}

      </div>

    </div>

  );

}

export default ResumeAnalyzer;