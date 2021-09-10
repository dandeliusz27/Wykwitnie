import React from 'react';
import CardItem from './CardItem';
import Bday from "./images/img-ur.jpg"
import Rose from "./images/img-rose-red.jpg"
import Don from "./images/img-don.jpg"
import Orange from "./images/img-rose-or.jpg"
import Wien from "./images/img-wien.jpg"

function CardsMain() {
    return (
        <div className="cards">
            <h1>Sprawdź nasze usługi</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src={Rose}
                            text="Ładne kwiatki"
                            label="Produkty"
                            path="/product1"
                        />
                        <CardItem 
                            src={Don}
                            text="Ładne doniczki"
                            label="Produkty"
                            path="/product2"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                            src={Orange}
                            text="Wiecej ładnych kwiatków"
                            label="Produkty"
                            path="/products"
                        />
                        <CardItem 
                            src={Wien}
                            text="Układanie wieńców"
                            label="Usługi"
                            path="/services"
                        />
                        <CardItem 
                            src={Bday}
                            text="Urodziny dla dzieci"
                            label="Usługi"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsMain
