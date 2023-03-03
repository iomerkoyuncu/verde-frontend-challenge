import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UpdatePost from "./pages/UpdatePost";
import NewPost from "./pages/NewPost";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<UpdatePost />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
