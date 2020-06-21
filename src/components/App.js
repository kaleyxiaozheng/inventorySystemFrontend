import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { LoginPage } from './LoginPage';
import { Route, Switch } from "react-router";
import { BodyPage } from "./BodyPage";
import { SignupPage } from "./SignupPage";
import { ResetPasswordPage } from "./ResetPasswordPage";
import { DashboardPage } from "./DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route eaxct path="/login" component={LoginPage} />
        <Route eaxct path="/signup" component={SignupPage} />
        <Route eaxct path="/resetpassword" component={ResetPasswordPage} />
        <Route eaxct path="/:username/dashboard" component={DashboardPage} />
        <Route eaxct path="/" component={BodyPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
