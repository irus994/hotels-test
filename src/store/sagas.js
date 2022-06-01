import { call, put, takeEvery, all} from 'redux-saga/effects';
import {ActionCreator, ActionType} from "./action";

function* watchFetchHotels() {
    yield takeEvery(ActionType.REQUESTED_HOTELS, fetchHotelsAsync);
}

function* fetchHotelsAsync(action) {
    try {
        const { location, checkIn, checkOut } = action.payload
        yield put(ActionCreator.setLocation(location));
        yield put(ActionCreator.setCheckin(checkIn));
        const hotels = yield call(() => {
                    return fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&currency=rub`)
                        .then((response) => response.json());
            }
        );
        yield put(ActionCreator.loadHotels(hotels));
    } catch (error) {
        yield put(ActionCreator.requestHotelsError);
    }
}

export function* rootSaga() {
    yield all([
        watchFetchHotels(),
    ])
}