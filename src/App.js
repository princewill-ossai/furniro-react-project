import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Merge from "./Merge";
import SignUp from "./pages/Homepage/SignUp";
import Login from "./pages/Homepage/Login";

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="" element={<Merge/>} />
        <Route path="signUp" element={<SignUp/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
