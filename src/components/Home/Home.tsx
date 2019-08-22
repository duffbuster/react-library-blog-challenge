import './Home.css';

import { CtAlert } from 'ct-react-library';
import { Articles } from 'models';
import * as React from 'react';
import Article from 'components/Article/Article';

export interface HomeProps {
  articles: Articles;
  loading: boolean;
  error: string;
}

const Home: React.FC<HomeProps> = ({ articles, error, loading }) => {
  if (loading) {
    return null;
  }

  if (error) {
    return (
      <div className="home error animated fadeIn">
        <CtAlert type="urgent">{error}</CtAlert>
      </div>
    );
  }

  return (
    <div className="tc-home animated fadeIn">
      <div className="tc-home--articles">
        {articles.map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
