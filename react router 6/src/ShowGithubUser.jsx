import React from 'react';

function ShowGithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const user = await response.json();
        setUserData(user);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <p>Name: {userData.name}</p>
          <p>Bio: {userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer noopener">
            GitHub Profile
          </a>
        </div>
      )}
      {!userData && !error && <div>Loading user data...</div>}
    </div>
  );
}

export default ShowGithubUser;
