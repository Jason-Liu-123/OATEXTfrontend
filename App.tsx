import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/Main";
import ReadPage from "./components/Read";
import LibraryPage from "./components/Library";
import MePage from "./components/Me";
import PostPage from "./components/Post";

const App: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/read" element={<ReadPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
