import React from "react";
import PrivateRoutes from './PrivateRoutes'
import { Route,Redirect } from "react-router-dom";
import WithPublicHeader from "../components/publicRoutes/WithPublicHeader";
import PublicHome  from "../components/public/PublicHome";
import PublicAbout from "../components/public/PublicAbout";
import PrivateAbout from "../components/private/PrivateAbout";
import PrivateHome from "../components/private/PrivateHome";
import WithPrivateHeader from "../components/privateRoutes/WithPrivateHeader";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* AT EMPTY ROUTE */}
        <Route  exact path="/" render={() => (<Redirect to="/public" />)} />
        {/* PUBLIC ROUTES */}
        <Route  path="/public" component={WithPublicHeader} />
        <Route  path="/public/home" component={PublicHome} />
        <Route  path="/public/about" component={PublicAbout} />
        {/* PRIVATE ROUTES */}
        <PrivateRoutes  path="/private" component={WithPrivateHeader} />
        <PrivateRoutes  path="/private/home" component={PrivateHome} />
        <PrivateRoutes  path="/private/about" component={PrivateAbout} />
        {/* any wrong routes */}
        <Route  exact path="*" render={() => (<Redirect to="/public" />)} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
