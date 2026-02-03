import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Progetti from "./component/Progetti";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progetti" element={<Progetti />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
