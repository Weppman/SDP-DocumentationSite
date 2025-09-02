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

      <h2 className="text-2xl font-bold text-green-700 mb-4">Third-Party Integrations Overview</h2>
      <p className="mb-6 text-gray-700">
        Our application leverages several third-party libraries to manage
        authentication, charts, and data visualization. The table below
        summarizes each library’s purpose, where it is used, and references
        to its documentation.
      </p>
      <section className="overflow-x-auto mt-6">
        <table className="table-auto w-full border border-gray-200 shadow rounded-lg">
          <thead className="bg-green-100 text-left">
            <tr>
              <th className="px-4 py-2 border">Library / Module</th>
              <th className="px-4 py-2 border">Purpose</th>
              <th className="px-4 py-2 border">Where Used</th>
              <th className="px-4 py-2 border">Justification</th>
              <th className="px-4 py-2 border">Documentation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-green-50">
              <td className="px-4 py-2 border font-semibold">@clerk/clerk-react</td>
              <td className="px-4 py-2 border">
                Authentication and user identity management
              </td>
              <td className="px-4 py-2 border">
                <code>userContext.js</code>, <code>profile.js</code> — managing logged-in user state and secure API calls
              </td>
              <td className="px-4 py-2 border">
                - Provides hooks like <code>useUser</code> and <code>useAuth</code> for easy access to user info and auth tokens <br />
                - Eliminates need to manually implement login flows <br />
                - Integrates seamlessly with React components
              </td>
              <td className="px-4 py-2 border text-blue-600 underline">
                <a
                  href="https://clerk.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clerk Docs
                </a>
              </td>
            </tr>
            <tr className="hover:bg-green-50">
              <td className="px-4 py-2 border font-semibold">
                react-chartjs-2, chart.js
              </td>
              <td className="px-4 py-2 border">
                Doughnut chart for achievements and goals
              </td>
              <td className="px-4 py-2 border">
                <code>stats.js</code> — Goals & achievements section
              </td>
              <td className="px-4 py-2 border">
                - Lightweight, smooth React integration <br />
                - Excellent for proportion visualizations <br />
                - Avoids manual DOM handling by exposing Chart.js as React components
              </td>
              <td className="px-4 py-2 border text-blue-600 underline">
                <a
                  href="https://www.chartjs.org/docs/latest/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chart.js Docs
                </a>
                ,{" "}
                <a
                  href="https://react-chartjs-2.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-chartjs-2 Docs
                </a>
              </td>
            </tr>
            <tr className="hover:bg-green-50">
              <td className="px-4 py-2 border font-semibold">
                ApexCharts, React-ApexCharts
              </td>
              <td className="px-4 py-2 border">
                Radial Bar chart for completed hikes by trail
              </td>
              <td className="px-4 py-2 border">
                <code>stats.js</code> — Trail completion visualization
              </td>
              <td className="px-4 py-2 border">
                - Radial bar not supported natively by Chart.js <br />
                - Built-in circular proportional charts with gradients and shadows <br />
                - Clear API for responsive and visually appealing charts
              </td>
              <td className="px-4 py-2 border text-blue-600 underline">
                <a
                  href="https://apexcharts.com/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ApexCharts Docs
                </a>
                ,{" "}
                <a
                  href="https://apexcharts.com/docs/react-charts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React-ApexCharts Docs
                </a>
              </td>
            </tr>
            <tr className="hover:bg-green-50">
              <td className="px-4 py-2 border font-semibold">
                Highcharts, Highcharts-React-Official, Sunburst Module
              </td>
              <td className="px-4 py-2 border">
                Sunburst chart for hiking timeline
              </td>
              <td className="px-4 py-2 border">
                <code>stats.js</code> — Hiking timeline 
              </td>
              <td className="px-4 py-2 border">
                - Supports hierarchical drill-down (unavailable in Chart.js & ApexCharts) <br />
                - React wrapper ensures smooth integration <br />
                - Enables interactive multi-level data exploration
              </td>
              <td className="px-4 py-2 border text-blue-600 underline">
                <a
                  href="https://www.highcharts.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Highcharts Docs
                </a>
                ,{" "}
                <a
                  href="https://github.com/highcharts/highcharts-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Highcharts React Docs
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default DeploymentImplementation;