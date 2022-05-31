import React from 'react';
import HotelItem from "../hotel-item/hotel-item.jsx";
import {connect} from 'react-redux';

export function MainHotelList(props) {
    const {hotels} = props;

    return (
        <div className="wrapper__hotels-list">
            <ul className="hotels__list">
                {
                    hotels.map((hotel) => (
                        <HotelItem
                            key={hotel.hotelId}
                            hotelName={hotel.hotelName}
                            price={hotel.priceAvg}
                            hotelId={hotel.hotelId}
                            starCount={hotel.stars}
                        />
                    ))
                }
            </ul>
        </div>
    );
}


const mapStateToProps = (state) => ({
    hotels: state.hotels.data,
});

export default connect(mapStateToProps)(MainHotelList);
