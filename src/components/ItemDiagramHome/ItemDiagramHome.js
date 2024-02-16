import React from 'react';
import "./ItemDiagramHome.css"




const ItemDiagramHome = (props) => {
    return (
        <div className='container' style={{ backgroundColor: `var(--${props.color})` }}>
                <h3>{props.title}</h3>
                <p>{props.info}</p>
                { props.children }

        </div>
    );

}

export { ItemDiagramHome };