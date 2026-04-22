import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Kani Mozhi",
    email: "kani@example.com",
    region: "Tamil Nadu",
    crops: "Tomato, Rice",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <Input label="Full Name" name="name" value={user.name} onChange={handleChange} />
        <Input label="Email" name="email" value={user.email} onChange={handleChange} />
        <Input label="Region" name="region" value={user.region} onChange={handleChange} />
        <Input
          label="Preferred Crops"
          name="crops"
          value={user.crops}
          onChange={handleChange}
        />

        <button
          onClick={handleSave}
          className="bg-primary text-white px-6 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      <input
        {...props}
        className="w-full border p-3 rounded-lg"
      />
    </div>
  );
}
