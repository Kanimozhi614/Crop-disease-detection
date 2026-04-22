import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/api";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getDashboardStats().then(setStats);
  }, []);

  if (!stats) return <p>Loading dashboard...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard title="Total Scans" value={stats.totalScans} color="text-blue-600" />
        <StatCard title="Healthy" value={stats.healthy} color="text-green-600" />
        <StatCard title="Diseased" value={stats.diseased} color="text-red-600" />
        <StatCard title="High Risk" value={stats.highRisk} color="text-orange-600" />
        <StatCard title="Success Rate" value={`${stats.successRate}%`} color="text-primary" />
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Recent Activity</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th>Crop</th>
              <th>Disease</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {stats.recent.map((r, i) => (
              <tr key={i} className="border-t">
                <td>{r.crop}</td>
                <td>{r.disease}</td>
                <td>{r.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
