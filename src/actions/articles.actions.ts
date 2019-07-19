import { Article } from '../models';

export const LOAD_ARTICLES_REQUEST = 'LOAD_ARTICLES_REQUEST';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAILURE = 'LOAD_ARTICLES_FAILURE';

export const loadArticles = () => ({ type: LOAD_ARTICLES_REQUEST });
export const loadArticlesSuccess = (articles: Article[]) => ({
  payload: { articles },
  type: LOAD_ARTICLES_SUCCESS
});
export const loadArticlesFailure = (error: string) => ({
  error,
  type: LOAD_ARTICLES_FAILURE
});

interface LoadArticlesAction {
  type: typeof LOAD_ARTICLES_REQUEST;
}

interface LoadArticlesSuccessAction {
  type: typeof LOAD_ARTICLES_SUCCESS;
  payload: { articles: Article[] };
}

interface LoadArticlesFailureAction {
  type: typeof LOAD_ARTICLES_FAILURE;
  error: string;
}

export type ArticlesActionTypes =
  | LoadArticlesAction
  | LoadArticlesSuccessAction
  | LoadArticlesFailureAction;
