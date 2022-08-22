import React from 'react';

const Filter = () => (
        <div className="container__forms--third">
            <div className="add__input add__first"></div>
            <div className="add__input add__second"></div>
            <div className="add__input add__third"></div>
            <input
                className="input__group--input header__choice--people"
                type="text"
                id="people-room"
                name="people-room"
                autoComplete="off"
            />
            <label className="input__group--label label__people" htmlFor="people-room">
                {' '}
            </label>
            <div className="container__forms--filter">
                <div className="filter__item">
                    <p className="filter__name">Adults</p>
                    <p className="btn__filter--minus">-</p>
                    <p className="filter__counter first__count">0</p>
                    <p className="btn__filter--plus thirty__adults">+</p>
                </div>
                <div className="filter__item">
                    <p className="filter__name">Children</p>
                    <p className="btn__filter--minus">-</p>
                    <p className="filter__counter second__count" id="hidden__counter">
                        0
                    </p>
                    <p className="btn__filter--plus fifteen" id="addInf">
                        +
                    </p>
                </div>
                <div className="filter__item">
                    <p className="filter__name">Rooms</p>
                    <p className="btn__filter--minus">-</p>
                    <p className="filter__counter third__count">0</p>
                    <p className="btn__filter--plus thirty__rooms">+</p>
                </div>
                <div className="wrapper__children--inf">
                    <div className="filter__age">What is the age of the child you’re travelling with?</div>
                    <div className="wrapper__select"></div>
                </div>
            </div>
        </div>
);

export default Filter;
