import { useState, useSWR } from 'react';

const useGithubUser = (username) => {
  const url = `https://api.github.com/users/${username}`;

  const { data, error, isValidating } = useSWR(
    username ? url : null,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    },
    {
      revalidateOnFocus: true,
    }
  );

  const loading = !data && !error && isValidating;

  return { user: data, loading, error };
};

export { useGithubUser };
