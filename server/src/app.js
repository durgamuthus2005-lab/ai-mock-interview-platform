const express = require("express");
const cors = require("cors");


const authRoutes = require("./routes/authRoute");

const interviewRoutes =
require("./routes/interviewRoute");

const resumeRoute = require("./routes/resumeRoute");
console.log("Resume Route Imported Successfully");

const app = express();

app.use(cors());
app.use(express.json());

console.log("Auth Routes Loaded");

app.use("/api/auth", authRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/resume", resumeRoute);

app.get("/", (req, res) => {
  res.send("Muthu app Working");
});

app.get("/test", (req, res) => {
  res.send("TEST WORKS");
});

app.get("/check", (req, res) => {
  res.send("NEW CODE LOADED");
});

module.exports = app;