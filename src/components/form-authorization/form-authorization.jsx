import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {login} from '../../store/api-action.js'

export function FormAuthorization(props) {
    const {onLogin} = props;

    const loginRef = useRef();
    const passwordRef = useRef();
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault()

        let formValid = true;

        if (loginRef.current.validity.valid) {
            setEmailError('');
        } else {
            setEmailError('Некорректный email');
            formValid = false;
        }

        if (passwordRef.current.validity.valid) {
            setPassError('');
        } else {
            console.log(passwordRef.current.validity)
            setPassError('Некорректный пароль');
            formValid = false;
        }

        if (!formValid) {
            return;
        }

        onLogin({
            login: loginRef.current.value,
            password: passwordRef.current.value,
        });
    }

    return (
        <div className="login-form__wrapper">
            <h1 className="login__form-header">Simple Hotel Check</h1>
            <form noValidate className="login__form" onSubmit={handleSubmit}>
            <ul className="login__list">
                <li className="login__item">
                    <label htmlFor="email" className={emailError ? 'login__form-text login__form-text--error' : 'login__form-text'}>Логин</label>
                    <input required id="email" type="email" ref={loginRef} className={emailError ? 'form-reservation__input form-reservation__input--error' : 'form-reservation__input'}/>
                    {
                        (emailError) && (
                            <div className="error-message">
                                <p>{emailError} </p>
                            </div>
                        )
                    }
                </li>
                <li className="login__item">
                    <label htmlFor="password" className={passError ? 'login__form-text login__form-text--error' : 'login__form-text'}>Пароль</label>
                    <input required id="password" type="password" minLength={8} ref={passwordRef} className={passError ? 'form-reservation__input form-reservation__input--error' : 'form-reservation__input'}/>
                    {
                        (passError) && (
                            <div className="error-message">
                                <p>{passError} </p>
                            </div>
                        )
                    }
                </li>
            </ul>
            <button className="button"><span className="button__text">Войти</span></button>
        </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onLogin(authData) {
        dispatch(login(authData));
    },
});

export default connect(null, mapDispatchToProps)(FormAuthorization);