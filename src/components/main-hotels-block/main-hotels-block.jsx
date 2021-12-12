import React from 'react';
import Slider from "../slider/slider.jsx";
import MainHotelList from "../main-hotel-list/main-hotel-list.jsx";
import {dateConvert} from '../utils.js';
import {connect} from "react-redux";


export function MainHotelsBlock(props) {
    const {favoriteList, location, checkin} = props;
    console.log(checkin)
    return (
        <section className="hotels">
            <div>
                <div className="wrapper__hotel-title">
                    <ul className="bread-crumbs">
                        <li className="bread-crumbs__item">Отели</li>
                        <li className="bread-crumbs__item">{location}</li>
                    </ul>
                    <span className="hotel__title-date">{dateConvert(checkin)}</span>
                </div>
                <Slider/>
                <span className="hotel__added-favorites">Добавлено в Избранное: <span className="hotel__count">{favoriteList.length}</span> отеля</span>
            </div>
            <MainHotelList/>
        </section>
    );
}

const mapStateToProps = (state) => (
    {
        favoriteList: state.hotels.favoriteList,
        location: state.hotels.location,
        checkin: state.hotels.checkin,
    }
);

export default connect(mapStateToProps)(MainHotelsBlock);