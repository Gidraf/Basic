import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { ForumComponent, SignupComponent, ProfileComponent } from './App';

export const Main = () => (
  <Switch>
    <Route exact path="/" component={ForumComponent} />
    <Route path="/signup" component={SignupComponent} />
    <Route path="/profile" component={ProfileComponent} />
  </Switch>
);

export const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);
