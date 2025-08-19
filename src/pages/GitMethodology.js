function GitMethodology() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
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
    </div>
  );
}

export default GitMethodology;
