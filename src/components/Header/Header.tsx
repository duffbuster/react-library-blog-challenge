import './Header.css';

import { CtHeader, CtProgressBar, CtResponsiveNav } from 'ct-react-library';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  loading: boolean;
}

const Header: React.FC<HeaderProps> = ({ loading }) => {
  return (
    <div className="tc-header">
      <CtHeader>
        <CtResponsiveNav bp="(min-width: 850px)" speed={300}>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
        </CtResponsiveNav>
      </CtHeader>

      {loading && <CtProgressBar />}
    </div>
  );
};

export default Header;
