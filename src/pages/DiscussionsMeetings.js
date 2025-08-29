import Sidebar from "../components/Sidebar";

function DiscussionsMeetings() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-0">Discussions/Meetings</h1>
      <Sidebar />
      <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 1</h2>
      <h3 className="text-xl font-bold text-green-700 mb-8">2025-xx-xx</h3>
      <p className="mb-6">
        empty
      </p>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 2</h2>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 3</h2>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Sprint 4</h2>
    </main>
  );
}

export default DiscussionsMeetings;