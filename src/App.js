import { useEffect } from "react";
import LegBuilder from "./pages/LegBuilder";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LegsList from "./pages/LegsList";

function App() {
  useEffect(() => {
    document.title = "AlgoTest YC22";
  }, []);

  return (
    <Router>
      <Routes>
        <Route index element={<LegBuilder />} />
        <Route exact path="legs" element={<LegsList />} />
      </Routes>
    </Router>
  );
}

export default App;
