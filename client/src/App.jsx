import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interview from "./pages/Interview";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Result from "./pages/Result";
import InterviewSetup from "./pages/InterviewSetup";
import History from "./pages/History";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/result" element={<Result />} />
        <Route path="/setup" element={<InterviewSetup />} />
        <Route path="/history" element={<History />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
