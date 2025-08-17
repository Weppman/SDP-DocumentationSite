function DevelopmentGuides() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
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
    </div>
  );
}

export default DevelopmentGuides;
