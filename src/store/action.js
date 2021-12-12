export const ActionType = {
    REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
    LOGOUT: 'user/logout',
    REDIRECT_TO_ROUTE: 'main/redirectToRoute',
    LOAD_HOTELS: 'data/loadHotels',
    ADD_FAVORITE: 'data/addFavorite',
    DELETE_FAVORITE: 'data/deleteFavorite',
    SET_LOCATION: 'date/setLocation',
    SET_CHECKIN: 'date/setCheckin',
};

export const ActionCreator = {
    loadHotels: (hotels) => ({
        type: ActionType.LOAD_HOTELS,
        payload: hotels,
    }),
    addFavorite: (hotelId) => ({
        type: ActionType.ADD_FAVORITE,
        payload: hotelId,
    }),
    deleteFavorite: (hotelId) => ({
        type: ActionType.DELETE_FAVORITE,
        payload: hotelId,
    }),
    setLocation: (location) => ({
        type: ActionType.SET_LOCATION,
        payload: location,
    }),
    setCheckin: (checkIn) => ({
        type: ActionType.SET_CHECKIN,
        payload: checkIn,
    }),
    requireAuthorization: (status, userData) => ({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {status, userData},
    }),
    logout: () => ({
        type: ActionType.LOGOUT,
    }),
    redirectToRoute: (url) => ({
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: url,
    }),
};