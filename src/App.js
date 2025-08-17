import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VersionControl from "./pages/VersionControl";
import WorkPlanning from "./pages/WorkPlanning";
import DevelopmentGuides from "./pages/DevelopmentGuides";
import GitMethodology from "./pages/GitMethodology";
import ProjectManagement from "./pages/ProjectManagement";
import TechnologyStack from "./pages/TechnologyStack";
import InitialDesign from "./pages/InitialDesign";
import Implementation from "./pages/Implementation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/version-control" element={<VersionControl />} />
            <Route path="/work-planning" element={<WorkPlanning />} />
            <Route path="/development-guides" element={<DevelopmentGuides />} />
            <Route path="/git-methodology" element={<GitMethodology />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/technology-stack" element={<TechnologyStack />} />
            <Route path="/initial-design" element={<InitialDesign />} />
            <Route path="/implementation" element={<Implementation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
