import './App.css';

import { loadArticles } from 'actions';
import { Home } from 'components';
import { CtHeader, CtResponsiveNav } from 'ct-react-library';
import { Article } from 'models';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router';
import { Link } from 'react-router-dom';
import { RootState } from 'reducers/root.reducer';
import { bindActionCreators, Dispatch } from 'redux';
import { createBrowserHistory } from 'history';

// tslint:disable-next-line: variable-name
// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="App">
//         <CtHeader>
//           <CtResponsiveNav bp="(min-width: 850px)" speed={300}>
//             <Link to="/">Home</Link>
//             <Link to="/articles">Articles</Link>
//           </CtResponsiveNav>
//         </CtHeader>

//         <Route exact={true} path="/" component={Home} />
//         {/* <Route path="/about" component={About} /> */}
//         {/* <Route path="/topics" component={Topics} /> */}
//       </div>
//     </Router>
//   );
// };

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
        <div className="App">
          <CtHeader>
            <CtResponsiveNav bp="(min-width: 850px)" speed={300}>
              <Link to="/">Home</Link>
              <Link to="/articles">Articles</Link>
            </CtResponsiveNav>
          </CtHeader>

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
