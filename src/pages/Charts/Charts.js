import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import "./Charts.css"
import { AllCharts } from '../../containers/AllCharts/AllCharts';


const Charts = () => {

    const navigate = useNavigate();
  
    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => {
        // Navegar a la ruta "/charts" al detectar un gesto de swipe hacia la derecha
        navigate('/');
      },
    });
    return (
        <div {...swipeHandlers}>
            <div className='charts'>
                <AllCharts/>
            </div>
        </div>
    );
}

export { Charts };