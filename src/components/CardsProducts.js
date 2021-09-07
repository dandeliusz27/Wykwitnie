import React from 'react';
import CardItem from './CardItem';

import Image from "./images/img-9.jpg"
import Rose from "./images/img-rose.jpg"
import Chr from "./images/img-chr.jpg"

function CardsProducts() {
    return (
        <div className="cards">
            <h1>Produkty</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src={Rose}
                            text="Wszystkie kwiaty słońca, od Mercurego do Neptuna"
                            label="Kwiaty"
                            path="/products"
                        />
                        <CardItem 
                            src={Chr}
                            text="Doniczki prawie tak zajebiste jak te które robił Dulitata w 1996r"
                            label="Donice"
                            path="/products"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                            src={Image}
                            text="Cokolwiek tam jeszcze macie, nie jestem pewien czy wodospady"
                            label="Wodotryski"
                            path="/products"
                        />
                        <CardItem 
                            src={Image}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Coś kurwa, ten?"
                            label="Jakieś roślinki"
                            path="/products"
                        />
                        <CardItem 
                            src={Image}
                            text="To mały krok dla ludzkości, ale dla karła normalny"
                            label="Kapitan Bomba"
                            path="/products"
                        />
                         <CardItem 
                            src={Image}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Coś kurwa, ten?"
                            label="Jakieś roślinki"
                            path="/products"
                        />
                         <CardItem 
                            src={Image}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Coś kurwa, ten?"
                            label="Jakieś roślinki"
                            path="/products"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsProducts
