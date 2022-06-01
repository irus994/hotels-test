import React, {useRef, useEffect, useState} from 'react';
import addDays from '../utils.js'
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";

export function Form(props) {
    const {onFilter} = props;

    const locationRef = useRef();
    const dateRef = useRef();
    const countDaysRef = useRef();

    const [todayDate] = useState(() => {
        const today = new Date();
        return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    })

    useEffect(() => {

        onFilter(
            {
            location: locationRef.current.value,
            checkIn: dateRef.current.value,
            checkOut: addDays(dateRef.current.value, +countDaysRef.current.value),
            }
        )
    }, [onFilter])

    const handleSubmit = (evt) => {
        evt.preventDefault();

        onFilter({
            location: locationRef.current.value,
            checkIn: dateRef.current.value,
            checkOut: addDays(dateRef.current.value, +countDaysRef.current.value),
        });
    }
    return (
        <div className="wrapper__form">
            <form onSubmit={handleSubmit} className="form-reservation">
                <ul className="form-reservation__list">
                    <li className="form-reservation__item">
                        <label className="form-reservation__text">Локация</label>
                        <input ref={locationRef} className="form-input" defaultValue="Москва" />
                    </li>
                    <li className="form-reservation__item form-reservation__item--date">
                        <label className="form-reservation__text">Дата заселения</label>
                        <input ref={dateRef} type="date" className="form-input" defaultValue={todayDate} />
                    </li>
                    <li className="form-reservation__item">
                        <label className="form-reservation__text">Количество дней</label>
                        <input ref={countDaysRef} className="form-input" defaultValue="1" />
                    </li>
                </ul>
                <button className="button"><span className="button__text">Найти</span></button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onFilter(Data) {
        dispatch(ActionCreator.requestHotels(Data));
    },
});

export default connect(null, mapDispatchToProps)(Form);

