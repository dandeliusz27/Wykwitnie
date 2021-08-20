import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Image from "./images/img-9.jpg"
import Rose from "./images/img-rose.jpg"
import Chr from "./images/img-chr.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out something</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src={Rose}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, adipisci?"
                            label="Lorem"
                            path="/services"
                        />
                        <CardItem 
                            src={Chr}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, adipisci?"
                            label="Lorem"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                            src={Image}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, adipisci?"
                            label="Lorem"
                            path="/services"
                        />
                        <CardItem 
                            src={Image}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, adipisci?"
                            label="Lorem"
                            path="/services"
                        />
                        <CardItem 
                            src={Image}
                            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, adipisci?"
                            label="Lorem"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
