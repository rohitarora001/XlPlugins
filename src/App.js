import React from "react";
import Index from "./Components/Index/Index";
import Profile from "./Components/profile/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/users/:userId" element={<Profile />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
