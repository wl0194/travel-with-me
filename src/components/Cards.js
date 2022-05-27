import React from 'react';
import CardItem from './CardItem';
import './Cards.css';



function Cards() {
    return (
        <div className="cards">
            <h1>Check out these beautiful Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="/src/images/matera.jpg"
                        text="Explore the hidden towns in Italy"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="/src/images/matera.jpg"
                        text="Explore the hidden towns in Italy"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="/src/images/matera.jpg"
                        text="Explore the hidden towns in Italy"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
