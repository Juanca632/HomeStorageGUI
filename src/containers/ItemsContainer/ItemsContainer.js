import React from 'react';
import "./ItemsContainer.css"



const ItemsContainer = ({ className, children }) => {
    return (
        <div className={className}>
			{children}
		</div>
    );
}

export { ItemsContainer };