import Sidebar from "../components/Sidebar";

function About() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-0">About</h1>
      <Sidebar />

      <p className="mb-6">
        <strong>Hiking Logbook</strong> (name pending) is a web-based application for tracking and planning hiking activities.
        Relevant resources below:
      </p>

      <ul className="mb-6 list-disc list-inside pl-4 space-y-1">
        <li>The back-end, which includes the APIs, may be found here: <a
          href="https://github.com/Weppman/SDP-BackEnd"
          className="font-mono text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Weppman/SDP-BackEnd
        </a></li>

        <li>The front-end, built using React, may be found here: <a
          href="https://github.com/Weppman/SDP-FrontEnd"
          className="font-mono text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Weppman/SDP-FrontEnd
        </a></li>

        <li>The source code for the documentation site itself may be found here: <a
          href="https://github.com/Weppman/SDP-DocumentationSite"
          className="font-mono text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Weppman/SDP-DocumentationSite
        </a></li>
      </ul>

      <h3 className="text-2xl font-bold text-green-700 mb-6">The Team</h3>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li>Joshua Weppelman</li>
        <li>Justin Perumal</li>
        <li>Dewald Smal</li>
        <li>Nathan Le Roux</li>
        <li>Niel Grobler</li>
      </ul>
    </main>
  );
}

export default About;
