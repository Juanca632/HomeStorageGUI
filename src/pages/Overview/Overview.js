import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ProgressCircle, SparkAreaChart, AreaChart } from '@tremor/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "./Overview.css"
import emoji from "../../assets/img/emoji.png"
import battery from "../../assets/img/battery.svg"
import electricTower from "../../assets/img/electric-tower.svg"
import solarPanel from "../../assets/img/solar-panel.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  DonutChart, Legend } from '@tremor/react';

const sales = [
    {
      name: 'Eau chaude',
      sales: 9.5,
    },
    {
      name: 'Électroménager',
      sales: 16.3,
    },
    {
      name: 'Cuisson',
      sales: 0.4,
    },
    {
      name: 'Audiovisuel',
      sales: 1.3,
    },
    {
      name: 'Éclairage',
      sales: 4.2,
    },
    {
      name: 'Autres',
      sales: 3.4,
    },
    {
      name: 'Chauffage',
      sales: 16.8,
    }
  ];


const Overview = () => {

    const navigate = useNavigate();
  
    const swipeHandlers = useSwipeable({
      onSwipedRight: () => {
        // Navegar a la ruta "/charts" al detectar un gesto de swipe hacia la derecha
        navigate('/');
      },
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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


    return (
        

        
        <div {...swipeHandlers} className='overview'>

            <div className='overview-box overview-box1'>
            <div className='overview-box1-info'>
                <img src={solarPanel} alt="emoji" className=''></img>
                <p>539 W</p>
            </div>
            <CircularProgressbar
                    value={80}
                    className='circular-progressbar1'
                    circleRatio={0.4}
                    styles={{
                        trail: {
                            
                            transform: "rotate(-162deg)",
                            transformOrigin: "center center"
                        },
                        path:{
                            
                            transform: "rotate(-162deg)",
                            transformOrigin: "center center",
                            stroke: "#FFC000"
                        },
                        text:{
                            fill: "#ddd"
                        }
                    }}
                    strokeWidth={5}
                />
            </div>
            <div className='overview-box'>
                    <ProgressCircle value={75} size="xl" color="blue" showAnimation="true">
                        <div className='progress-circle-div'>
                            <div className='progress-circle-box1'>
                                <img src={battery} alt="battery" className=''></img>
                                <p>Batterie</p>
                            </div>
                            <div className='progress-circle-box2'>
                                <img src={emoji} alt="emoji" className='emoji'></img>
                            </div>
                            <div className='savings'>
                                <Button variant="success" onClick={handleShow}>
                                    Mon epargne
                                </Button>

                                <Modal show={show} onHide={handleClose} centered={true}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Mon epargne en cours du mois</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className="b3-box">
                                        <div className="flex justify-start space-x-5 items-center donut-chart-div">
                                        <div className="flex items-center justify-center space-x-6 donut-chart-div ">
                                            <DonutChart
                                                data={sales}
                                                category="sales"
                                                index="name"
                                                valueFormatter={dataFormatter}
                                                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                                                className="w-40 donut-chart"
                                            />
                                            <Legend
                                                categories={['Eau chaude', 'Électroménager', 'Cuisson', 'Audiovisuel', 'Éclairage', 'Autres', 'Chauffage']}
                                                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                                                className="max-w-xs"
                                            />

                                            </div>
                                        </div>

                                    </div>
                                    </Modal.Body>
                                </Modal>
                            </div>

                        </div>
                    </ProgressCircle>
            </div>
            <div className='overview-box overview-box2'>
            <div className='overview-box2-info'>
                <p>1582 W</p>
                <img src={electricTower} alt="emoji" className=''></img>
            </div>  
            <CircularProgressbar
                    value={40}
                    className={`circular-progressbar2 mirrored-progress`}
                    circleRatio={0.4}
                    styles={{
                        trail: {
                            transform: "rotate(-162deg)", // Mantén la rotación original
                            transformOrigin: "center center"
                        },
                        path: {
                            transform: "rotate(-162deg)", // Mantén la rotación original
                            transformOrigin: "center center",
                            stroke: "#DE714C"
                        },
                        text: {
                            fill: "#ddd"
                        }
                    }}
                    strokeWidth={5}
                />

            </div>
        </div>
    );
}

export { Overview };