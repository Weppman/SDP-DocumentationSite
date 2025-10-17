import Sidebar from "../components/Sidebar";

function TestingFeedback() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-0">Testing/Feedback</h1>
      <Sidebar />
      <h2 className="text-2xl font-bold text-green-700 mb-4">Testing Methodology</h2>
      <p className="mb-6">
        With regards to User Feedback, first create a new header with date, type of testing, and user. From there,
         include a summary, detailed test finding, and actions for the team based on priority

      </p>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Automated Testing</h2>
      <p className="mb-6">
        Jest is the primary framework used for automated testing. Using GitHub Actions, it runs all the tests when a commit is pushed to any branch.
      </p>
        <section className="mb-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <caption className="sr-only">Automated API Test Cases</caption>
            <thead>
              <tr className="bg-green-100">
                <th scope="col" className="border border-gray-300 px-4 py-2 text-left font-bold">Test ID</th>
                <th scope="col" className="border border-gray-300 px-4 py-2 text-left font-bold">Test Description</th>
                <th scope="col" className="border border-gray-300 px-4 py-2 text-left font-bold">Test Scenario</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">BackEnd Express API</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_AUTH_001</th>
                <td className="border border-gray-300 px-4 py-2">GET / returns current time</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a GET request is sent to "/", then the response should return status 200 with a time property</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_AUTH_002</th>
                <td className="border border-gray-300 px-4 py-2">POST /query with missing SQL returns 400</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a POST request is sent to "/query" without SQL in the body, then the response should return status 400 with an error message</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_AUTH_003</th>
                <td className="border border-gray-300 px-4 py-2">POST /query with valid SQL returns rows</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a POST request is sent to "/query" with valid SQL, then the response should return status 200 with query results</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_AUTH_004</th>
                <td className="border border-gray-300 px-4 py-2">POST /uid returns correct user data</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a POST request is sent to "/uid" with user ID array, then the response should return status 200 with correct user data for all IDs</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_AUTH_005</th>
                <td className="border border-gray-300 px-4 py-2">Rejects requests with no or wrong API key</td>
                <td className="border border-gray-300 px-4 py-2">Given no API key or wrong API key, when requests are made to any endpoint, then the responses should return status 401 or 403 accordingly</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_PROFILE_001</th>
                <td className="border border-gray-300 px-4 py-2">GET /profile/:id/friends returns friends</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a GET request is sent to "/profile/1/friends", then the response should return friend data for user 1</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_PROFILE_002</th>
                <td className="border border-gray-300 px-4 py-2">GET /profile/goals/:userId returns personal goals</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a GET request is sent to "/profile/goals/1", then the response should return personal goals for user 1</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_PROFILE_003</th>
                <td className="border border-gray-300 px-4 py-2">GET /profile/global-goals/:userId returns global goals</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a GET request is sent to "/profile/global-goals/1", then the response should return global goals for user 1</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_PROFILE_004</th>
                <td className="border border-gray-300 px-4 py-2">GET /profile/completed-hikes/:id returns hikes and trails</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a GET request is sent to "/profile/completed-hikes/1", then the response should return completed hikes and trail data</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_FOLLOW_001</th>
                <td className="border border-gray-300 px-4 py-2">POST /follow/:id follows user</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a POST request is sent to "/follow/2" with follower ID, then the response should confirm successful follow</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_FOLLOW_002</th>
                <td className="border border-gray-300 px-4 py-2">DELETE /follow/:id unfollows user</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a DELETE request is sent to "/follow/2" with follower ID, then the response should confirm successful unfollow</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_GOAL_001</th>
                <td className="border border-gray-300 px-4 py-2">PUT /profile/mark-done/:goalId/:userId marks goal</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a PUT request is sent to "/profile/mark-done/101/1", then the response should confirm goal marked as done</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_GOAL_002</th>
                <td className="border border-gray-300 px-4 py-2">POST /profile/add-goal/:id adds goal</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a POST request is sent to "/profile/add-goal/1" with goal data, then the response should return the newly created goal</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_GOAL_003</th>
                <td className="border border-gray-300 px-4 py-2">PUT /profile/edit-goal/:goalId/:id edits goal</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a PUT request is sent to "/profile/edit-goal/101/1" with updated goal data, then the response should return the updated goal</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_GOAL_004</th>
                <td className="border border-gray-300 px-4 py-2">DELETE /profile/edit-goal/:goalId/:userId deletes goal</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a DELETE request is sent to "/profile/edit-goal/101/1", then the response should confirm goal deletion</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_USERS_001</th>
                <td className="border border-gray-300 px-4 py-2">GET /users/search returns users</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a GET request is sent to "/users/search" with username query, then the response should return matching users</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">API_USERS_002</th>
                <td className="border border-gray-300 px-4 py-2">GET /users/random returns random users</td>
                <td className="border border-gray-300 px-4 py-2">Given a valid API key exists, when a GET request is sent to "/users/random" with parameters, then the response should return random user data</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">User Context & Authentication</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_AUTH_001</th>
                <td className="border border-gray-300 px-4 py-2">UserContext sets userData correctly when user exists</td>
                <td className="border border-gray-300 px-4 py-2">Given a user is authenticated, when UserContext initializes, then it should fetch and set user data from backend</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_AUTH_002</th>
                <td className="border border-gray-300 px-4 py-2">UserContext sets visitor status when no user</td>
                <td className="border border-gray-300 px-4 py-2">Given no user is authenticated, when UserContext initializes, then it should set status to visitor with null values</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_AUTH_003</th>
                <td className="border border-gray-300 px-4 py-2">UserContext handles backend errors gracefully</td>
                <td className="border border-gray-300 px-4 py-2">Given backend API fails, when UserContext fetches user data, then it should fallback to visitor status</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_AUTH_004</th>
                <td className="border border-gray-300 px-4 py-2">UserContext inserts new user if not exists</td>
                <td className="border border-gray-300 px-4 py-2">Given authenticated user doesn't exist in database, when UserContext initializes, then it should create new user record</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Navigation & Toolbar</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_NAV_001</th>
                <td className="border border-gray-300 px-4 py-2">Toolbar renders navigation links for logged-in user</td>
                <td className="border border-gray-300 px-4 py-2">Given user is authenticated, when Toolbar renders, then all navigation links (Home, Plan Hike, Logbook, etc.) should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_NAV_006</th>
                <td className="border border-gray-300 px-4 py-2">ViewProfileButton renders with correct link and text</td>
                <td className="border border-gray-300 px-4 py-2">Given userID is provided, when ViewProfileButton renders, then it should display "View Profile" text with correct profile link</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_NAV_007</th>
                <td className="border border-gray-300 px-4 py-2">ViewProfileButton applies correct CSS styling</td>
                <td className="border border-gray-300 px-4 py-2">Given ViewProfileButton renders, when component is displayed, then it should have proper border, padding, text, and hover transition classes</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_NAV_008</th>
                <td className="border border-gray-300 px-4 py-2">ViewProfileButton handles any userID value</td>
                <td className="border border-gray-300 px-4 py-2">Given any numeric userID, when ViewProfileButton renders, then it should render without crashing and create appropriate profile link</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Home & Activity Feed</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_HOME_001</th>
                <td className="border border-gray-300 px-4 py-2">Home renders activity feed for logged-in user</td>
                <td className="border border-gray-300 px-4 py-2">Given user is authenticated, when Home component loads, then activity feed with posts should display</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_HOME_002</th>
                <td className="border border-gray-300 px-4 py-2">Home submits new post form successfully</td>
                <td className="border border-gray-300 px-4 py-2">Given user fills post form, when Post button is clicked, then new activity should be submitted to backend</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_HOME_003</th>
                <td className="border border-gray-300 px-4 py-2">Home shows empty feed message when no posts</td>
                <td className="border border-gray-300 px-4 py-2">Given no activity posts exist, when feed loads, then "No activity yet" message should display</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_HOME_004</th>
                <td className="border border-gray-300 px-4 py-2">Home shows visitor message for non-signed-in users</td>
                <td className="border border-gray-300 px-4 py-2">Given user is not signed in, when Home renders, then "Please sign in to add a post" message should display instead of form</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_HOME_005</th>
                <td className="border border-gray-300 px-4 py-2">Home handles feed fetch errors gracefully</td>
                <td className="border border-gray-300 px-4 py-2">Given backend API fails to fetch feed, when Home component loads, then it should fallback to empty feed message without crashing</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Search & User Discovery</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_001</th>
                <td className="border border-gray-300 px-4 py-2">Search renders suggested users with follow toggle</td>
                <td className="border border-gray-300 px-4 py-2">Given user is logged in, when Search component loads, then it should display suggested users with follow/unfollow buttons</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_002</th>
                <td className="border border-gray-300 px-4 py-2">Search finds users and displays results with follow toggle</td>
                <td className="border border-gray-300 px-4 py-2">Given user searches for username, when results return, then matching users should display with follow status</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_003</th>
                <td className="border border-gray-300 px-4 py-2">Search refreshes suggested users on refresh button click</td>
                <td className="border border-gray-300 px-4 py-2">Given suggested users are displayed, when refresh button is clicked, then new random users should replace current suggestions</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_004</th>
                <td className="border border-gray-300 px-4 py-2">Search displays message when no users found</td>
                <td className="border border-gray-300 px-4 py-2">Given search returns no results, when search completes, then "No users found" message should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_005</th>
                <td className="border border-gray-300 px-4 py-2">Search logs error when fetching friends fails</td>
                <td className="border border-gray-300 px-4 py-2">Given friends API call fails, when component initializes, then error should be logged to console with appropriate message</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_006</th>
                <td className="border border-gray-300 px-4 py-2">Search logs error when fetching suggested users fails</td>
                <td className="border border-gray-300 px-4 py-2">Given suggested users API call fails, when component initializes, then error should be logged to console with appropriate message</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_007</th>
                <td className="border border-gray-300 px-4 py-2">Search logs error when search API fails</td>
                <td className="border border-gray-300 px-4 py-2">Given search API call fails, when user performs search, then error should be logged to console with appropriate message</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_008</th>
                <td className="border border-gray-300 px-4 py-2">Search allows unfollowing users and updates UI</td>
                <td className="border border-gray-300 px-4 py-2">Given user is following someone, when unfollow button is clicked, then button should change to follow and friends state should update</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_009</th>
                <td className="border border-gray-300 px-4 py-2">Search logs error when follow/unfollow API fails</td>
                <td className="border border-gray-300 px-4 py-2">Given follow/unfollow API call fails, when user toggles follow, then error should be logged to console and UI should not update</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_010</th>
                <td className="border border-gray-300 px-4 py-2">Search filters out current user from search results</td>
                <td className="border border-gray-300 px-4 py-2">Given search returns current user in results, when results are processed, then current user should be filtered out from displayed results</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_011</th>
                <td className="border border-gray-300 px-4 py-2">Search handles multiple users and filters current user correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given search returns multiple users including current user, when results are processed, then only other users should display and current user should be filtered out</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_SEARCH_012</th>
                <td className="border border-gray-300 px-4 py-2">Search renders avatars correctly for users with and without images</td>
                <td className="border border-gray-300 px-4 py-2">Given users with and without profile images, when search results display, then avatars should render correctly with initials fallback for missing images</td>
              </tr>

              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Plan Hike Feature</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PLAN_001</th>
                <td className="border border-gray-300 px-4 py-2">PlanHike renders header and filters</td>
                <td className="border border-gray-300 px-4 py-2">Given user accesses Plan Hike page, when component loads, then header and all filter inputs should display with hike data</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PLAN_002</th>
                <td className="border border-gray-300 px-4 py-2">PlanHike filters hikes based on input</td>
                <td className="border border-gray-300 px-4 py-2">Given multiple hikes exist, when name filter is applied, then only matching hikes should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PLAN_003</th>
                <td className="border border-gray-300 px-4 py-2">PlanHike opens and closes plan hike modal</td>
                <td className="border border-gray-300 px-4 py-2">Given hike card is expanded, when Plan Hike button is clicked, then modal should open and close correctly</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PLAN_004</th>
                <td className="border border-gray-300 px-4 py-2">PlanHike validates date before planning hike</td>
                <td className="border border-gray-300 px-4 py-2">Given past date is selected, when Plan Hike is clicked, then modal should remain open for date correction</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PLAN_005</th>
                <td className="border border-gray-300 px-4 py-2">PlanHike plans hike with future date</td>
                <td className="border border-gray-300 px-4 py-2">Given future date is selected, when Plan Hike is clicked, then hike should be successfully planned and modal closed</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PLAN_006</th>
                <td className="border border-gray-300 px-4 py-2">PlanHike invites friends correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given friends are available, when friends are invited and hike is planned, then invitations should be sent successfully</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Logbook & Hike Management</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_LOGBOOK_001</th>
                <td className="border border-gray-300 px-4 py-2">Logbook renders loading message when no userID</td>
                <td className="border border-gray-300 px-4 py-2">Given no user is authenticated, when Logbook renders, then loading message should display</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_LOGBOOK_002</th>
                <td className="border border-gray-300 px-4 py-2">Logbook renders upcoming and completed hikes</td>
                <td className="border border-gray-300 px-4 py-2">Given user is authenticated, when Logbook loads, then both upcoming and completed hikes should display with correct data</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_LOGBOOK_003</th>
                <td className="border border-gray-300 px-4 py-2">Logbook opens and closes edit modal</td>
                <td className="border border-gray-300 px-4 py-2">Given completed hikes exist, when edit button is clicked, then edit modal should open and close correctly</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_LOGBOOK_004</th>
                <td className="border border-gray-300 px-4 py-2">Logbook filters completed hikes by name</td>
                <td className="border border-gray-300 px-4 py-2">Given multiple hikes exist, when name filter is applied, then only matching hikes should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_LOGBOOK_005</th>
                <td className="border border-gray-300 px-4 py-2">Logbook starts and stops upcoming hikes</td>
                <td className="border border-gray-300 px-4 py-2">Given upcoming hikes exist, when start and stop buttons are clicked, then hike status should update correctly</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_LOGBOOK_006</th>
                <td className="border border-gray-300 px-4 py-2">Logbook accepts and declines pending invites</td>
                <td className="border border-gray-300 px-4 py-2">Given pending hike invites exist, when accept/decline buttons are clicked, then appropriate actions should be taken</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Profile Management</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_001</th>
                <td className="border border-gray-300 px-4 py-2">Profile shows empty completed goals message</td>
                <td className="border border-gray-300 px-4 py-2">Given no completed goals, when Completed tab is selected, then "No goals completed" message should display</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_002</th>
                <td className="border border-gray-300 px-4 py-2">Profile stats tab renders with empty data</td>
                <td className="border border-gray-300 px-4 py-2">Given no goals data, when Statistics tab is selected, then Stats component should render with zero counts</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_003</th>
                <td className="border border-gray-300 px-4 py-2">Profile allows toggling pinned hikes</td>
                <td className="border border-gray-300 px-4 py-2">Given pinned hikes are displayed, when pin button is clicked, then hike should be unpinned and removed from display</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_004</th>
                <td className="border border-gray-300 px-4 py-2">Profile shows empty friends message on fetch error</td>
                <td className="border border-gray-300 px-4 py-2">Given friends API fails, when Following tab is selected, then "Not following anyone" message should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_005</th>
                <td className="border border-gray-300 px-4 py-2">Profile allows full goal management workflow</td>
                <td className="border border-gray-300 px-4 py-2">Given personal goals exist, when user edits, marks done, and deletes goals, then all operations should complete successfully</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_006</th>
                <td className="border border-gray-300 px-4 py-2">Profile shows empty completed goals message</td>
                <td className="border border-gray-300 px-4 py-2">Given no completed goals, when Completed tab is selected, then "No goals or achievements completed yet" message should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_007</th>
                <td className="border border-gray-300 px-4 py-2">Profile stats tab renders Stats component with empty data</td>
                <td className="border border-gray-300 px-4 py-2">Given no goals data, when Statistics tab is selected, then Stats component should render with zero counts for both user and global goals</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_008</th>
                <td className="border border-gray-300 px-4 py-2">Profile shows fallback when fetching friends fails</td>
                <td className="border border-gray-300 px-4 py-2">Given friends API network error occurs, when Following tab is selected, then appropriate empty state message should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_PROFILE_009</th>
                <td className="border border-gray-300 px-4 py-2">Profile allows unfollowing friends</td>
                <td className="border border-gray-300 px-4 py-2">Given user has friends, when Unfollow button is clicked in Following tab, then friend should be removed from the list</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Statistics & Analytics</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_001</th>
                <td className="border border-gray-300 px-4 py-2">Stats dashboard renders all sections correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given stats data is provided, when Stats component renders, then all sections (Completion, Total Hikes, Goals, etc.) should display</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_002</th>
                <td className="border border-gray-300 px-4 py-2">Stats calculates completion percentage correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given user goals and completed goals, when Stats processes data, then correct completion percentage should display</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_003</th>
                <td className="border border-gray-300 px-4 py-2">Stats displays correct hike statistics</td>
                <td className="border border-gray-300 px-4 py-2">Given completed hikes data, when Stats processes it, then total hikes, longest month, and latest hike should display correctly</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_004</th>
                <td className="border border-gray-300 px-4 py-2">Stats handles empty data states correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given no goals or hikes data, when Stats renders, then it should display zeros and "None" appropriately</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_005</th>
                <td className="border border-gray-300 px-4 py-2">Stats toggles doughnut chart slices on click</td>
                <td className="border border-gray-300 px-4 py-2">Given doughnut chart is displayed, when legend items are clicked, then corresponding slices should toggle visibility</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_006</th>
                <td className="border border-gray-300 px-4 py-2">Stats processes hike data for charts correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given completed hikes data, when Stats processes it, then radial and sunburst charts should render with correct data</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_007</th>
                <td className="border border-gray-300 px-4 py-2">Stats calculates longest hiking month correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given hikes distributed across different months, when Stats processes the data, then it should correctly identify the month with the most hikes</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_008</th>
                <td className="border border-gray-300 px-4 py-2">Stats renders completed goals and achievements list</td>
                <td className="border border-gray-300 px-4 py-2">Given completed goals from both personal and global sources, when Stats renders, then all completed goals should appear in the goals list section</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_009</th>
                <td className="border border-gray-300 px-4 py-2">Stats toggles all doughnut chart slices sequentially</td>
                <td className="border border-gray-300 px-4 py-2">Given doughnut chart is displayed, when all legend items are clicked on and off, then all slices should toggle visibility correctly and labels remain present</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_010</th>
                <td className="border border-gray-300 px-4 py-2">Stats processes hike data for radial and sunburst charts</td>
                <td className="border border-gray-300 px-4 py-2">Given completed hikes data, when Stats processes it, then both ApexCharts radial bar and Highcharts sunburst should render with correct data and trail names</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_011</th>
                <td className="border border-gray-300 px-4 py-2">Stats handles sunburst chart interactions</td>
                <td className="border border-gray-300 px-4 py-2">Given sunburst chart is displayed, when chart interactions occur, then the chart should handle drilldown and restore functionality correctly</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_012</th>
                <td className="border border-gray-300 px-4 py-2">Stats handles unknown trails and missing dates gracefully</td>
                <td className="border border-gray-300 px-4 py-2">Given hike data with unknown trail IDs and null dates, when Stats processes it, then it should handle these edge cases without errors and display appropriate fallbacks</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_013</th>
                <td className="border border-gray-300 px-4 py-2">Stats toggles all doughnut slices sequentially</td>
                <td className="border border-gray-300 px-4 py-2">Given doughnut chart is displayed, when all legend items are clicked on and off, then all slices should toggle visibility correctly and labels remain present</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_014</th>
                <td className="border border-gray-300 px-4 py-2">Stats renders multiple months correctly for longestMonth calculation</td>
                <td className="border border-gray-300 px-4 py-2">Given hikes distributed across different months, when Stats processes the data, then it should correctly identify the month with the most hikes and display the count</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_STATS_015</th>
                <td className="border border-gray-300 px-4 py-2">Stats calculates all top stats card values correctly</td>
                <td className="border border-gray-300 px-4 py-2">Given comprehensive hike and goal data, when Stats processes it, then all top stats (completion percentage, total hikes, longest month, latest hike date) should display accurate calculated values</td>
              </tr>


              <tr className="bg-blue-50">
                <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center font-bold text-blue-800">
                  <h3 className="text-xl font-bold text-green-700">Utility Functions</h3>
                </td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_UTILS_001</th>
                <td className="border border-gray-300 px-4 py-2">Stats utils calculate completion percentage</td>
                <td className="border border-gray-300 px-4 py-2">Given user goals, global goals, and completed goals, when getCompletionPercent is called, then correct percentage should be returned</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_UTILS_002</th>
                <td className="border border-gray-300 px-4 py-2">Stats utils process hike statistics</td>
                <td className="border border-gray-300 px-4 py-2">Given completed hikes data, when getHikeStats is called, then total hikes, longest month, and latest date should be calculated</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_UTILS_003</th>
                <td className="border border-gray-300 px-4 py-2">Stats utils toggle chart slices</td>
                <td className="border border-gray-300 px-4 py-2">Given current hidden slices array and slice index, when toggleSlice is called, then slice should be added/removed from array</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_UTILS_004</th>
                <td className="border border-gray-300 px-4 py-2">Stats utils calculate completion percentage with mixed goals</td>
                <td className="border border-gray-300 px-4 py-2">Given user goals, global goals, and completed goals from both sources, when getCompletionPercent is called, then correct weighted percentage should be returned</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 px-4 py-2 font-medium">FE_UTILS_005</th>
                <td className="border border-gray-300 px-4 py-2">Stats utils process comprehensive hike statistics</td>
                <td className="border border-gray-300 px-4 py-2">Given completed hikes data across multiple months and trails, when getHikeStats is called, then total hikes, longest month with name, and latest date should be calculated correctly</td>
              </tr>

            </tbody>
          </table>
        </section>


      <h2 className="text-2xl font-bold text-green-700 mb-4">User Feedback</h2>

      <h3 className="text-xl font-bold text-green-700 mb-4">2025-08-31 - Local FrontEnd No BackEnd (Internal)</h3>
      <p className="text-xl font-bold">
        Summary
      </p>
      <p className="mb-6">
        The test was conducted on 2025-08-31 by a dev member acting as a normal user on the latest dev branch of the
        front-end, commit <a
          href="https://github.com/Weppman/SDP-FrontEnd/commit/b9b3f504e6f318fd0e5b0dd413ecda8bc2914cb5"
          className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          b9b3f50
        </a>, run locally with no backend. While the user was able to run through of the entire site, there were
         some concerns regarding User Experience.
      </p>
      <p className="text-xl font-bold">
        Findings
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Authentication & Onboarding:</strong> The user had no issues with Clerk authentication. However,
           entering their full name with a space in between as a username was rejected, only after it noted it had
           to only be letters, numbers, - and _.
        </li>
        <li>
          <strong>Activity Feed & Adding Activities:</strong> The activity feed confused the user, as posts did not
           indicate which user made the posts. After using "Add Activity," which added an entry for "Planning to Hike"
            it just added it to the feed with no way to determine that it was theirs.
        </li>
        <li>
          <strong>Logbook & Filters:</strong> The filter sidebar in the Logbook was confusing, with an empty "Image
           goes here" and alphanumeric Difficulty/Duration fields.
        </li>
        <li>
          <strong>Planning Hikes:</strong> When selecting a hike, the calendar's time slider was misaligned. After
           setting a date and trying to invite friends (none available since the backend wasn't available, however
           it lead to confusion about whether this was a bug), "Plan Hike" triggered an alert confirming it. The user
           was confused where to find the new hike they just made (after which clarification was made the backend wasn't 
           active)
        </li>
        <li>
          <strong>Profile Page & Pinned Hikes:</strong> The profile showed 3 pinned hikes and 3 followers as default, but
           unpinning hikes didn't update the count. Generic information should be changed to be properly empty later.
        </li>
        <li>
          <strong>Creating Hikes & Time Bugs:</strong> The user created two hikes: one in the future (successful), 
          and one in the past (able to select date/time, but options to invite friends or plan hike were greyed out).
        </li>
        <li>
          <strong>Goals Feature:</strong> User wanted to add a goal with just a title to "Hike Table Mountain", but adding
           a goal required both a title and description. After creating a goal, the user couldn't mark it as done, only being
           able to edit the title/description.
        </li>
        <li>
          <strong>General Navigation:</strong> The user tested profile functions, logged out/in, and used "Call API,"
           which confirmed login status with no issues besides a Clerk error due to no backend. When they logged out, they 
           noticed that they could still go to logbook, history and profile which didn't include any relevant information.
        </li>
      </ul>
      <p className="text-xl font-bold">
        Actions
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>High priority:</strong>
          <ul className="list-[circle] pl-6">
            <li>Protect routes when logged out</li>
            <li>Allow goals to be marked as complete</li>
          </ul>
        </li>
        <li>
          <strong>Medium priority:</strong>
          <ul className="list-[circle] pl-6">
            <li>Improve confirmation/error messages</li>
            <li>Fix UI for filter tab (Difficulty/Duration/Image here)</li>
            <li>Replace placeholder information to be properly empty</li>
            <li>Add clarification on empty friends list when planning hikes</li>
            <li>Indicate username on posts in activity feed</li>
          </ul>
        </li>
        <li>
          <strong>Low priority:</strong>
          <ul className="list-[circle] pl-6">
            <li>Improve user flow (know where to logically find hikes)</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700 mb-4">2025-09-27 - Deployed User Test (External)</h3>
      <p className="text-xl font-bold">
        Summary
      </p>
      <p className="mb-6">
        The test was conducted on 2025-09-27 by an external user on the deployed master branch of the front-end, commit <a
          href="https://github.com/Weppman/SDP-FrontEnd/commit/120bc55"
          className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          120bc55
        </a>. The user explored various features and identified several usability issues
        related to form validation, UI consistency, and feature clarity. Remarks taken from user.
      </p>
      <p className="text-xl font-bold">
        Findings
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Add Activity:</strong> Post button does not protect against double submissions.
        </li>
        <li>
          <strong>Plan Hike:</strong> Filters were free text with no indication as to valid values. Difficulty should be a dropdown
          selection list or predefined values and Duration should be a range of time using time selectors as
          guessing an exact time makes it non-friendly.
        </li>
        <li>
          <strong>Plan Hike:</strong> Invite button just shows modal with “Invite Friends”. How do you add friends if none are
          shown? A guide here as to how to grow a friend list would be helpful. How do you add hikes to the
          Plan Hike list if you plan to do one not present in the list?
        </li>
        <li>
          <strong>Log Book:</strong> Input fields need to be consistent across the site. Date pickers should be used consistently
          when requiring date input. Text fields allow for inconsistent/invalid input values. Same with edit option
          in completed hikes, time select should be used to prevent random garbage input.
        </li>
        <li>
          <strong>Profile:</strong> Had 3 pinned hikes on a newly created profile? Who put these here? Achievements was not
          correct i.e. I completed a hike, but the First Hike still shows 0/1 complete. Same with Five Hike. Counter
          at the top did not update. I unpinned the 3 hikes, but it still showed 3 hikes pinned. When I refreshed
          the page, the Profile page came back with the 3 pinned hikes again. How do you add to the pinned list?
          Editting of goals should not cause buttons to change size. Rather place edit fields below the buttons to
          prevent resizing.
        </li>
        <li>
          <strong>Search Users:</strong> Search filter doesn’t seem to work intuitively. Typed J and it came up with no users even
          though there was a Justin and Joshua. Had to type full name and hit search before it showed result.
          Better to have progressive searches that filter as you type matching on either starts with or contains
          searches.
        </li>
      </ul>
      <p className="text-xl font-bold">
        Actions
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>High priority:</strong>
          <ul className="list-[circle] pl-6">
            <li>Add double-submission protection to activity posts</li>
            <li>Fix profile pinned hikes and achievement counters</li>
          </ul>
        </li>
        <li>
          <strong>Medium priority:</strong>
          <ul className="list-[circle] pl-6">
            <li>Replace free-text filters with dropdowns and time selectors</li>
            <li>Improve friend invitation and hike planning flow</li>
            <li>Standardize input fields with date/time pickers</li>
            <li>Implement progressive search for user lookup</li>
          </ul>
        </li>
        <li>
          <strong>Low priority:</strong>
          <ul className="list-[circle] pl-6">
            <li>Improve button layout during goal editing to prevent resizing</li>
          </ul>
        </li>
      </ul>
    </main>
  );
}

export default TestingFeedback;