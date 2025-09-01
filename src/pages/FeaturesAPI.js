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
    </main>
  );
}

export default FeaturesAPI;