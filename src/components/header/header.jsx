import React from 'react';
import LogoutButton from "../logout-button/logout-button.jsx";

export default function Header() {
    return (
    <header className="header">
        <span className="header-logo">Simple Hotel Check</span>
        <LogoutButton/>
    </header>
    );
}