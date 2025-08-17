function TechnologyStack() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Technology Stack</h2>
      <p className="mb-6">
        Our project is <strong>fully hosted on Railway</strong>, providing a seamless deployment 
        environment. The stack includes:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Frontend:</strong> React + TailwindCSS (including the documentation site)</li>
        <li><strong>Backend:</strong> Express.js</li>
        <li><strong>Database:</strong> PostgreSQL</li>
      </ul>
      <p className="italic text-green-800">
        Message: Using one platform for deployment simplified CI/CD.
      </p>
    </div>
  );
}

export default TechnologyStack;
