import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { detectDisease } from "../services/api";

export default function Upload() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState("");
  const [stage, setStage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !crop || !stage) return alert("Fill all fields");

    setLoading(true);
    const result = await detectDisease({ image, crop, stage });
    setLoading(false);

    navigate("/result", { state: result });
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Crop Image</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border p-3 rounded"
        />

        <select
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="w-full border p-3 rounded"
        >
          <option value="">Select Crop</option>
          <option>Tomato</option>
          <option>Potato</option>
          <option>Rice</option>
          <option>Wheat</option>
        </select>

        <select
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          className="w-full border p-3 rounded"
        >
          <option value="">Growth Stage</option>
          <option>Seedling</option>
          <option>Vegetative</option>
          <option>Flowering</option>
          <option>Fruiting</option>
        </select>

        <button className="w-full bg-primary text-white py-3 rounded">
          Analyze
        </button>
      </form>

      {loading && (
        <div className="mt-6 text-center">
          <p className="animate-pulse text-lg font-semibold text-primary">
            Analyzing crop image...
          </p>
        </div>
      )}
    </div>
  );
}
