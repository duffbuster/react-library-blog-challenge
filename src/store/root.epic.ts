import { combineEpics } from 'redux-observable';

import { fetchArticlesEpic } from './fetchArticles.epic';

export const rootEpic = combineEpics(fetchArticlesEpic);
