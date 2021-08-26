import React from 'react';
import '../App.js';
import './MainSection.css';
import {Button} from './Button.js';


function MainSection() {
    return (
        <div className='main-container'>
            <h1>WYKWITNIE</h1>
            <p>Twoje kwiaty i usługi pierwszego wyboru</p>
            <div className="main-btns">
               <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' path='/wedding-designer'>
                   Projektant 
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' path='celebrations'>
                   Uroczystości 
                </Button>
            </div>
        </div>
    )
}

export default MainSection;
