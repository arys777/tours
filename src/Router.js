import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Search from './containers/search';
import Table from './containers/table';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search}/>
      <Route path='/search' component={Search}/>
      <Route path='/clients' component={Table} />
      <Route path='/employees' component={Table} />
      <Route path='/countries' component={Table} />
      <Route path='/tours' component={Table} />
    </Switch>
  </main>
);

export default Router;