import { useParams } from "react-router-dom";

export default function FunnelDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">Funnel Details</h1>
      <p className="text-gray-700 mt-4">Funnel ID: {id}</p>
    </div>
  );
}
