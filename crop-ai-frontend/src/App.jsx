import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import History from "./pages/History";
import Alerts from "./pages/Alerts";
import Recommendations from "./pages/Recommendations";
import Profile from "./pages/Profile";
import DashboardLayout from "./layouts/DashboardLayout";
import Result from "./pages/Result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/upload"
          element={
            <DashboardLayout>
              <Upload />
            </DashboardLayout>
          }
        />
        <Route
          path="/history"
          element={
            <DashboardLayout>
              <History />
            </DashboardLayout>
          }
        />
        <Route
          path="/alerts"
          element={
            <DashboardLayout>
              <Alerts />
            </DashboardLayout>
          }
        />
        <Route
  path="/result"
  element={
    <DashboardLayout>
      <Result />
    </DashboardLayout>
  }
/>

        <Route
          path="/recommendations"
          element={
            <DashboardLayout>
              <Recommendations />
            </DashboardLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
