import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from '../store';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GuestRoute from './GuestRoute';
import PrivateRoute from "./PrivateRoute";

// pages
import MainPage from "../pages/Main";
import AuthPage from "../pages/Auth";
import UserPage from "../pages/Users";
import UserFavoriteRepositoriesPage from "../pages/UserFavoriteRepositories";
import UserFavoriteUsersPage from "../pages/UserFavoriteUsers";

export default function Routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/users/:login" component={UserPage} />
            <GuestRoute path="/auth" component={AuthPage} />
            <PrivateRoute exact path="/user/favorite/repositories" component={UserFavoriteRepositoriesPage} />
            <PrivateRoute exact path="/user/favorite/users" component={UserFavoriteUsersPage} />
            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
