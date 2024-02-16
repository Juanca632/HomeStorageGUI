import React from 'react';
import "./ItemLinks.css"


const ItemLinks = ({ className }) => {
    return (
        <span className={className}>
            <div className='current slide-right-left slide-up-down'></div>
            <div className='current slide-right-left slide-up-down'></div>
            <div className='current slide-right-left slide-up-down'></div>
            <div className='current slide-right-left slide-up-down'></div>

        </span>
    );
}

export { ItemLinks };