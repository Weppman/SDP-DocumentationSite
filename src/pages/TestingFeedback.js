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
      <h2 className="text-2xl font-bold text-green-700 mb-4">Automated Tests</h2>
      <p className="mb-6">
        empty
      </p>
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
    </main>
  );
}

export default TestingFeedback;