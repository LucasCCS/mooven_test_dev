import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from '../store';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GuestRoute from './GuestRoute';
export default function Routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <GuestRoute exact path="/" component={() => <h1>Entrar</h1>} />
            <Route path="*" component={() => <h1>sdsdsd</h1>}></Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
