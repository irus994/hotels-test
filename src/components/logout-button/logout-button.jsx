import React from 'react';
import {logout} from "../../store/api-action.js";
import {connect} from "react-redux";

export function LogoutButton(props) {
    const {onLogOut} = props

    const handleLogOut = () => {
        onLogOut();
    }

    return (
        <button onClick={handleLogOut} className="logout-button">Выйти</button>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onLogOut() {
        dispatch(logout());
    },
});

export default connect(null, mapDispatchToProps)(LogoutButton);