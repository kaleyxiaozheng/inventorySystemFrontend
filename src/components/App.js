import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Login } from './Login';
import { Route, Switch } from "react-router";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { ForgetPassword } from "./ForgetPassword";
import { Submit } from "./Submit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch className="bodyArea">
        <Route eaxct path="/Login" component={Login} />
        <Route eaxct path="/Signup" component={Signup} />
        <Route eaxct path="/Submit" component={Submit} />
        <Route eaxct path="/ForgetPassword" component={ForgetPassword} />
        <Route eaxct path="/" component={Body} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
