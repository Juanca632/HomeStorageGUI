import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ProgressCircle, SparkAreaChart, AreaChart, ProgressBar, Card } from '@tremor/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "./Overview.css"
import emoji from "../../assets/img/gif.gif"
import sun from "../../assets/img/sun.png"
import clock from "../../assets/img/clock.png"
import battery from "../../assets/img/battery.svg"
import electricTower from "../../assets/img/electric-tower.svg"
import solarPanel from "../../assets/img/solar-panel.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  DonutChart, Legend, BarChart } from '@tremor/react';
import { Weather } from '../../components/Weather/Weather';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


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
      date: 'Juillet',
      'Gain': 2,
    }
  ];
const productionType = [
    {
      name: 'Solaire',
      sales: 80,
    },
    {
      name: 'Heure Creuse/Pleine',
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
        navigate('/charts');
      },
      onSwipedLeft: () => {
        // Navegar a la ruta "/charts" al detectar un gesto de swipe hacia la derecha
        navigate('/diagram');
      }
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className='overview' {...swipeHandlers}>
            <div className='overview-div-columns-1'>
                {/* <div>
                  <Weather/>
                </div> */}
                <div className='overview-div-rows overview-row-1'>
                <img src={emoji} alt="Emoji" className='emoji'/>
                <p className='p-emoji'>Tout marche bien!</p>
                </div>
                <div className='overview-div-rows overview-row-2'>
                    <p className='title-overview-row-2'>Mes gains viennent d'où ?</p>
                        <DonutChart
                            data={productionType}
                            category="sales"
                            index="name"
                            variant="pie"
                            valueFormatter={dataFormatter2}
                            colors={['yellow', 'blue', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                            className="w-40 donut-chart donut-chart-overview"
                          />
                          <Legend
                            categories={['Solaire','Heure Creuse/Pleine']}
                            colors={['yellow', 'blue', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                            className="max-w-xs"
                          />
                </div>

            </div>
            <div className='overview-div-columns-2'>
                {/* <div className="div-title-overview">
                  <h1><span className='title-span-overview'>SUN</span><span className='title-span-overview-2'>IA</span></h1>
                </div> */}
                <div className='overview-div-rows overview-row-3'>
                  <h3 className='h3-overview'>Mes objectifs <span className='title-span-overview'>SUN</span><span className='title-span-overview-2'>IA</span></h3>
                  <div className='div-info-today'>
                    <p className='monthly-progress-title'>Aujourd'hui</p>
                    <div className='savings-info-day'>
                      <div className='div-sun-overview'>
                        <div className='temperature-overview'>
                          <div>
                            <p>27° C</p>
                            <p>Paris</p>  
                          </div>
                          <img src={sun} alt="sun" className='sun-info'/>
                        </div>
                        <p>
                          Beaucoup de soleil aujourd'hui, vous avez produit <span className='span-sun-info'>15% plus</span> que d'habitude
                        </p>
                      </div>
                      <div className='div-sun-overview'>
                        <img src={clock} alt="clock" className='clock-info'/>
                        <p>
                          Vous avez gagné <span className='span-sun-info'>€1,41</span> pendent les heures creuses
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='progress-data'>
                    <div className='monthly-progress'>
                      {/* <ProgressCircle value={65} size="xl" color="lime" showAnimation="true">
                          <span className="percentage-battery-overview">€18,5</span>
                      </ProgressCircle> */}
                      <p className='monthly-progress-title'>Progrès du mois</p>
                      <Card className="mx-auto max-w-xxl">
                        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                          <span className='span-savings'>€18,5 &bull; 68%</span>
                          <span className='span-savings'>€27</span>
                        </p>
                        <ProgressBar value={68} color="teal" className="mt-3" />
                      </Card>

                      <p className='p-savings'>Les gains sont calculés à partir des heures creuse/pleine et a partir de la production solaire. </p>
                      {/* <p className='p-savings'>Les gains sont calculés à partir des heures creuse/pleine et a partir de la production solaire. <span className='span-savings-moreinfo'>Appuyez ici pour voir des calculs</span></p> */}
                      <div>
                      <Button variant="success" onClick={handleShow} className='button-savings'>
                            Voir mois précedents
                      </Button>
                          <Modal show={show} onHide={handleClose} centered={true}>
                            <Modal.Header closeButton>
                              <Modal.Title>Mes gains du mois précedents</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <BarChart
                            data={data}
                            index="date"
                            categories={['Gain']}
                            colors={["green"]}
                            valueFormatter={dataFormatter}
                            yAxisWidth={60}
                            className="mt-6 hidden h-60 sm:block main-chart chart-overview"
                            />
                            </Modal.Body>
                          </Modal>  
                  </div>
                    </div>
                    {/* <div className='calendar'>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className='calendar-div'>
                            <DateCalendar defaultValue={dayjs('2022-04-17')} readOnly views={['day']}/>
                          </div>
                      </LocalizationProvider>
                    </div> */}

                  </div>
                  

                    {/* <div className='barchart-overview'>
                      <BarChart
                          data={data}
                          index="date"
                          categories={['Gain']}
                          colors={["green"]}
                          valueFormatter={dataFormatter}
                          yAxisWidth={60}
                          className="mt-6 hidden h-60 sm:block main-chart chart-overview"
                          />

                    </div> */}
                </div>

            </div>
        </div>

    );
}

export { Overview };