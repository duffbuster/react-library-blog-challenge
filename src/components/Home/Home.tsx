import './Home.css';

import { Article } from 'models';
import * as React from 'react';

export interface HomeProps {
  articles: Article[];
  loading: boolean;
  error: string;
}

const Home: React.FC<HomeProps> = ({ articles, loading }) => {
  if (loading || !articles) {
    return <div className="home">Loading...</div>;
  }

  return (
    <div className="home">
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.headLine}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
