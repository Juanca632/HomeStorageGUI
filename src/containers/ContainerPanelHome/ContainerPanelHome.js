import React from 'react';
import "./ContainerPanelHome.css"
import { DiagramHome } from '../DiagramHome/DiagramHome'; 
import { Weather } from '../../components/Weather/Weather';


const ContainerPanelHome = () => {
    return (
        <div className='containerPanelHome'>
            {/* <Weather/> */}
            <DiagramHome/>
        </div>
    );
}

export { ContainerPanelHome };