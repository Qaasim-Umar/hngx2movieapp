import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="movie/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
