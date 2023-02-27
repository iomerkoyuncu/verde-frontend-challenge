import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
