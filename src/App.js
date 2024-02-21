import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/Listing/List/List";
import Card from "./components/Profile/Card/Card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List totalItems={200} itemsPerPage={10} />} />
        <Route path="/profile" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
