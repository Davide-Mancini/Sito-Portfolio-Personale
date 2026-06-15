import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Progetti from "./component/Progetti";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <HashRouter>
      <div style={{ background: "#1a1a1a", minHeight: "100vh" }}>
        <Sidebar />
        <div className="sidebar-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progetti" element={<Progetti />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
