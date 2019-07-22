import './Home.css';

import { CtAlert, CtProgressSpinner } from 'ct-react-library';
import { Article } from 'models';
import * as React from 'react';

export interface HomeProps {
  articles: Article[];
  loading: boolean;
  error: string;
}

const Home: React.FC<HomeProps> = ({ articles, error, loading }) => {
  if (error) {
    return (
      <div className="home error animated fadeIn">
        <CtAlert type="urgent">{error}</CtAlert>
      </div>
    );
  }

  if (loading || !articles) {
    return (
      <div className="home animated fadeIn">
        <CtProgressSpinner />
      </div>
    );
  }

  return (
    <div className="home animated fadeIn">
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.headLine}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
