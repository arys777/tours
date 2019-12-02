import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Search from './containers/search';
import Table from './containers/table';
import Reports from './containers/reports';
import Procedures from './containers/procedures';
import Triggers from './containers/triggers';
import Checks from './containers/checks';
import Indexes from './containers/indexes';
import Queries from './containers/queries';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search}/>
      <Route path='/search' component={Search}/>
      <Route path='/clients' component={Table} />
      <Route path='/employees' component={Table} />
      <Route path='/countries' component={Table} />
      <Route path='/tours' component={Table} />
      <Route path='/contracts' component={Table} />
      <Route path='/reports' component={Reports} />
      <Route path='/procedures' component={Procedures} />
      <Route path='/triggers' component={Triggers} />
      <Route path='/checks' component={Checks} />
      <Route path='/indexes' component={Indexes} />
      <Route path='/queries' component={Queries} />
    </Switch>
  </main>
);

export default Router;