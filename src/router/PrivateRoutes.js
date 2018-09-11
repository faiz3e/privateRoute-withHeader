import React from "react";
import WithPrivateHeader from "../components/privateRoutes/WithPrivateHeader";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <div>
        
        <Route {...rest} render={(props) => (
            isAuth === true
                ?
                <div>
                <WithPrivateHeader></WithPrivateHeader>
                <Component {...props} />
                </div>:
                <Redirect to='/' />
        )} />
    </div>
)

export default PrivateRoutes
const isAuth = true;