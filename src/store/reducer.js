import {ActionType} from './action.js';
import {AuthorizationStatus} from '../components/const.js';

export const initialState = {
    user: {
        data: null,
        authorizationStatus: AuthorizationStatus.UNKNOWN,
    },
    hotels: {
        data: [],
        isDataLoaded: false,
        favoriteList: [],
        location: '',
        checkin: '',
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_HOTELS :
            return {
                ...state,
                hotels: {
                    ...state.hotels,
                    data: action.payload,
                    isDataLoaded: true,
                }
            };
        case ActionType.ADD_FAVORITE :
            return {
                ...state,
                hotels: {
                    ...state.hotels,
                    favoriteList: [...state.hotels.favoriteList, action.payload],
                }
            };
        case ActionType.DELETE_FAVORITE :
            return {
                ...state,
                hotels: {
                    ...state.hotels,
                    favoriteList: state.hotels.favoriteList.filter((hotelId) => hotelId !== action.payload),
                }
            };
        case ActionType.SET_LOCATION :
            return {
                ...state,
                hotels: {
                    ...state.hotels,
                    location: action.payload.location,
                }
            }
        case ActionType.SET_CHECKIN :
            return {
                ...state,
                hotels: {
                    ...state.hotels,
                    checkin: action.payload.checkIn,
                }
            }
        case ActionType.REQUIRED_AUTHORIZATION:
            return {
                ...state,
                user: {
                    authorizationStatus: action.payload.status,
                    data: action.payload.userData,
                },
            };
        case ActionType.LOGOUT: {
            return {
                ...state,
                user: {
                    authorizationStatus: AuthorizationStatus.NO_AUTH,
                    data: null,
                },
            };
        }
        default:
            return state;
    }
};
