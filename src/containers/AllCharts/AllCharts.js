import React, { useEffect, useState } from 'react';
import "./AllCharts.css"
import { BarChart, Card, Divider, Switch, ProgressCircle, DonutChart, Legend } from '@tremor/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Chart } from '../../components/Chart/Chart'; 
// import { Database } from '../../components/Database/Database';
// import { useGetCharts } from '../../hooks/useGetCharts';
import car from "../../assets/img/car.svg"
import washingMachine from "../../assets/img/washing-machine.svg"
import co2 from "../../assets/img/co2.svg"
import solarPanel from "../../assets/img/solar-panel.svg"
import electricEnergy from "../../assets/img/electric-energy.svg"
import arrowsCircle from "../../assets/img/arrows-circle.svg"
import arrowsVertical from "../../assets/img/arrows-vertical.svg"
import electricTower from "../../assets/img/electric-tower.svg"
import battery from "../../assets/img/battery.svg"
import logo2 from "../../assets/img/logo2.png"
import bike from "../../assets/img/bike.svg"

import eolic from "../../assets/mix-carbone/eolic.svg"
import solar from "../../assets/mix-carbone/solar.svg"
import coal from "../../assets/mix-carbone/coal.svg"
import nuclear from "../../assets/mix-carbone/nuclear.svg"
import hydraulic from "../../assets/mix-carbone/hydraulic.svg"
import gas from "../../assets/mix-carbone/gas.svg"
import fuel from "../../assets/mix-carbone/fuel.svg"
import bio from "../../assets/mix-carbone/bio.svg"
import heating from "../../assets/img/heating.svg"

const data = [
    {
      date: '0h',
      'Production solaire': 0,
      'Consommation réseau': 0.1,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '1h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '2h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '3h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '4h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '5h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '6h',
      'Production solaire': 0,
      'Consommation réseau': 0.2,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '7h',
      'Production solaire': 0.1,
      'Consommation réseau': 0.3,
      'Énergie autoconsommée': 0,
      'Énergie stockée': 0
    },
    {
      date: '8h',
      'Production solaire': 0.3,
      'Consommation réseau': 0.4,
      'Énergie autoconsommée': 0.3,
      'Énergie stockée': 0
    },
    {
      date: '9h',
      'Production solaire': 0.8,
      'Consommation réseau': 0.6,
      'Énergie autoconsommée': 0.8,
      'Énergie stockée': 0
    },
    {
      date: '10h',
      'Production solaire': 0.9,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0.9,
      'Énergie stockée': 0
    },
    {
      date: '11h',
      'Production solaire': 1.2,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 1.2,
      'Énergie stockée': 0
    },
  ];

  const chartdata = [
    {
      name: 'Octobre',
      'Énergie stockée': 288,
    },
    {
      name: 'Novembre',
      'Énergie stockée': 245,
    },
    {
      name: 'Décembre',
      'Énergie stockée': 143,
    },
    {
      name: 'Janvier',
      'Énergie stockée': 181,
    },
    {
      name: 'Fevrier',
      'Énergie stockée': 251,
    },
    {
      name: 'Mars',
      'Énergie stockée': 232,
    },
    {
      name: 'Avril',
      'Énergie stockée': 300,
    },
    {
      name: 'Mai',
      'Énergie stockée': 300,
    },
    {
      name: 'Juin',
      'Énergie stockée': 420,
    },
    {
      name: 'Julliet',
      'Énergie stockée': 500,
    },
    {
      name: 'Août',
      'Énergie stockée': 400,
    },
    {
      name: 'Septembre',
      'Énergie stockée': 340,
    }
  ];

  const productionType = [
    {
      name: 'Production de pétrole fossile',
      sales: 0.9,
    },
    {
      name: 'Production nucléaire',
      sales: 0.2,
    },
    {
      name: 'Production solaire',
      sales: 0.4,
    },
    {
      name: 'Production de déchets',
      sales: 0.1,
    },
    {
      name: "production d'énergie éolienne",
      sales: 0.3,
    },
    {
      name: "génération de réservoirs d'eau hydroélectrique",
      sales: 0.7,
    },
    {
      name: 'Autres',
      sales: 1.5,
    }
  ];
  const sales = [
    {
      name: 'Eau chaude',
      sales: 0.9,
    },
    {
      name: 'Électroménager',
      sales: 0.2,
    },
    {
      name: 'Cuisson',
      sales: 0.4,
    },
    {
      name: 'Audiovisuel',
      sales: 0.1,
    },
    {
      name: 'Éclairage',
      sales: 0.3,
    },
    {
      name: 'Autres',
      sales: 0.7,
    },
    {
      name: 'Chauffage',
      sales: 1.5,
    }
  ];
  

