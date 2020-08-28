import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { authenticationService } from '../services/auth.service';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();

    return (<Route {...rest} render={props => {
        const currentUser = authenticationService.currentUser;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            console.log('ye')
            console.log(encodeURIComponent)
            console.log(location.pathname)
            console.log(location.search)
            const currentUrl = encodeURIComponent(location.pathname + location.search)
            const authurl = `/login/?next=${currentUrl}`
            console.log(authurl)
            return <Redirect to={{ pathname: authurl, state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />)
}


export default PrivateRoute