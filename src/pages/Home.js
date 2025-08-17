import { Link } from "react-router-dom";

function Home() {
  const pages = [
    { name: "Version Control", path: "/version-control" },
    { name: "Work Planning", path: "/work-planning" },
    { name: "Development Guides", path: "/development-guides" },
    { name: "Git Methodology", path: "/git-methodology" },
    { name: "Project Management Methodology", path: "/project-management" },
    { name: "Technology Stack", path: "/technology-stack" },
    { name: "Initial Design & Development Plan", path: "/initial-design" },
    { name: "Implementation", path: "/implementation" },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Documentation</h1>
      <ul className="space-y-4">
        {pages.map((page, idx) => (
          <li key={idx}>
            <Link 
              to={page.path} 
              className="block bg-white shadow rounded-xl p-4 hover:bg-green-50"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
