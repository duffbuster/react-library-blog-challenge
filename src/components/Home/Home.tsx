import * as React from 'react';

import classnames from 'classnames';

const Home: React.FC<{}> = props => {
  const cn = classnames({ home: true });

  return <div className={cn}>Hello World</div>;
};

export default Home;
