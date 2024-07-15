import LoginPage from "./pages/login.page";
import SignupPage from "./pages/signup.page";
import Homepage from "./pages/home.page";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/auth.context";

function App() {
  const { authUser } = useAuthContext();
  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <Homepage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <SignupPage />}
      />
    </Routes>
  );
}

export default App;
