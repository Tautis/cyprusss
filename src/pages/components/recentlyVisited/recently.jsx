import React, { useEffect, useState } from 'react';

function RecentlyVisited(){
    const [recentlyVisited, setRecentlyVisited] = useState([]);

    useEffect(() => {
      const storedData = localStorage.getItem('recentlyVisited');
      if (storedData) {
        setRecentlyVisited(JSON.parse(storedData));
      }
    }, []);

 

  return (
    <div>
      <h2>Recently Visited Pages:</h2>
      {recentlyVisited.map((url, index) => (
        <div key={index}>
          <a href={url} onClick={() => handleLinkClick(url)}>
            {url}
          </a>
          <br />
        </div>
      ))}
    </div>
  );
};

export default RecentlyVisited;