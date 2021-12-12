import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../const.js';


export function OnlyUnauthorizedRoute({render, path, exact, authorizationStatus}) {
    return (
        <Route
            path={path}
            exact={exact}
            render={(routeProps) => (
                authorizationStatus !== AuthorizationStatus.AUTH
                    ? render(routeProps)
                    : <Redirect to={AppRoute.ROOT} />
            )}
        />
    );
}

const mapStateToProps = (state) => ({
    authorizationStatus: state.user.authorizationStatus,
});

export default connect(mapStateToProps)(OnlyUnauthorizedRoute);
