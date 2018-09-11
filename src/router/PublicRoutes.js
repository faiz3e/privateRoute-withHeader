import React from "react";
import WithPublicHeader from "../components/publicRoutes/WithPublicHeader";
import { Route } from "react-router-dom";

const PublicRoutes = ({ component: Component, ...rest }) => (
    <div>
        <Route {...rest} render={(props) => (
            <div>
                <WithPublicHeader></WithPublicHeader>
                <Component {...props} />
            </div>
        )} />
    </div>
)

export default PublicRoutes
