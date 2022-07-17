import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/index.js";
import { EMR } from "./components/EMR/index.js";
import { MainEMR } from "./components/MainEMR/index.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emr" element={<EMR />} />
        <Route path="/mainEmr" element={<MainEMR />} />
      </Routes>
    </div>
  );
}

export default App;
