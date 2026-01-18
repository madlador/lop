import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Challenges from "./components/pages/Challenges";
import Challenge from "./components/pages/Challenge";
import Verification from "./components/pages/Verification";
import Reflection from "./components/pages/Reflection";
import Summary from "./components/pages/Summary";
import About from "./components/pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-full px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenge/:id" element={<Challenge />} />
          <Route path="/challenge/:id/verify" element={<Verification />} />
          <Route path="/challenge/:id/reflect" element={<Reflection />} />
          <Route path="/challenge/:id/summary" element={<Summary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
