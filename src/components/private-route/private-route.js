import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../const.js';


export function PrivateRoute({render, path, exact, authorizationStatus}) {
    return (
        <Route
            path={path}
            exact={exact}
            render={(routeProps) => (
                authorizationStatus === AuthorizationStatus.AUTH
                    ? render(routeProps)
                    : <Redirect to={AppRoute.SING_IN} />
            )}
        />
    );
}

const mapStateToProps = (state) => ({
    authorizationStatus: state.user.authorizationStatus,
});

export default connect(mapStateToProps)(PrivateRoute);

