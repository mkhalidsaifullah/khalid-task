// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList.js";
import UserProfile from "./components/UserProfile.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<UserList totalItems={200} itemsPerPage={10} />}
        />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
