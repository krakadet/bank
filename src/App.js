// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import MainTable from './modules/main-table';
import FlexTable from './modules/flex-table/flex-table';
import './normalize.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainTable />
      </Route>
      <Route path="/table-block">
        <FlexTable />
      </Route>
    </Switch>
  );
}

export default App;
