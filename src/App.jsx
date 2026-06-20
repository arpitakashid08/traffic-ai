import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserSelection from "./pages/UserSelection";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Organizer from "./pages/Organizer";
import Police from "./pages/Police";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* First page */}
        <Route path="/" element={<UserSelection />} />

        {/* User forms */}
        <Route path="/organizer" element={<Organizer />} />
        <Route path="/police" element={<Police />} />

        {/* Main application */}
        <Route path="/home" element={<Home />} />
        <Route path="/predict" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />

      </Routes>
    </BrowserRouter>
  );
}