import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import Image from "./images/img-9.jpg"
import Rose from "./images/img-rose.jpg"
import Chr from "./images/img-chr.jpg"

function CardsServices() {
    return (
        <div className="cards">
            <h1>Usługi</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src={Rose}
                            text="Projektant ślubny"
                            label="Usługi"
                            path="/wedding-designer"
                        />
                        <CardItem 
                            src={Chr}
                            text="Urodziny dla dzieci, zajęcia z garncarstwa lekkoatletycznego"
                            label="Usługi"
                            path="/celebrations"                        
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                            src={Image}
                            text="Cokolwiek tam jeszcze macie, nie jestem pewien czy wodospady"
                            label="Wodotryski"
                            path="/Services"
                        />
                        <CardItem 
                            src={Image}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Coś kurwa, ten?"
                            label="Jakieś roślinki"
                            path="/Services"
                        />
                        <CardItem 
                            src={Image}
                            text="To mały krok dla ludzkości, ale dla karła normalny"
                            label="Kapitan Bomba"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsServices
