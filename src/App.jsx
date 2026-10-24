import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IdeaPage from "./pages/IdeaPage";
import AuthPage from "./pages/AuthPage";
import ResultsPage from "./pages/ResultsPage";
import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<IdeaPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/signin" element={<AuthPage mode="signin" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
      </Routes>
    </Router>
  );
}
