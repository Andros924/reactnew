import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GithubUsers from './GithubUser'; 
import ShowGithubUser from './ShowGithubUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GithubUsers />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
}

export default App;
