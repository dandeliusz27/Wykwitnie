import React from 'react';
import './DetailItem.css';


function DetailItem(props) {
    return (
        <>
            <div className="wrapper">
                <div className="photo-box">
                     <img src={props.src} alt="show" className="item-photo"/> 
                </div>
                <div className="description-box">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
               
            </div>
        </>
       
    )
}

export default DetailItem