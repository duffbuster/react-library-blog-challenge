import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  LOAD_ARTICLES_REQUEST,
  loadArticlesFailure,
  loadArticlesSuccess
} from '../actions/articles.actions';
import { Article } from '../models';
import { API_URL } from './store';

export const fetchArticlesEpic: Epic = actions$ =>
  actions$.pipe(
    ofType(LOAD_ARTICLES_REQUEST),
    switchMap(() =>
      ajax.getJSON<Article[]>(`${API_URL}/Articles`).pipe(
        map((res: Article[]) => loadArticlesSuccess(res)),
        catchError(error => of(loadArticlesFailure(error.message)))
      )
    )
  );
