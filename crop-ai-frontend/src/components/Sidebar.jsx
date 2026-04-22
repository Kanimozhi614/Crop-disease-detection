import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Upload Image", path: "/upload" },
  { name: "Disease History", path: "/history" },
  { name: "Risk Alerts", path: "/alerts" },
  { name: "Recommendations", path: "/recommendations" },
  { name: "Profile", path: "/profile" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-dark text-white min-h-screen p-5">
      <h1 className="text-xl font-bold mb-8">🌱 Crop AI</h1>

      <nav className="space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block p-2 rounded ${
                isActive ? "bg-primary" : "hover:bg-green-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
