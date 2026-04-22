import { useEffect, useState } from "react";
import { getRecommendations } from "../services/api";

export default function Recommendations() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRecommendations().then(setData);
  }, []);

  if (!data) return <p>Loading recommendations...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Recommendations for {data.disease}
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Treatment" items={data.treatment} />
        <Card title="Prevention" items={data.prevention} />
        <Card title="Chemical Control" items={data.chemical} />
        <Card title="Organic Control" items={data.organic} />
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-2">
          Region-specific Tips ({data.region})
        </h2>
        <ul className="list-disc ml-5">
          {data.tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="list-disc ml-5">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
