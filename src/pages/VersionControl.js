function VersionControl() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Version Control</h2>
      <p className="mb-6">
        We use GitHub for managing different parts of the project, including the frontend, backend, 
        and documentation site. To ensure stability, we maintain a <strong>development branch</strong> 
        that serves as a buffer between feature work and the main branch.
      </p>
      <p className="italic text-green-800">
        Message: Proper branching keeps our master branch stable and production-ready.
      </p>
    </div>
  );
}

export default VersionControl;
