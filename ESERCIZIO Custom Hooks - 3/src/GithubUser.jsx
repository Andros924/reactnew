import React, { useState, useEffect } from 'react';
import { useGithubUser } from './useGithubUser';

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Login: {user.login}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">Profile</a>
    </div>
  );
};

export default GithubUser;
