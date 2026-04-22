import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Register() {
  return (
    <AuthLayout title="Create Account">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg"
          required
        />

        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-dark">
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
