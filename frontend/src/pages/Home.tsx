import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Prompt Funnels</h1>
      <Link to="/create" className="text-blue-500 underline">
        Create a New Funnel
      </Link>
    </div>
  );
}
