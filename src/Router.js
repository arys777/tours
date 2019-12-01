import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Search from './containers/search';
import Table from './containers/table';
import Reports from './containers/reports';
import Procedures from './containers/procedures';

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
    </Switch>
  </main>
);

export default Router;