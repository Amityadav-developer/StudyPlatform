import { Routes, Route } from "react-router-dom";
// MAIN Page Import
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Tutorials from "../pages/Tutorials";
import Notes from "../pages/Notes";
import Projects from "../pages/Projects";
import Roadmaps from "../pages/Roadmaps";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

//  Tutorial Page Import
import Html from "../components/TutorialPage/Html";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/*  Tutorial Route */}

      <Route path="/html" element={<Html />} />
    </Routes>
  );
}
