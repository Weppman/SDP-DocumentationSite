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
      <p className="italic text-green-800">
        Message: Consistent workflows minimize merge conflicts and deployment risks.
      </p>
    </div>
  );
}

export default GitMethodology;
