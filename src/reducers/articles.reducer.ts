import { ArticlesActionTypes } from '../actions';
import { Article } from '../models';

export interface ArticlesState {
  readonly articles: Article[];
  readonly error: string;
  readonly loading: boolean;
}

const initialState: ArticlesState = {
  articles: [],
  error: '',
  loading: false
};

export const articlesReducer = (
  state = initialState,
  action: ArticlesActionTypes
): ArticlesState => {
  switch (action.type) {
    case 'LOAD_ARTICLES_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'LOAD_ARTICLES_SUCCESS':
      return {
        ...state,
        articles: action.payload.articles,
        loading: false
      };
    case 'LOAD_ARTICLES_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};
