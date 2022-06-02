import React from 'react';
import RatingStar from "../../components/star/star.jsx";
import {connect} from "react-redux";
import {ActionCreator} from '../../store/action.js';

function HotelFavoriteItem(props) {
    const {hotelName, price, hotelId, favoriteList, addToFavorite, deleteFromFavorite, starCount} = props;

    const onFavoriteToggle = () => {

        if (favoriteList.includes(hotelId)) {
            deleteFromFavorite(hotelId);
        } else {
            addToFavorite(hotelId);
        }
    };

return (
    <li className=" hotels__item hotels__item--favorite">
        <div className="wrapper__item--favorite">
            <span className="hotel__name">{hotelName}</span>
            <div onClick={onFavoriteToggle} className="hotel__favorite hotel__favorite--active"></div>
        </div>
        <p className="hotel__reservation-date">28 June, 2020 <span className="hotel__reservation-days"> - 1 день</span>
        </p>
        <div className="wrapper__item--favorite">
            <ul className="rating-stars">
                <RatingStar
                    starCount={starCount}
                />
            </ul>
            <p className="hotel__price-text">Price<span className="hotel__price hotel__price">{Math.round(price)} ₽</span></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HotelFavoriteItem);