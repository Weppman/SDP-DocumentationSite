import Sidebar from "../components/Sidebar";

function DiscussionsMeetings() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-0">Discussions/Meetings</h1>
      <Sidebar />

      <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 1</h2>
      <h3 className="text-xl font-bold text-green-700">2025-08-09 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Confirmed tech stack: React frontend and Node.js backend.</li>
            <li>Discussed hosting options: AWS (~$3-4/month) or a free personal server.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Nathan's father provided hosting advice. Joshua emphasized the need for a meeting to finalize plans due to time constraints.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-11 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Joshua:</strong> Took initiative to set up project infrastructure (GitHub repos, hosting on Railway.app).</li>
          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Selected Railway.app for integrated hosting of frontend, backend, and database at ~R80/$5 per month.</li>
            <li>Discussed using a custom domain (potential additional cost).</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Joshua and Nathan were absent due to illness. Team members provided emails for GitHub access.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-12 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Joshua:</strong> Organized a critical in-person meeting for 13/08 to address progress before the first deadline.</li>
            <li><strong>Dewald:</strong> Assigned to bring a laptop to facilitate a Discord call for absent members (Justin, Nathan).</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Joshua expressed urgency for meeting, however Justin had transport issues and Nathan was still ill, which meant both would not make it.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-13 (Meetup)</h3>
        <p className="mb-6">
          <img
            src="/media/discussionsmeetings/20250813%20WhatsApp%2011.08.04.jpeg"
            alt="2025-08-13 Team Discussion Screenshot 1"
            className="mb-4 border rounded shadow"
            style={{ maxWidth: "50%" }}
          />
          <img
            src="/media/discussionsmeetings/20250813%20WhatsApp%20at%2011.08.03.jpeg"
            alt="2025-08-13 Team Discussion Screenshot 2"
            className="mb-4 border rounded shadow"
            style={{ maxWidth: "50%" }}
          />
          <img
            src="/media/discussionsmeetings/20250813%20WhatsApp%20at%2011.08.05.jpeg"
            alt="2025-08-13 Team Discussion Screenshot 3"
            className="mb-4 border rounded shadow"
            style={{ maxWidth: "50%" }}
          />
          <img
            src="/media/discussionsmeetings/20250813%20WhatsApp%20at%2014.53.23.jpeg"
            alt="2025-08-13 Team Discussion Screenshot 4"
            className="mb-4 border rounded shadow"
            style={{ maxWidth: "50%" }}
          />
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Work Assignments:</strong>
            <ul className="list-[circle] pl-6">
              <li><strong>Joshua:</strong> Took on setting up the documentation website.</li>
              <li><strong>Justin:</strong> Assigned to set up a Notion workspace for task tracking.</li>
            </ul>
          </li>
          <li>
            <strong>Technical Decisions:</strong>
            <ul className="list-[circle] pl-6">
              <li>Discussed high-level feature set for the Hiking Logbook (beyond simple storage).</li>
              <li>Maps API integration was mentioned as a future consideration.</li>
              <li>Decided to use Next Auth for authentication.</li>
            </ul>
          </li>
          <li>
            <strong>Other Notes:</strong>
            <ul className="list-[circle] pl-6">
              <li>Nathan was absent but contributed UI design ideas via chat.</li>
              <li>Focus for the sprint was defined: documentation, tech stack setup, and basic authentication.</li>
            </ul>
          </li>
        </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-15 (Meetup)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Meeting was planned to occur. Not much new was discussed, just confirming information from the prior meeting and possible other ideas.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-16 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Justin:</strong> Created the Notion workspace and took on the Achievements UI.</li>
            <li><strong>Nathan:</strong> Took on the Logbook UI.</li>
            <li><strong>Joshua:</strong> Worked on setting up the backend API and authentication.</li>

          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Abandoned Next Auth due to perceived difficulties. Implemented authentication using Clerk.</li>
            <li>Decided to use Google OAuth as the sole sign-in method for simplicity.</li>
            <li>Basic API endpoint secured to only accept requests from localhost and the production URL.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Joshua successfully deployed a working auth prototype. Environment variables (.env files) were shared for local development.</li>
            <li>Nathan pushed initial Logbook UI code to the dev branch.</li>
            <li>Team agreed to hold a Discord standup meeting with stakeholder.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-17 (Stakeholder)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Dewald could not attend the planned call due to family commitments.</li>
            <li>Stakeholder meeting held over Discord. See attached audio recording:</li>
              <li>
                <audio controls className="mt-2">
                  <source src="/media/discussionsmeetings/20250817-122438.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-19 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Justin:</strong> Urgently asked to finalize the Notion task list.</li>
            <li><strong>Dewald:</strong> Asked to check the documentation site and Notion, and to bring a laptop.</li>
            <li><strong>Niel:</strong> Added sources for Git methodology and team info to the documentation site.</li>
          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Documentation site could be pushed to directly to main (no dev branch needed).</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Joshua conducted a final check before the deadline, ensuring all parts of the rubric were covered.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-08-19 (Review)</h3>
      <p className="mb-6">
        empty
      </p>

      <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 2</h2>
      <h3 className="text-xl font-bold text-green-700">2025-08-19 (Stakeholder)</h3>
      <p className="mb-6">
        <img
          src="/media/discussionsmeetings/20250819%20WhatsApp%20at%2015.48.09.jpeg"
          alt="2025-08-19 Chatlog Screenshot 1"
          className="mb-4 border rounded shadow"
          style={{ maxWidth: "50%" }}
        />
        <img
          src="/media/discussionsmeetings/20250819%20WhatsApp%20at%2015.53.02.jpeg"
          alt="2025-08-19 Chatlog Screenshot 2"
          className="mb-4 border rounded shadow"
          style={{ maxWidth: "50%" }}
        />
      </p>

      <h3 className="text-xl font-bold text-green-700">2025-08-27 (Chatlog)</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Work Assignments:</strong>
            <ul className="list-[circle] pl-6">
              <li><strong>Joshua:</strong> Main page, basic SQL query page (accepting injection risks for now), user context for login.</li>
              <li><strong>Niel:</strong> Handle documentation (specifically meeting minutes,) in accordance with rubric.</li>
              <li><strong>Nathan:</strong> Planner/History UI, design mockup, data retrieval and filtering, "Invite" and "Plan Hike" features still cosmetic, needs to move SQL queries to backend.</li>
              <li><strong>Dewald:</strong> Initially assigned to map API (deferred), now working on testing.</li>
              <li><strong>Justin:</strong> Set up Notion workspace, working on assigned page to fetch data and function properly.</li>
            </ul>
          </li>
          <li>
            <strong>Technical Decisions:</strong>
            <ul className="list-[circle] pl-6">
              <li>Direct SQL queries passed to backend for now (security risk acknowledged, to be fixed in future sprint).</li>
              <li>Google Maps API integration deferred to Sprint 3.</li>
              <li>Focus on core system for a single user; multi-user features later.</li>
            </ul>
          </li>
          <li>
            <strong>Other Notes:</strong>
            <ul className="list-[circle] pl-6">
              <li>Joshua will be unavailable the next weekend and emphasized urgency.</li>
              <li>Testing for toolbar, homepage, and authentication is ~95% complete.</li>
              <li>Nathan noted UI issues: accessible profile pages without login, incorrect tab names.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-green-700">2025-08-28 (Chatlog)</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Work Assignments:</strong>
            <ul className="list-[circle] pl-6">
              <li><strong>Nathan:</strong> Raised technical questions about backend functions, SQL on frontend, and UI placement for planned hikes. Encountered database insert issue (needed to retrieve auto-incremented ID for planner_table).</li>
              <li><strong>Joshua:</strong> Confirmed SQL strategy for sprint (direct queries from frontend to backend, security risk to be fixed later).</li>
            </ul>
          </li>
          <li>
            <strong>Technical Decisions:</strong>
            <ul className="list-[circle] pl-6">
              <li>Direct SQL queries from frontend to backend are intentional for this sprint.</li>
              <li>Need to find a way for database insert operations to return generated IDs.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-green-700">2025-08-29 (Chatlog)</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Other Notes:</strong>
            <ul className="list-[circle] pl-6">
              <li>Justin requested a bug tracker; Joshua suggested using GitHub Issues.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-green-700">2025-08-29 (Stakeholder)</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Other Notes:</strong>
            <ul className="list-[circle] pl-6">
              <li>Joshua met with the stakeholder, summarized features and implementations, and reported no problem areas.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-green-700">2025-08-30 (Chatlog)</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Work Assignments:</strong>
            <ul className="list-[circle] pl-6">
              <li><strong>Niel:</strong> Reorganized documentation and suggested someone should handle database diagrams.</li>
              <li><strong>Nathan:</strong> Asked about UI placement for planned hikes; solution not yet decided. Confirmed Dewald was testing his code and successful deployment on Railway.</li>
            </ul>
          </li>
          <li>
            <strong>Technical Decisions:</strong>
            <ul className="list-[circle] pl-6">
              <li>Clerk API limitations for user names; backend solution proposed.</li>
              <li>Database time issue: timestamps stored 2 hours ahead; temporary fix applied.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-green-700">2025-09-01 (Chatlog)</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Work Assignments:</strong>
            <ul className="list-[circle] pl-6">
              <li><strong>Joshua:</strong> Prioritized documentation for Dewald.</li>
              <li><strong>Nathan:</strong> Implementing "Upcoming Hikes" section in Logbook.</li>
              <li><strong>Dewald:</strong> Assigned to work on database and deployment diagrams (testing on components can be pushed forward).</li>
              <li><strong>Niel:</strong> Continued documentation, completed an internal test runthrough as an example, added bugs to GitHub Issues (route protection, goal marking, user info on activity feed), and noted minor UX issues (alerts, confusing communication, lack of friends to invite, planned hikes location, default date/time for new hikes).</li>
            </ul>
          </li>
          <li>
            <strong>Technical Decisions:</strong>
            <ul className="list-[circle] pl-6">
              <li>
                UI/UX Solution:
                <ul className="list-[square] pl-6">
                  <li>"History" renamed to "Logbook" (completed hikes).</li>
                  <li>"Logbook" renamed to "Plan Hike" (creating new hikes).</li>
                  <li>New "Logbook" page will show planned/upcoming hikes above completed ones.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Other Notes:</strong>
            <ul className="list-[circle] pl-6">
              <li>Discussions about whether the API qualified as a REST API</li>
              <li>Bug found in profile stats (date from 1970); cause identified.</li>
              <li>Deployment confirmed on Railway.</li>
              <li>Third-party code (Clerk) documented.</li>
              <li>Sprint review scheduled for tomorrow.</li>
            </ul>
          </li>
        </ul>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 3</h2>
      <h3 className="text-xl font-bold text-green-700">2025-09-02 (Team)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Joshua:</strong> Clerk-UI integration for proper backend functionality.</li>
            <li><strong>Nathan:</strong> Complete Goals feature, implement UI changes, migrate from frontend SQL to API.</li>
            <li><strong>Justin:</strong> Fix goals functionality, friends page implementation, migrate to API.</li>
            <li><strong>Dewald:</strong> Test Nathan's functions, create additional diagrams.</li>
            <li><strong>Niel:</strong> Finish documentation, create diagrams, improve UX.</li>
          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Map functionality rework planned.</li>
            <li>Query optimization from UI - grouping UID for single query to improve Activity Feed performance.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Stakeholder requested documentation of testing methodology and fully expanded feature list with explanations.</li>
            <li>Justification for Railway.app needed in documentation.</li>
            <li>Delete Account feature not properly implemented - requires attention.</li>
            <li>Improve scaffolding for External API integration.</li>
          </ul>
        </li>
      </ul>
      <h3 className="text-xl font-bold text-green-700">2025-09-17 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Niel:</strong> Requested testing methodology breakdown and user test runs for documentation.</li>
            <li><strong>Nathan:</strong> Working on backend migration - moving SQL from frontend to backend.</li>
            <li><strong>Justin:</strong> Confirmed local development setup is working.</li>
          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Backend functions should receive data as JSON instead of direct SQL.</li>
            <li>Local development: run backend with npm, connect frontend to localhost URL.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Nathan encountered CORS errors during local development.</li>
            <li>Follow table issue discovered: one ID is integer, other is string.</li>
            <li>Nathan successfully pushed backend fixes and updated tests.</li>
            <li>Joshua fixed the Follow Table data type inconsistency.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-18 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Need to add "madeby" field to planner_table to track who created hikes.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Nathan identified gap in invite functionality - no way to track who initially planned hikes.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-19 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Added "madeby" column to planner_table instead of hike table for better data structure.</li>
            <li>Bug tracking centralized to GitHub Issues for better organization.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Completed_hike_table auto-increment issue discovered - PK errors when leaving ID blank.</li>
            <li>Joshua confirmed database PK uniqueness but issue persisted in application.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-20 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Completed_hike_table PK issue continues - manual entry required for inserts to work.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-21 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Nathan:</strong> Completed backend migration work.</li>
            <li><strong>Dewald:</strong> Assigned to work on Achievements integration, Map API, and testing.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Completed_hike_table PK issue resolved spontaneously - suspected Railway platform instability.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-22 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Joshua:</strong> Taking responsibility for security audit document for npm.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-23 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Joshua:</strong> Implemented API key security for backend access; began security audit and user context for page access control.</li>
            <li><strong>Justin:</strong> Assigned to remove "Avid Hiker" bio section and rework "Pinned Hikes" feature.</li>
            <li><strong>Niel:</strong> Focused on UI/UX improvements and testing assistance where needed.</li>
          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Backend now requires API key header for all requests.</li>
            <li>Pinned hikes to be stored as a JSON object in the Users table, limited to a maximum of 3 hikes.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Security measures implemented to meet rubric requirements.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-24 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Joshua:</strong> Completed security audit; no vulnerabilities found. Prepared JSON dependency report and audit documentation.</li>
          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Dependency list and audit script to be made available for download on documentation site.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-26 (Chatlog)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Nathan:</strong> Assigned to collect user feedback.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-27 (UAT Report)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>User feedback collected and incorporated into documentation.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-green-700">2025-09-30 (Team)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Work Assignments:</strong>
          <ul className="list-[circle] pl-6">
            <li><strong>Justin:</strong> Pinned Hike feature to be fully implemented, profile pictures to be shown in Search, fix Search for partial keyword search, adjust Statistics page colours.</li>
            <li><strong>Niel:</strong> UX improvements, Semantic HTML cleanup, Documentation, add Test ID labels to all tests to cross reference with documentation, fix generic React App header in browser tabs.</li>
            <li><strong>Dewald:</strong> Map API implementation, Achievements features implementation.</li>
            <li><strong>Nathan:</strong> Fix South African time display issues.</li>
          </ul>
        </li>
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Date/Time picker is inconsistent; considering Bootstrap Date Picker for cross-platform consistency.</li>
            <li>Need to add description/notes field to hikes feature.</li>
            <li>Loading indicator needed for search functionality.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Production data needed for testing.</li>
            <li>Duration in Completed Hike had issues, but seemed to be because of artificially inserted data in an older database.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 4</h2>
      <h3 className="text-xl font-bold text-green-700">2025-09-30 (Stakeholder)</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Technical Decisions:</strong>
          <ul className="list-[circle] pl-6">
            <li>Add text wrapping and minimum height restrictions to Activity Feed and Goals components.</li>
            <li>The ability to set multiple active concurrent hikes was raised as a concern, but may remain as user-side issue without prevention mechanisms.</li>
            <li>Improve search loading indicators.</li>
          </ul>
        </li>
        <li>
          <strong>Other Notes:</strong>
          <ul className="list-[circle] pl-6">
            <li>Upcoming Hikes invite limitation noted - only during creation, not after.</li>
            <li>Description/notes field identified as missing feature for hikes.</li>
            <li>Stakeholder satisfied with audit content despite formatting concerns.</li>
            <li>Made repeated note that documentation should include decisions and justifications for not testing certain functionality and also ignoring certain stakeholder/user feedback.</li>
            <li>Stakeholder noted to include Notion link in documentation for Methodology reasons.</li>
            <li>More user feedback needed from multiple users.</li>
          </ul>
        </li>
      </ul>
    </main>
  );
}

export default DiscussionsMeetings;