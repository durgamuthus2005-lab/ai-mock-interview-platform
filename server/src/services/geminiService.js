const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ===============================
// Generate Interview Question
// ===============================
async function generateQuestion(
  role,
  experience,
  difficulty,
  type
) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an experienced interviewer.

Generate ONE interview question.

Role: ${role}

Experience: ${experience}

Difficulty: ${difficulty}

Interview Type: ${type}

Rules:
- Return ONLY one question.
- Do not provide the answer.
- Make it suitable for the selected role.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

// ===============================
// Evaluate Answer
// ===============================
async function evaluateAnswer(question, answer) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert HR interviewer.

Interview Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer carefully.

Return the response EXACTLY in this format.

Score: X/10

Strengths:
- Point 1
- Point 2

Weaknesses:
- Point 1
- Point 2

Correct Answer:
Explain what the ideal answer should include.

Suggestions:
- Point 1
- Point 2

Overall Feedback:
Write a short paragraph about the candidate's performance.

Do NOT use markdown tables.
Do NOT return JSON.
Return plain text only.
`;

 const result = await model.generateContent(prompt);

return result.response.text();
}

module.exports = {
  generateQuestion,
  evaluateAnswer,
};