// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/Listing/List/List";
import UserProfile from "./components/Profile/Card/Card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<UserList totalItems={200} itemsPerPage={10} />}
        />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
