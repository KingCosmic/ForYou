import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WriteLetter from './containers/WriteLetter';
// import WriteLetter from './views/WriteLetter';
import ViewLetter from './views/ViewLetter';
import NotFound from './views/NotFound';

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact component={WriteLetter} />
        <Route path='/:letterId' component={ViewLetter} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;