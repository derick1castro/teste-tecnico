import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import PoloPage from "./components/pages/PoloPage";
import UpPage from "./components/pages/UpPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PoloPage />} />
        <Route path="/up-page" element={<UpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
