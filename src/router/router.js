import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import PrivateRoutes from './PrivateRoutes'
import PrivateHome from "../components/privateRoutes/PrivateHome";
import Imp from "../components/privateRoutes/Imp";
import PublicLayout from "./PublicLayout";
import PrivateLayout from "./PrivateLayout";
class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
      { !isAuth ?
          <PublicLayout>
            <Route exact path="/" component={App} />
            <Route path="/posts" component={Posts} />
          </PublicLayout>
          :
          <PrivateLayout>
            <PrivateRoutes path="/PrivateHome" component={PrivateHome} />
            <PrivateRoutes path="/Imp" component={Imp} />
          </PrivateLayout>
        }
      </React.Fragment>
    );
  }
}

export default ReactRouter;
const isAuth = false;