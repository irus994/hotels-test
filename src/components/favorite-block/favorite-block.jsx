import React, {useMemo, useState} from 'react';
import {connect} from "react-redux";
import HotelFavoriteItem from "../hotel-item-favorite/hotel-item-favorite.jsx";

const orderChange = {
    asc: 'desc',
    desc: 'asc',
}

export function FavoriteBlock(props) {
    const {favoriteList, hotels} = props;
    const [activeSort, setActiveSort] = useState('rating');
    const [orderSort, setOrderSort] = useState('asc');
    const onSortChange = (evt) => {
        evt.preventDefault();
        if (activeSort !== evt.target.value) {
            setActiveSort(evt.target.value)
        } else {
             setOrderSort(orderChange[orderSort])
         }
    }

    const sortedFavoriteList = useMemo(() => {
        const favoriteHotelList = hotels.filter(hotel => favoriteList.includes(hotel.hotelId))
        if (activeSort === 'rating') {
            return favoriteHotelList.sort((a, b) => orderSort === 'asc' ? a.stars - b.stars : b.stars - a.stars)
        } else {
            return favoriteHotelList.sort((a, b) => orderSort === 'asc' ? a.priceAvg - b.priceAvg : b.priceAvg - a.priceAvg)
        }
    }, [activeSort, orderSort, favoriteList, hotels])

    return (
        <div className="favorites">
            <h2 className="favorites__header">Избранное</h2>
            <div className="sort">
                <button onClick={onSortChange} value="rating" className={activeSort === 'rating' ? "sort__button sort__button--rating sort__button--active" : "sort__button sort__button--rating"}><span className={activeSort === 'rating' ? "sort__text sort__text--active" : "sort__text"}>Рейтинг</span></button>
                <button onClick={onSortChange} value="price" className={activeSort === 'price' ? "sort__button sort__button--rating sort__button--active" : "sort__button sort__button--rating"}><span className={activeSort === 'price' ? "sort__text sort__text--active" : "sort__text"}>Цена</span></button>
            </div>
            <ul className="hotel__list">
                {
                    sortedFavoriteList.map((hotel) => (
                        <HotelFavoriteItem
                            key={hotel.id}
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
    favoriteList: state.hotels.favoriteList,
});

export default connect(mapStateToProps)(FavoriteBlock);