import React, { useEffect, useState } from 'react';
import "./AllCharts.css"
import { BarChart, Card, Divider, Switch, ProgressCircle } from '@tremor/react';
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

const data = [
    {
      date: '0h',
      'Production solaire': 0,
      'Consommation réseau': 0.1,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '1h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '2h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '3h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '4h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '5h',
      'Production solaire': 0,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '6h',
      'Production solaire': 0,
      'Consommation réseau': 0.2,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '7h',
      'Production solaire': 0.1,
      'Consommation réseau': 0.3,
      'Énergie autoconsommée': 0,
      'Injection réseau': 0
    },
    {
      date: '8h',
      'Production solaire': 0.3,
      'Consommation réseau': 0.4,
      'Énergie autoconsommée': 0.3,
      'Injection réseau': 0
    },
    {
      date: '9h',
      'Production solaire': 0.8,
      'Consommation réseau': 0.6,
      'Énergie autoconsommée': 0.8,
      'Injection réseau': 0
    },
    {
      date: '10h',
      'Production solaire': 0.9,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 0.9,
      'Injection réseau': 0
    },
    {
      date: '11h',
      'Production solaire': 1.2,
      'Consommation réseau': 0,
      'Énergie autoconsommée': 1.2,
      'Injection réseau': 0
    },
  ];

  const chartdata = [
    {
      name: 'Octobre',
      'Surplus sur le réseau': 288,
    },
    {
      name: 'Novembre',
      'Surplus sur le réseau': 245,
    },
    {
      name: 'Décembre',
      'Surplus sur le réseau': 143,
    },
    {
      name: 'Janvier',
      'Surplus sur le réseau': 181,
    },
    {
      name: 'Fevrier',
      'Surplus sur le réseau': 251,
    },
    {
      name: 'Mars',
      'Surplus sur le réseau': 232,
    },
    {
      name: 'Avril',
      'Surplus sur le réseau': 300,
    },
    {
      name: 'Mai',
      'Surplus sur le réseau': 300,
    },
    {
      name: 'Juin',
      'Surplus sur le réseau': 420,
    },
    {
      name: 'Julliet',
      'Surplus sur le réseau': 500,
    },
    {
      name: 'Août',
      'Surplus sur le réseau': 400,
    },
    {
      name: 'Septembre',
      'Surplus sur le réseau': 340,
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

const AllCharts = () => {
    
    return (

        <div className="allCharts">
            <div className="box b1">
                <div className="b1-box">
                    <BarChart
                    data={data}
                    index="date"
                    categories={['Injection réseau','Consommation réseau', 'Énergie autoconsommée','Production solaire']}
                    colors={["orange",'blue','green',"yellow"]}
                    valueFormatter={dataFormatter}
                    yAxisWidth={60}
                    className="mt-6 hidden h-60 sm:block"
                    />
                </div>

                <div className="b2">
                    <div className="b2-box">
                        <div className="b2-boxes dividerbox">
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
                        <div className="b2-boxes">
                            <p className="text-card text-card-above">dont :</p>
                            <div className="b4-box2">
                              <div className="flex justify-start space-x-5 items-center">
                                <div className="div-svg electric-tower-div">
                                  <img src={electricTower} alt="Ejemplo" className="img-svg"/>

                                </div>
                                  <div>
                                  <p className="text-card">
                                      Injection réseau
                                  </p>
                                  <p className="text-card">
                                      0kWh
                                  </p>
                                  </div>
                              </div>
                            </div>
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
                            <p className="text-card text-card-above">dont :</p>
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
                    <p>Analysez votre énergie autoconsommée, économies et injection sur le réseau du mois en cours: </p>
                </div>
                <div className="b3-box">
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
                <div className="b3-box">
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
                <div className="b3-box"> 
                    <div className="flex justify-start space-x-5 items-center">
                        <ProgressCircle value={37.2} size="lg" color="red">
                        <span className="text-xs font-medium text-slate-700">37,2%</span>
                        </ProgressCircle>
                        <div>
                        <p className="text-card">
                            Injection sur le réseau
                        </p>
                        <p className="text-card">
                            64kWh
                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box b4">
                <div className="b4-box title">
                    <h3>Quelques chiffres du mois en cours</h3>
                    <p>Depuis le début du mois vous avez produit 172,2 kWh d'énergie, soit: </p>
                </div>
                <div className="b4-box b4-boxes">
                    <div className="b4-box2">
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
                    </div>
                    <div className="b4-box2">
                        <div className="flex justify-start space-x-5 items-center">
                            <img src={washingMachine} alt="Ejemplo" />
                            <div>
                            <p className="text-card">
                                Cycles lave-linge
                            </p>
                            <p className="text-card">
                                344 cycles
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
                </div>
            </div>

            <div className="box b5">
                <h3>Injection de surplus les 12 derniers mois</h3>
                <BarChart
                    data={chartdata}
                    index="name"
                    categories={['Surplus sur le réseau']}
                    colors={['amber']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={60}
                    onValueChange={(v) => console.log(v)}
                    className="b5-barchart"
                    layout="hola"
                />
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




