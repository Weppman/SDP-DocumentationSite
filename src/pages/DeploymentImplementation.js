import Sidebar from "../components/Sidebar";

function DeploymentImplementation() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-0">Deployment/Implementation</h1>
      <Sidebar />
      <h2 className="text-2xl font-bold text-green-700 mb-4">Implementation</h2>
      <p className="mb-6">
        The implementation followed a <strong>high-level staged approach</strong>. We began by setting 
        up deployment environments and version control, followed by integrating authentication. The 
        backend API and database were developed in parallel with frontend components, before merging 
        into the main application.
      </p>
      <p className="italic text-green-800">
        Message: Clear implementation stages guided smooth progress.
      </p>
      
      <h2 className="text-2xl font-bold text-green-700 mb-4">Development Guides</h2>
      <p className="mb-6">
        Our development setup includes creating separate <strong>Railway environments</strong> 
        for both the frontend and backend. This ensures modular deployment and easier debugging.
      </p>
      <p className="mb-6">
        For authentication, we integrated <strong>Clerk</strong>. The installation process 
        required configuring environment variables, registering applications, and setting up 
        middleware in the backend as well as React hooks on the frontend.
      </p>
      <p className="italic text-green-800">
        Message: Documenting setup ensures reproducibility for future team members.
      </p>
    </main>
  );
}

export default DeploymentImplementation;