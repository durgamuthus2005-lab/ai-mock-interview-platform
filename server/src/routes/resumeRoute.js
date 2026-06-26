console.log("Resume Route File Loaded");

const express = require("express");
const multer = require("multer");
const pdf = require("pdf-parse");
const fs = require("fs");

const { analyzeResume } = require("../services/resumeService");

const router = express.Router();
console.log("Resume Route Loaded");

const upload = multer({
  dest: "uploads/",
});

router.get("/", (req, res) => {
  res.send("Resume Route Working");
});

router.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {
    console.log("Resume Analyze API Hit");
    try {
      const dataBuffer = fs.readFileSync(req.file.path);

      const pdfData = await pdf(dataBuffer);

      const analysis = await analyzeResume(pdfData.text);

      fs.unlinkSync(req.file.path);

      res.json({
        analysis,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Resume Analysis Failed",
      });
    }
  }
);

module.exports = router;