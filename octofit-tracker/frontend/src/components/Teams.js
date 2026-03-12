import React, { useState, useEffect } from 'react';

const Teams = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;
    const endpoint = `${baseUrl}/teams/`;
    console.log('Teams component fetching from', endpoint);

    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => {
        console.log('Teams GET returned', json);
        const items = Array.isArray(json) ? json : json.results || [];
        setData(items);
      })
      .catch((err) => console.error('Teams fetch error', err));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Teams;
