import React from 'react';
import "./ItemDiagramHome.css"
import logo2 from "../../assets/img/logo2.png";



const ItemDiagramHome = (props) => {
    return (
        <div className='container' style={{ backgroundColor: `var(--${props.color})` }}>
                <div className="HomeStorage-card-logo">
                    {props.logo ? (
                        <h3 className='title-sunia'><span className='title-sunia-span'>SUN</span>IA</h3>
                    ): (
                        <h3>{props.title}</h3>
                    )}
                    {props.logo && <img src={logo2} alt="logo" className="logo-HomeStorage"></img>}
                </div>
                <p>{props.info}</p>
                { props.children }
                {props.infoConsumption && 
                <div className="info-consumption-div">
                    <p>246.1V</p>
                    <p>6A</p>
                    <p>50Hz</p>
                </div>
                }

        </div>
    );

}

export { ItemDiagramHome };