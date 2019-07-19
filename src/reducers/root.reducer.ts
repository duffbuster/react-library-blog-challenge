import { combineReducers } from 'redux';

import { articlesReducer, ArticlesState } from './articles.reducer';

export default combineReducers({
  articles: articlesReducer
});

export interface RootState {
  articles: ArticlesState;
}
