import {AuthorizationStatus} from "../components/const.js";
import {ActionCreator} from './action';
import {AppRoute} from '../components/const.js';

export const logout = () => (dispatch) => (
    Promise.resolve()
        .then(() => {
            localStorage.removeItem('token');
        })
        .then(() => {
            dispatch(ActionCreator.logout());
        })
);

export const login = ({login, password}) => (dispatch) => (
    Promise.resolve({token: 'token'})
        .then((data) => {
            localStorage.setItem('token', data.token);
            return data;
        })
        .then((data) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data)))
        .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const checkAuth = () => (dispatch) => (
    localStorage.getItem('token')
        ? Promise.resolve({token: localStorage.getItem('token')})
            .then((response) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, response)))
        : Promise.resolve()
            .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH, {})))
);