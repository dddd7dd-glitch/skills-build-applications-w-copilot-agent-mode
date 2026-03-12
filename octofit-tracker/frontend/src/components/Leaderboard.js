import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;
    const endpoint = `${baseUrl}/leaderboard/`;
    console.log('Leaderboard component fetching from', endpoint);

    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => {
        console.log('Leaderboard GET returned', json);
        const items = Array.isArray(json) ? json : json.results || [];
        setData(items);
      })
      .catch((err) => console.error('Leaderboard fetch error', err));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Leaderboard;
