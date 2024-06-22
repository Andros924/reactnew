import React, { useState, useEffect } from 'react';
import GithubUser from './GithubUser'; 

function GithubUsers() {
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    setUsername(event.target.value.trim()); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const userData = await response.json();
        setSearchResults([userData]);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Search Username" />
        <button type="submit">Search</button>
      </form>

      {error && <div>Error: {error.message}</div>}

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((user) => (
            <li key={user.id || user.login}>
              <GithubUser username={user.login} />
            </li>
          ))}
        </ul>
      )}

      {searchResults.length === 0 && username && !error && <div>No results found.</div>}
    </div>
  );
}

export default GithubUsers;
