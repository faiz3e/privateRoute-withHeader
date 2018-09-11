import React from "react";
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from "./PublicRoutes";
import { Route,Redirect } from "react-router-dom";
import PublicHome  from "../components/publicRoutes/PublicHome";
import PublicAbout from "../components/publicRoutes/PublicAbout";
import PrivateAbout from "../components/privateRoutes/PrivateAbout";
import PrivateHome from "../components/privateRoutes/PrivateHome";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* AT EMPTY ROUTE */}
        {/* <Route  exact path="/" render={() => (<Redirect to="/publicHome" />)} /> */}
        {/* PUBLIC ROUTES */}
        <PublicRoutes exact path='/' component ={PublicHome}/>
        <PublicRoutes path='/publicHome' component ={PublicHome}/>
        <PublicRoutes path='/publicAbout' component ={PublicAbout}/>

        {/* PRIVATE ROUTES */}
        <PrivateRoutes path="/privateHome" component={PrivateHome} />
        <PrivateRoutes path="/privateAbout" component={PrivateAbout} />
        {/* any wrong routes */}
        {/* <Route path="*" render={() => (<Redirect to="/" />)} /> */}
      </React.Fragment>
    );
  }
}

export default ReactRouter;
