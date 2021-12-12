import React from 'react';
import RatingStar from "../star/star.jsx";
import {connect} from "react-redux";
import {ActionCreator} from '../../store/action.js'

export function HotelItem(props) {
    const {hotelName, price, hotelId, favoriteList, addToFavorite, deleteFromFavorite, starCount} = props;

    const onFavoriteToggle = () => {
        if (favoriteList.includes(hotelId)) {
            deleteFromFavorite(hotelId);
        } else {
            addToFavorite(hotelId);
        }
    };

    return (
        <li className="hotels__item hotels__item--main-list">
            <div className="wrapper__hotel-column-left wrapper__hotel-column-left--main-list">
                <span className="hotel__name">{hotelName}</span>
                <p className="hotel__reservation-date">28 June, 2020 <span className="hotel__reservation-days"> - 1 день</span></p>
                <ul className="rating-stars">
                        <RatingStar
                            starCount={starCount}
                        />
                </ul>
            </div>
            <div className="wrapper__hotel-column-right">
                <div onClick={onFavoriteToggle} className={favoriteList.includes(hotelId) ? 'hotel__favorite hotel__favorite--active hotel__favorite--main-list' : 'hotel__favorite hotel__favorite--main-list'}></div>
                <p className="hotel__price-text hotel__price-text--main-list">Price<span className="hotel__price">{Math.round(price)} ₽</span></p>
            </div>
        </li>
    );
}

const mapDispatchToProps = (dispatch) => ({
    deleteFromFavorite(hotelId) {
        dispatch(ActionCreator.deleteFavorite(hotelId));
    },
    addToFavorite(hotelId) {
        dispatch(ActionCreator.addFavorite(hotelId))
    }
});

const mapStateToProps = (state) => (
    {
        favoriteList: state.hotels.favoriteList,
        hotels: state.hotels.data,
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(HotelItem);