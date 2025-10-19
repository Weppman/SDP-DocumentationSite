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

      <h2 className="text-2xl font-bold text-green-700 mb-4">Feature List</h2>
        <h3 className="text-xl font-bold text-green-600">Account</h3>
        <p className="mb-6">When visiting the site for the first time logged out, only the Activity Feed is shown, and the top navigation bar only consists of options to Sign In and Sign Up using Clerk.</p>

        <h3 className="text-xl font-bold text-green-600">Home</h3>
        <p className="mb-6">On the home page, an Activity Feed shows the recent posts made by all users. On the left side is a simple input box that allows you to make your own post with some title and body content, allowing you to share updates with your friends .</p>
        <p className="mb-6"></p>
        <img
          src="/media/featuresapi/20251019-home-page.png"
          alt="Home Page"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />

        <h3 className="text-xl font-bold text-green-600">Plan Hike</h3>
        <p className="mb-6">When planning for a hike, a list of trails are shown. Clicking on any one of them expands the dropdown to show details about the route. The filter options on the left side can be used to search for specific types of routes on name, location, difficulty, duration and description. After selecting a hike, an option is provided to "Plan Hike" where a user enters a date and time for a upcoming hike. Afterwards, they can either just plan it, or they can invite other friends to the hike. After completing, the hikes are moved to Logbook.</p>
        <img
          src="/media/featuresapi/20251019-plan-hike.png"
          alt="Plan Hike Page"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />

        <h3 className="text-xl font-bold text-green-600">Logbook</h3>
        <p className="mb-6">On the Logbook page, there are 2 categories of hikes. The first are all planned upcoming hikes, which has a start button attached for when a user starts it. After starting a hike, the hike can be ended and then moved to Completed Hikes. The Completed Hike contains a similar list, although includes an additional option to adjust the time it took to complete the hike if the internal timing was inaccurate, as well as pinning any particular hikes to your profile. Like the Plan Hike page, there are filter options for name and date to search for any particular ones.</p>
        <img
          src="/media/featuresapi/20251019-logbook1.png"
          alt="Logbook Page"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />
        <img
          src="/media/featuresapi/20251019-logbook2.png"
          alt="Logbook Page"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />

        <h3 className="text-xl font-bold text-green-600">Profile</h3>
        <p className="mb-6">On the user profile page, you can see basic information about your profile including a list of pinned hikes. Below it are multiple tabs for different information. The Achievement tab is for achievements which automatically fill up on their own. The Goals tab allow users to set their own goals with title and description. After seeing a goal, a user can edit, delete, and mark the goal as done. Goals marked as complete go to the Completed tab which allows you to share it with friends on other platforms. The Statistics tab showcases a summary of hikes, achievements, and goals. The Following tab shows which other users you follow, with the option to unfollow. </p>
        <img
          src="/media/featuresapi/20251019-profile1.png"
          alt="Profile Page on Achievements tab"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />
        <img
          src="/media/featuresapi/20251019-profile2.png"
          alt="Profile Page on Goals tab"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />
        <img
          src="/media/featuresapi/20251019-profile3.png"
          alt="Profile Page on Completed tab"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />
        <img
          src="/media/featuresapi/20251019-profile4.png"
          alt="Profile Page on Statistic tab"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />
        <img
          src="/media/featuresapi/20250930-profile5.png"
          alt="Profile Page on Following tab"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />

        <h3 className="text-xl font-bold text-green-600">Search</h3>
        <p className="mb-6">On a clean search, it shows suggested users, with options to both view their profiles (to see a page similar to one's own profile) as well as the ability to follow. Using search can narrow it down to a specific user.</p>
        <img
          src="/media/featuresapi/20251019-search.png"
          alt="Search Page"
          className="mb-6 border rounded shadow"
          style={{ maxWidth: "100%" }}
        />

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