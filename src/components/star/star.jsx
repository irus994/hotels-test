import React from 'react';

export default function RatingStar(props) {
    const {starCount} = props;
    return (
            <ul className="rating-stars">
                <li className="rating-stars__item rating-stars__item--active"></li>
                <li className={starCount >= 2 ? 'rating-stars__item rating-stars__item--active' : 'rating-stars__item'}></li>
                <li className={starCount >= 3 ? 'rating-stars__item rating-stars__item--active' : 'rating-stars__item'}></li>
                <li className={starCount >= 4 ? 'rating-stars__item rating-stars__item--active' : 'rating-stars__item'}></li>
                <li className={starCount === 5 ? 'rating-stars__item rating-stars__item--active' : 'rating-stars__item'}></li>
            </ul>
    );
}
