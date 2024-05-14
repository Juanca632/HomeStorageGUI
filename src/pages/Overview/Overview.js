import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ProgressCircle, SparkAreaChart, AreaChart } from '@tremor/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "./Overview.css"
import emoji from "../../assets/img/gif.gif"
import battery from "../../assets/img/battery.svg"
import electricTower from "../../assets/img/electric-tower.svg"
import solarPanel from "../../assets/img/solar-panel.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  DonutChart, Legend, BarChart } from '@tremor/react';

const data = [
    {
      date: 'Janvier',
      'Gain': 20,
    },
    {
      date: 'Fevrier',
      'Gain': 40,
    },
    {
      date: 'Mars',
      'Gain': 10,
    },
    {
      date: 'Avril',
      'Gain': 5,
    },
    {
      date: 'Mai',
      'Gain': 15,
    },
    {
      date: 'June',
      'Gain': 8,
    },
    {
      date: 'Julliet',
      'Gain': 2,
    }
  ];
const productionType = [
    {
      name: 'Solaire',
      sales: 80,
    },
    {
      name: 'Heure Cleuse/Pleine',
      sales: 20,
    }
  ];

  const dataFormatter = (number) => {
    // Formatea el valor numérico
    const formattedValue = Intl.NumberFormat('en-US', {
      maximumFractionDigits: 1,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(number);
  
    // Concatena "kWh" al valor formateado
    return `€${formattedValue}`;
  };

const totalValue = productionType.reduce((acc, curr) => acc + curr.sales, 0);

const dataFormatter2 = (number) => {
    const percentage = (number / totalValue) * 100;
    return `${percentage.toFixed(2)}%`;
  };

const Overview = () => {

    const navigate = useNavigate();


    const swipeHandlers = useSwipeable({
      onSwipedRight: () => {
        // Navegar a la ruta "/charts" al detectar un gesto de swipe hacia la derecha
        navigate('/');
      }
    });



    return (
        <div className='overview' {...swipeHandlers}>
            <div className='overview-div-columns'>
                <div className='overview-div-rows overview-row-1'>
                <img src={emoji} alt="Emoji" className='emoji'/>
                <p className='p-emoji'>Tout marche bien!</p>
                </div>
                <div className='overview-div-rows overview-row-2'>
                        <DonutChart
                            data={productionType}
                            category="sales"
                            index="name"
                            variant="pie"
                            valueFormatter={dataFormatter2}
                            colors={['yellow', 'blue', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                            className="w-40 donut-chart"
                          />
                          <Legend
                            categories={['Solaire','Heure Cleuse/Pleine']}
                            colors={['yellow', 'blue', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                            className="max-w-xs"
                          />
                </div>

            </div>
            <div className='overview-div-columns'>
                <div className='overview-div-rows overview-row-3'>
                    <h3 className='h3-overview'>Gain</h3>
                    <ProgressCircle value={65} size="xl" color="lime" showAnimation="true">
                        <span className="percentage-battery-overview">65%</span>
                    </ProgressCircle>
                    <p className='p-savings'>€18,5 / €27</p>
                    <div className='barchart-overview'>
                      <BarChart
                          data={data}
                          index="date"
                          categories={['Gain']}
                          colors={["green"]}
                          valueFormatter={dataFormatter}
                          yAxisWidth={60}
                          className="mt-6 hidden h-60 sm:block main-chart chart-overview"
                          />

                    </div>
                </div>

            </div>
        </div>

    );
}

export { Overview };