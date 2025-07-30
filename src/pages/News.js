// pages/News.js
import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
  const [news, setNews] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.bhaskar.com/rss-v1--category-1061.xml`)
      .then(res => res.json())
      .then(data => setNews(data.items));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📰 Dainik Bhaskar – National News</h2>
      {news.slice(0, visible).map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
      {visible < news.length && (
        <button onClick={() => setVisible(prev => prev + 6)} style={{ marginTop: 20 }}>
          Load More
        </button>
      )}
    </div>
  );
};

export default News;
