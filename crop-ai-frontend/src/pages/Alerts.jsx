import { useEffect, useState } from "react";
import { getAlerts } from "../services/api";

export default function Alerts() {
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    getAlerts().then(setAlerts);
  }, []);

  if (!alerts) return <p>Loading alerts...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Risk Alerts</h1>

      <div className="space-y-4">
        {alerts.map((a, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl shadow border-l-8 ${
              a.risk === "High"
                ? "border-red-500 bg-red-50"
                : "border-yellow-500 bg-yellow-50"
            }`}
          >
            <h2 className="font-semibold text-lg">
              {a.crop} – {a.disease}
            </h2>
            <p className="mt-1">
              <b>Risk Level:</b>{" "}
              <span
                className={
                  a.risk === "High" ? "text-red-600" : "text-yellow-600"
                }
              >
                {a.risk}
              </span>
            </p>
            <p className="mt-2 text-gray-700">{a.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
