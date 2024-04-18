import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ContainerPanelHome } from '../../containers/ContainerPanelHome/ContainerPanelHome';


const Home = () => {
    const navigate = useNavigate();


    const swipeHandlers = useSwipeable({
      onSwipedRight: () => {
        // Navegar a la ruta "/charts" al detectar un gesto de swipe hacia la derecha
        navigate('/charts');
      },
      onSwipedLeft: () => {
        // Navegar a la ruta "/charts" al detectar un gesto de swipe hacia la derecha
        navigate('/Overview');
      }
    });
  
    return (
      <div {...swipeHandlers}>
        <ContainerPanelHome />
      </div>
    );
  }
  
  export { Home };