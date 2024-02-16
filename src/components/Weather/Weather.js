import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date()); // Estado para almacenar la hora actual

  const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const getImageForIcon = (iconCode) => {
    const iconMap = {
      '11d': 'https://openweathermap.org/img/wn/11d@2x.png',
      '09d': 'https://openweathermap.org/img/wn/09d@2x.png',
      '10d': 'https://openweathermap.org/img/wn/10d@2x.png',
      '13d': 'https://openweathermap.org/img/wn/13d@2x.png',
      '50d': 'https://openweathermap.org/img/wn/50d@2x.png',
      '01d': 'https://openweathermap.org/img/wn/01d@2x.png',
      '01n': 'https://openweathermap.org/img/wn/01n@2x.png',
      '02d': 'https://openweathermap.org/img/wn/02d@2x.png',
      '02n': 'https://openweathermap.org/img/wn/02n@2x.png',
      '03d': 'https://openweathermap.org/img/wn/03d@2x.png',
      '03n': 'https://openweathermap.org/img/wn/03n@2x.png',
      '04d': 'https://openweathermap.org/img/wn/04d@2x.png',
      '04n': 'https://openweathermap.org/img/wn/04n@2x.png',
      // Puedes agregar más códigos de iconos aquí según sea necesario
    };

    if (iconMap.hasOwnProperty(iconCode)) {
      return <img src={iconMap[iconCode]} alt={`Icono de clima: ${iconCode}`} />;
    }
  };

  useEffect(() => {
    // Función para actualizar la hora actual cada segundo
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Realiza la solicitud a la API del clima al cargar el componente
    axios.get(url)
      .then(response => {
        setData(response.data);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(interval);
  }, []); // Se pasa un arreglo vacío como segundo argumento para ejecutar el efecto solo una vez al montar el componente

  return (
    <div className="weather">
      <div className='time'>
        <span>{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      </div>
      <div className="weather-info">
        <div className="description">
          {data.weather?.[0] && getImageForIcon(data.weather[0].icon)}
        </div>

        <div className='weather-temp'>
          <div className="temp">
            {data.main ? <span>{((data.main.temp-32)/1.8).toFixed()}°C</span> : null}
          </div>
          
          <div className="location">
            <p>{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Weather };
