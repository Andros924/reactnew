import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GithubUsers from './GithubUsers';
import ShowGithubUser from './ShowGithubUser';

function App() {
  return (
    <Router>
      <div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Explore Users</Link>
          </li>
          
        </ul>

        <Routes>
          <Route path="/" element={<GithubUsers />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
