import { useLocation } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  if (!state) return <p>No data found.</p>;

  const severityColor =
    state.severity === "High"
      ? "bg-red-500"
      : state.severity === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Detection Result</h1>

      {/* Disease Card */}
      <div className="bg-white p-6 rounded-xl shadow space-y-3">
        <p><b>Disease:</b> {state.disease}</p>

        {/* Confidence Bar */}
        <div>
          <p className="text-sm">Confidence</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full"
              style={{ width: `${state.confidence}%` }}
            />
          </div>
          <p className="text-sm mt-1">{state.confidence}%</p>
        </div>

        {/* Severity Badge */}
        <span className={`text-white px-3 py-1 rounded ${severityColor}`}>
          Severity: {state.severity}
        </span>

        <p><b>Risk Level:</b> {state.risk}</p>
        <p><b>Thermal Support:</b> {state.thermal ? "Enabled" : "Disabled"}</p>
      </div>


      <div className="bg-white p-5 rounded shadow">
        <h2 className="font-semibold mb-2">Weather Conditions</h2>
        <p>Temperature: {state.weather.temperature}°C</p>
        <p>Humidity: {state.weather.humidity}%</p>
        <p>Rainfall: {state.weather.rainfall} mm</p>
      </div>

      <div className="bg-white p-5 rounded shadow">
        <h2 className="font-semibold mb-2">Recommendations</h2>
        <ul className="list-disc ml-5">
          {state.recommendations.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
