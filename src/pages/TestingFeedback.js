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