import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { EMR } from "./components/EMR";

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
