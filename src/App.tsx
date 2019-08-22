import './App.css';
import 'animate.css';

import { loadArticles } from 'actions';
import { Home } from 'components';
import Header from 'components/Header/Header';
import { createBrowserHistory } from 'history';
import { Article } from 'models';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router';
import { RootState } from 'reducers/root.reducer';
import { bindActionCreators, Dispatch } from 'redux';

export interface AppProps {
  articles?: Article[];
  loading?: boolean;
  error?: string;
  loadArticles?: typeof loadArticles;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    // tslint:disable-next-line: no-shadowed-variable
    const { loadArticles } = this.props;

    if (loadArticles) {
      loadArticles();
    }
  }

  public render() {
    const history = createBrowserHistory();
    const { articles, loading, error } = this.props;

    return (
      <Router history={history}>
        <div className="App animated fadeIn">
          <Header loading={loading || false} />

          <Route
            exact={true}
            path="/"
            render={() => (
              <Home articles={articles || []} loading={loading || false} error={error || ''} />
            )}
          />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: RootState) => ({ ...state.articles });

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadArticles }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
