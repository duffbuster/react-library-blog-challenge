import './Article.css';

import { Article as ArticleType } from 'models';
import * as React from 'react';

export interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article, ...other }) => {
  return (
    <div {...other} className="tc-article">
      <h1>{article.headLine}</h1>
      <p>{article.snippet}</p>
    </div>
  );
};

export default Article;