function valueFormatter(number) {
    const formatter = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short',
      style: 'currency',
      currency: 'USD',
    });
  
    return formatter.format(number);
  }
  
  const dataFormatter = (number) => {
    // Formatea el valor numérico
    const formattedValue = Intl.NumberFormat('en-US', {
      maximumFractionDigits: 1,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(number);
  
    // Concatena "kWh" al valor formateado
    return `${formattedValue} kWh`;
  };

  const totalValue = productionType.reduce((acc, curr) => acc + curr.sales, 0);

  console.log("La suma de todas las ventas es:", totalValue);

  const dataFormatter2 = (number) => {
    const percentage = (number / totalValue) * 100;
    return `${percentage.toFixed(2)}%`;
  };

const AllCharts = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    return (

        <div className="allCharts">
            <div className="div-title-charts">
              <h1><span className="span-title"></span>Home<span className="span-title"></span>Stora<img src={logo2} className="img-logo"></img>e</h1>
            </div>
            <div className="box b1">
                <div className="b1-box">
                    <BarChart
                    data={data}
                    index="date"
                    categories={['Énergie stockée','Consommation réseau', 'Énergie autoconsommée','Production solaire']}
                    colors={["orange",'blue','green',"yellow"]}
                    valueFormatter={dataFormatter}
                    yAxisWidth={60}
                    className="mt-6 hidden h-60 sm:block main-chart"
                    />
                </div>

                <div className="b2">
                    <div className="b2-box">
                      <div className="b2-boxes dividerbox">
                              {/* <p className="text-card text-card-above">dont :</p> */}
                              <div className="b4-box2">
                                <div className="flex justify-start space-x-5 items-center">
                                  <div className="div-svg electric-tower-div">
                                    <img src={battery} alt="Ejemplo" className="img-svg"/>

                                  </div>
                                    <div>
                                    <p className="text-card">
                                        Énergie stockée
                                    </p>
                                    <p className="text-card">
                                        0kWh
                                    </p>
                                    </div>
                                </div>
                              </div>
                          </div>

                        <div className="b2-boxes ">
                            <div className="b4-box2">
                              <div className="flex justify-start space-x-5 items-center">
                                  <div className="div-svg solar-panel-div">
                                    <img src={solarPanel} alt="Ejemplo" className="img-svg"/> 
                                  </div>
                                  <div>
                                  <p className="text-card">
                                      Production solaire
                                  </p>
                                  <p className="text-card">
                                      1,1kWh
                                  </p>
                                  </div>
                              </div>
                            </div>
                            <p className="text-card text-card-below">Consommé sur la période, soit 6,47 km en voiture électrique</p>
                        </div>

                        
                    </div>
                    <div className="b2-box">
                        <div className="b2-boxes dividerbox">

                            <div className="b4-box2">
                              <div className="flex justify-start space-x-5 items-center">
                                  <div className="div-svg electric-energy-div">
                                    <img src={electricEnergy} alt="Ejemplo" className="img-svg"/>
                                  </div>
                                  <div>
                                  <p className="text-card">
                                      Consommation totale
                                  </p>
                                  <p className="text-card">
                                      1,9kWh
                                  </p>
                                  </div>
                              </div>
                            </div>
                            <p className="text-card text-card-below">Consommé sur la période, soit 11,18 km en voiture électrique</p>
                        </div>
                        <div className="b2-boxes">
                            {/* <p className="text-card text-card-above">dont :</p> */}
                            <div className="b4-box2">
                              <div className="flex justify-start space-x-5 items-center">
                                  <div className="div-svg arrows-vertical-div">
                                    <img src={arrowsVertical} alt="Ejemplo" className="img-svg"/>
                                  </div>
                                  <div>
                                  <p className="text-card">
                                      Consommation réseau
                                  </p>
                                  <p className="text-card">
                                      0.8kWh
                                  </p>
                                  </div>
                              </div>
                              <div style={{ height: '10px' }}>
                                
                              </div>
                              <div className="flex justify-start space-x-5 items-center">
                                  <div className="div-svg arrows-circle-div">
                                    <img src={arrowsCircle} alt="Ejemplo" className="img-svg"/>
                                  </div>
                                  <div>
                                  <p className="text-card">
                                      Énergie autoconsommée
                                  </p>
                                  <p className="text-card">
                                      1,1kWh
                                  </p>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="box b3">
                <div className="b3-box title">
                    <h3>Récapitulatif de mois en cours</h3>
                    {/* <p>Analysez votre énergie autoconsommée, économies et énergie stockée sur la batterie du mois en cours: </p> */}
                </div>
                <div className="progress-circles">
                  <div className="b3-box progress-circle">
                      <div className="flex justify-start space-x-5 items-center">
                          <ProgressCircle value={62.8} size="lg" color="violet">
                          <span className="text-xs font-medium text-slate-700">62,8%</span>
                          </ProgressCircle>
                          <div>
                          <p className="text-card">
                              Énergie autoconsommée grâce au solaire
                          </p>
                          <p className="text-card">
                              108,2kWh
                          </p>
                          </div>
                      </div>

                  </div>
                  <div className="b3-box progress-circle">
                      <div className="flex justify-start space-x-5 items-center">
                          <ProgressCircle value={71.4} size="lg" color="blue">
                          <span className="text-xs font-medium text-slate-700">71,4%</span>
                          </ProgressCircle>
                          <div>
                          <p className="text-card">
                              Économie sur ma facture
                          </p>
                          <p className="text-card">
                              108,2kWh
                          </p>
                          </div>
                      </div>
                  </div>
                  <div className="b3-box progress-circle"> 
                      <div className="flex justify-start space-x-5 items-center">
                          <ProgressCircle value={37.2} size="lg" color="red">
                          <span className="text-xs font-medium text-slate-700">37,2%</span>
                          </ProgressCircle>
                          <div>
                          <p className="text-card">
                              Énergie stockée
                          </p>
                          <p className="text-card">
                              64kWh
                          </p>
                          </div>
                      </div>
                  </div>


                </div>
            </div>

            <div className="box b4">
                <div className="b4-box title">
                    <h3>Quelques chiffres du mois en cours</h3>
                    <br></br>
                    <p>Depuis le début du mois vous avez reduit 172,2 kWh d'énergie, soit: </p>
                </div>
                <div className="b4-box b4-boxes">
                    <div className="b4-box2 mix-carbone">
                        <div className="flex justify-start space-x-5 items-center">
                            <img src={co2} alt="Ejemplo" />
                            <div>
                            <p className="text-card">
                            CO2 évité
                            </p>
                            <p className="text-card">
                            2,41 kg
                            </p>
                            
                            </div>
                        </div>

                        <div>
                          <Button variant="success" onClick={handleShow}>
                            Mix carbone
                          </Button>

                          <Modal show={show} onHide={handleClose} centered={true}>
                            <Modal.Header closeButton>
                              <Modal.Title>Mon empreinte carbone: 2,41 Kg</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <p className='empreinte-carbone-subtitle'>Décomposition par filière</p>
                              <div className='empreinte-carbone'>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={bio} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Bioénergies</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>580 g</p>
                                </div>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={fuel} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Fioul</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>160 g</p>
                                </div>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={gas} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Gaz</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>420 g</p>
                                </div>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={hydraulic} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Hydraulique</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>71 g</p>
                                </div>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={nuclear} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Nucléaire</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>300 g</p>
                                </div>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={coal} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Charbon</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>0 g</p>
                                </div>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={solar} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Solaire</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>190 g</p>
                                </div>
                                <div className='empreinte-carbone-card'>
                                  <div className='empreinte-carbone-div'>
                                    <img src={eolic} alt="Ejemplo" className='empreinte-carbone-img'/>
                                    <p>Éolien</p>
                                  </div>
                                  <p className='empreinte-carbone-p'>160 g</p>
                                </div>
                       
                              </div>
                              <div className='empreinte-carbone-info'>
                                <p>Comment est-elle calculée ?</p>
                                <p>L'électricité que vous utilisez provient d'un mix énergetique français en constante évolution, composé notamment d'énergies renouvelables comme le solaire et l'éolien, ainsi que du nucléaire.
                                  Lorsque ces sources dominent, votre empreinte carbone est réduite.
                                  <br></br>
                                  Cependent, lors des périodes de forte demande, principalement pendent les périodes sombres et froides les énergies fossiles prennent le relais, augmentant ainsi vos émissions de CO2
                                </p>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </div>
                    </div>
                    <div className="b4-box2">
                        <div className="flex justify-start space-x-5 items-center">
                            <img src={bike} alt="Ejemplo" />
                            <div>
                            <p className="text-card">
                              Kilomètres en vélo
                            </p>
                            <p className="text-card">
                                275 Km
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="b4-box2">
                        <div className="flex justify-start space-x-5 items-center">
                            <img src={car} alt="Ejemplo" />
                            <div>
                            <p className="text-card">
                                Km en voiture électrique
                            </p>
                            <p className="text-card">
                                1012,94 km
                            </p>
                            </div>

                        </div>
                    </div>
                    <div className="b4-box2">
                        <div className="flex justify-start space-x-5 items-center">
                            <img src={heating} alt="Ejemplo" />
                            <div>
                            <p className="text-card">
                                Chauffage électrique
                            </p>
                            <p className="text-card">
                                12.5 h
                            </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="box b5">
                <h3>Énergie stockée les 12 derniers mois</h3>
                <BarChart
                    data={chartdata}
                    index="name"
                    categories={['Énergie stockée']}
                    colors={['amber']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={60}
                    onValueChange={(v) => console.log(v)}
                    className="b5-barchart"
                    layout="hola"
                />
            </div>

            <div className="box b6">
                <div className="b3-box title">
                    <h3>Répartition énergetique</h3>
                    {/* <p>Analysez votre énergie autoconsommée, économies et énergie stockée sur la batterie du mois en cours: </p> */}
                </div>
                <div className="progress-circles progress-circle-b6">
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
                </div>
            </div>
            <div className="box b7">
                <div className="b3-box title">
                    <h3>Génération par type de production</h3>
                    {/* <p>Analysez votre énergie autoconsommée, économies et énergie stockée sur la batterie du mois en cours: </p> */}
                </div>
                <div className="progress-circles progress-circle-b6">
                  <div className="b3-box">
                      <div className="flex justify-start space-x-5 items-center donut-chart-div">
                      <div className="flex items-center justify-center space-x-6 donut-chart-div ">
                          <DonutChart
                            data={productionType}
                            category="sales"
                            index="name"
                            variant="pie"
                            valueFormatter={dataFormatter2}
                            colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                            className="w-40 donut-chart"
                          />
                          <Legend
                            categories={['Production de pétrole fossile', 'Production nucléaire', "Production solaire", 'Production de déchets ', "Production d'énergie éolienne", 'Autres']}
                            colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia', 'red', 'green']}
                            className="max-w-xs"
                          />

                          </div>
                      </div>

                  </div>
                </div>
            </div>

            
    </div>
    );
}
export { AllCharts };




// const AllCharts = () => {

//     const API = "http://localhost:8000/charts";

//     let charts;

//     charts = useGetCharts(API);
//     useEffect(() => {
//         const chartListAPI = charts;
//         localStorage.setItem("chartList", chartListAPI);

        
        
//     }, [charts]);

//     if (charts && charts.length > 0 && charts[0].length > 0) {
//         var label1 = Object.keys(charts[0][0]);
//     }

//     return (
//         <div className='allCharts'>
//             <Chart datos={charts[0]} label={label1} title={"PowerT"} />
//             <Chart datos={charts[0]} label={label1} title={"Power"}/>
//             <Chart datos={charts[0]} label={label1} title={"SOC"}/>
//         </div>
//     );
// }

// export { AllCharts };




