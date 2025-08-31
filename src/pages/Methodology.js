import Sidebar from "../components/Sidebar";

function Methodology() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-0">Methodology</h1>
      <Sidebar />
      <h2 className="text-2xl font-bold text-green-700 mb-4">Version Control</h2>
      <p className="mb-6">
        We use GitHub for managing different parts of the project, including the frontend, backend, 
        and documentation site. To ensure stability, we maintain a <strong>development branch</strong> 
        that serves as a buffer between feature work and the main branch.
      </p>
      <p className="italic text-green-800">
        Message: Proper branching keeps our master branch stable and production-ready.
      </p>

      <h2 className="text-2xl font-bold text-green-700 mb-4">Project Management Methodology</h2>
      <p className="mb-6">
        We adopted a <strong>Scrum-inspired methodology</strong>, holding 
        <strong> four meetings per week</strong>. These check-ins allowed us to track progress, 
        identify blockers, and ensure the team stayed aligned.
      </p>
      <p className="mb-6">
        While lightweight, this approach gave us the flexibility of Agile while maintaining a 
        structured schedule to meet deadlines.
      </p>
      <p className="italic text-green-800">
        Message: Regular sync-ups improved communication and accountability.
      </p>

      <h2 className="text-2xl font-bold text-green-700 mb-4">Git Methodology</h2>
      <p className="mb-6">
        Our workflow follows a <strong>Git Flow</strong>-inspired methodology. Developers create 
        feature branches from the <code>dev</code> branch. After testing and review, these branches 
        are merged back into <code>dev</code>. Once stable, <code>dev</code> is merged into 
        <code>main</code>.
      </p>
      <p className="mb-6">
        This ensures that <code>main</code> always reflects a production-ready state, while 
        <code>dev</code> serves as an integration branch for ongoing work.
      </p>
      <p className="mb-6">
        For new features, branches labelled as "FEATURE-[featureName]".
      </p>
      <p className="mb-6">
        For more information regarding <strong>Git Flow</strong>, see <a
          href="https://www.gitkraken.com/learn/git/git-flow"
          className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.gitkraken.com/learn/git/git-flow
        </a>.
      </p>
      <p className="mb-6">
        Commits uses a simplified version of <a
          href="https://www.conventionalcommits.org/en/v1.0.0/"
          className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conventional Commits
        </a>, which prefixes the commit with
        "FEATURE:" for new implementations, and "FIX:" for bugs, minor changes, etc. 
      </p>
      <p className="italic text-green-800">
        Message: Consistent workflows minimize merge conflicts and deployment risks.
      </p>
      
      <h2 className="text-2xl font-bold text-green-700 mb-4">Work Planning</h2>
      <p className="mb-6">
        We use <strong>Notion</strong> to manage all project scheduling and planning. 
        This allows us to keep track of milestones, assign tasks, and ensure the 
        project remains on schedule.
      </p>
      <p className="italic text-green-800">
        Message: Centralized planning reduces confusion and keeps the team aligned.
      </p>
    </main>
  );
}

export default Methodology;