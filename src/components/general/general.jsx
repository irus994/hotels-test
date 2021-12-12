import React from 'react';
import Header from '../header/header.jsx';
import Form from '../form/form.jsx';
import FavoriteBlock from '../favorite-block/favorite-block.jsx';
import MainHotelsBlock from '../main-hotels-block/main-hotels-block.jsx';

export default function General() {
    return (
        <>
            <Header/>
            <main className="main">
                <h1 className="visually-hidden">Выбрать отель</h1>
                <div className="wrapper__left-column">
                    <Form/>
                    <FavoriteBlock/>
                </div>
                <MainHotelsBlock/>
            </main>
        </>
    );
}

