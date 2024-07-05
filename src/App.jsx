import LoginPage from "./pages/login.page";
import SignupPage from "./pages/signup.page";
import Homepage from "./pages/home.page";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
