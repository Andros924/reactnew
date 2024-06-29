import { useState, useSWR } from 'react';

const useGithubUser = (username) => {
  if (!username) {
    return { user: null, loading: false, error: null };
  }

  const url = `https://api.github.com/users/${username}`;

  const { data, error, isValidating } = useSWR(
    url,
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
