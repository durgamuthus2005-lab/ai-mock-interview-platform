const express = require("express");

console.log("INTERVIEW ROUTE FILE LOADED");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "Interview Route Working",
  });
});

const {
  generateQuestion,
  evaluateAnswer,
} = require("../services/geminiService");

const Interview = require("../models/Interview");



// =======================
// Evaluate Answer
// =======================
router.post("/evaluate", async (req, res) => {
  try {
    const { question, answer } = req.body;

    const result = await evaluateAnswer(
      question,
      answer
    );

    await Interview.create({
      question,
      answer,
      evaluation: result,
    });

    res.json({
      evaluation: result,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Evaluation Failed",
    });
  }
});

// =======================
// Interview History
// =======================
router.get("/history", async (req, res) => {
  try {
    const interviews = await Interview.find()
      .sort({ _id: -1 });

    res.json(interviews);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch history",
    });
  }
});

// =======================
// Generate Question
// =======================
router.post("/question", async (req, res) => {
  try {
    const {
      role,
      experience,
      difficulty,
      type,
    } = req.body;

    const question = await generateQuestion(
      role,
      experience,
      difficulty,
      type
    );

    res.json({
      question,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Question Generation Failed",
    });
  }
});

// =======================
// Dashboard Statistics
// =======================
router.get("/stats", async (req, res) => {
  try {
    const interviews = await Interview.find();

    const totalInterviews = interviews.length;

    let totalScore = 0;
    let bestScore = 0;

    interviews.forEach((item) => {
      // Temporary random scores
      const score = Math.floor(Math.random() * 3) + 8;

      totalScore += score;

      if (score > bestScore) {
        bestScore = score;
      }
    });

    const averageScore =
      totalInterviews === 0
        ? 0
        : (totalScore / totalInterviews).toFixed(1);

    const today = new Date().toDateString();

    const todayInterviews = interviews.filter(
      (item) =>
        new Date(item.createdAt).toDateString() === today
    ).length;

    res.json({
      totalInterviews,
      averageScore,
      bestScore,
      todayInterviews,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

 
module.exports = router;