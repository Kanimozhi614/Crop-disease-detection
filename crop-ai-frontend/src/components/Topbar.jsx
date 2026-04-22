import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="font-semibold">AI Crop Disease System</h2>

      <div className="flex items-center gap-4">
        <span>👤 Kani Mozhi</span>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
