import './App.css';

import { CtHeader, CtResponsiveNav } from 'ct-react-library';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { Home } from './components';

// tslint:disable-next-line: variable-name
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <CtHeader>
          <CtResponsiveNav bp="(min-width: 850px)" speed={300}>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
          </CtResponsiveNav>
        </CtHeader>

        <Route exact={true} path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  );
};

export default App;
