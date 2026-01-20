import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/pages/About";
import Challenge from "./components/pages/Challenge";
import Challenges from "./components/pages/Challenges";
import Home from "./components/pages/Home";
import Reflection from "./components/pages/Reflection";
import Summary from "./components/pages/Summary";
import Verification from "./components/pages/Verification";
import { getActiveChallenge } from "./lib/utils/active_challenge";

const AppRoutes = () => {
  // This is a workaround to use navigate in BrowserRouter,
  // since it can't be used directly there
  const navigate = useNavigate();

  useEffect(() => {
    // Check for active challenge on app load
    const activeChallengeId = getActiveChallenge();
    if (activeChallengeId) {
      // Redirect to challenge page
      navigate(`/challenge/${activeChallengeId}`);
    }
  }, []);

  return (
    <div className="h-full px-4 py-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenge/:id" element={<Challenge />} />
        <Route path="/challenge/:id/verify" element={<Verification />} />
        <Route path="/challenge/:id/reflect" element={<Reflection />} />
        <Route path="/challenge/:id/summary" element={<Summary />} />
        <Route path="*" element={<p>Good luck with that!</p>} />
      </Routes>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
