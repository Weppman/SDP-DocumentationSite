//note, this may be split off into separate tabs for Features, UI/UX and API.
import Sidebar from "../components/Sidebar";

function FeaturesAPI() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-0">Features/API</h1>
      <Sidebar />
      <h2 className="text-2xl font-bold text-green-700 mb-4">Initial Design & Development Plan</h2>
      <p className="mb-6">
        We opted for a <strong>minimalistic design</strong> to keep the interface clean and user-friendly. 
        The chosen color scheme features <strong>white and light green</strong> tones, promoting readability 
        and a natural feel that matches our project’s hiking theme.
      </p>

      <h2 className="text-2xl font-bold text-green-700 mb-4">API Endpoints</h2>
      <section>
        <h3 className="text-xl font-bold text-green-600">Authentication & Middleware</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><strong>API Key Middleware</strong> - Applied to all routes</li>
          <li><strong>Clerk Middleware</strong> - Only in non-test environments</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Database & Utility</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>GET /</strong></code> - Test database connection</li>
          <li><code><strong>POST /query</strong></code> - Execute arbitrary SQL queries (for testing)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">User Management</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>POST /uid</strong></code> - Fetch Clerk user info by user IDs</li>
          <li><code><strong>GET /user/:authID</strong></code> - Get user by auth ID</li>
          <li><code><strong>POST /user</strong></code> - Create new user</li>
          <li><code><strong>GET /users/search</strong></code> - Search users by username</li>
          <li><code><strong>GET /users/random</strong></code> - Get random users (excluding current user and followed users)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Hikes</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>GET /completed-hikes/:userId</strong></code> - Get user's completed hikes</li>
          <li><code><strong>GET /upcoming-hikes/:userId</strong></code> - Get user's upcoming hikes</li>
          <li><code><strong>GET /pending-hikes/:userId</strong></code> - Get pending hike invitations</li>
          <li><code><strong>POST /plan-hike</strong></code> - Create new hike plan</li>
          <li><code><strong>POST /hike-accept</strong></code> - Accept hike invitation</li>
          <li><code><strong>POST /hike-decline</strong></code> - Decline hike invitation</li>
          <li><code><strong>POST /start-hike</strong></code> - Start a hike (records start time)</li>
          <li><code><strong>POST /stop-hike</strong></code> - Stop a hike (calculates timespan)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Hike Data Updates</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>POST /update-timespan</strong></code> - Update completed hike timespan</li>
          <li><code><strong>POST /update-planned-time</strong></code> - Update planned hike time</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Trails</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>GET /trails</strong></code> - Get all trails</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Social Features</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>GET /friends/:userId</strong></code> - Get user's mutual friends</li>
          <li><code><strong>GET /profile/:id/friends</strong></code> - Get user's friends list</li>
          <li><code><strong>POST /follow/:id</strong></code> - Follow a user</li>
          <li><code><strong>DELETE /follow/:id</strong></code> - Unfollow a user</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Goals & Achievements</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>GET /profile/goals/:userId</strong></code> - Get user's personal goals</li>
          <li><code><strong>GET /profile/global-goals/:userId</strong></code> - Get user's incomplete global goals</li>
          <li><code><strong>GET /profile/completed-global/:id</strong></code> - Get completed global achievements</li>
          <li><code><strong>GET /profile/completed-personal/:id</strong></code> - Get completed personal goals</li>
          <li><code><strong>POST /profile/add-goal/:id</strong></code> - Add new personal goal</li>
          <li><code><strong>PUT /profile/edit-goal/:goalId/:id</strong></code> - Edit personal goal</li>
          <li><code><strong>DELETE /profile/edit-goal/:goalId/:userId</strong></code> - Delete personal goal</li>
          <li><code><strong>PUT /profile/mark-done/:goalId/:userId</strong></code> - Mark personal goal as done</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Profile & Analytics</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>GET /profile/completed-hikes/:id</strong></code> - Get user's completed hikes with trail data</li>
          <li><code><strong>GET /completed-global/:id</strong></code> - Get completed global achievements</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-green-600">Protected Route</h3>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><code><strong>GET /protected</strong></code> - Clerk-authenticated route</li>
        </ul>
      </section>


    </main>
  );
}

export default FeaturesAPI;