import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/index.js";
import { EMR } from "./components/EMR/index.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emr" element={<EMR />} />
      </Routes>
    </div>
  );
}

export default App;
