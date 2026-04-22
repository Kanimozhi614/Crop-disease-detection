import { useEffect, useState } from "react";
import { getHistory } from "../services/api";

export default function History() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getHistory().then(setData);
  }, []);

  if (!data) return <p>Loading history...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Disease History</h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Crop</th>
              <th className="p-3 text-left">Disease</th>
              <th className="p-3 text-left">Severity</th>
              <th className="p-3 text-left">Action Taken</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{row.date}</td>
                <td className="p-3">{row.crop}</td>
                <td className="p-3">{row.disease}</td>
                <td className="p-3">{row.severity}</td>
                <td className="p-3">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
