import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from '../store';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GuestRoute from './GuestRoute';

// pages
import MainPage from '../pages/Main';
import LoginPage from '../pages/Login';

export default function Routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <GuestRoute
              exact
              path="/entrar"
              component={LoginPage}
            />
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
