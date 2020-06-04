import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Login } from './Login';
import { Route, Switch } from "react-router";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { ResetPassword } from "./ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch className="bodyArea">
        <Route eaxct path="/login" component={Login} />
        <Route eaxct path="/signup" component={Signup} />
        <Route eaxct path="/resetpassword" component={ResetPassword} />
        <Route eaxct path="/" component={Body} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
