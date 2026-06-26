const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeResume(resumeText) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert ATS Resume Reviewer.

Analyze the following resume.

Resume:
${resumeText}

Return the result exactly in this format:

ATS Score: XX/100

Job Match: XX%

Strengths:
- Point 1
- Point 2
- Point 3

Missing Skills:
- Skill 1
- Skill 2
- Skill 3

Weaknesses:
- Point 1
- Point 2

Suggestions:
- Point 1
- Point 2

Overall Feedback:
Write a short paragraph summarizing the resume.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  analyzeResume,
};