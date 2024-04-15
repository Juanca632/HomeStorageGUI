import React, { useEffect, useState } from 'react';
import "./AllCharts.css"
import { BarChart, Card, Divider, Switch, ProgressCircle } from '@tremor/react';
// import { Chart } from '../../components/Chart/Chart'; 
// import { Database } from '../../components/Database/Database';
// import { useGetCharts } from '../../hooks/useGetCharts';
import car from "../../assets/img/car.svg"
import washingMachine from "../../assets/img/washing-machine.svg"
import co2 from "../../assets/img/co2.svg"

const data = [
    {
      date: 'Jan 23',
      'This Year': 68560,
      'Last Year': 28560,
    },
    {
      date: 'Feb 23',
      'This Year': 70320,
      'Last Year': 30320,
    },
    {
      date: 'Mar 23',
      'This Year': 80233,
      'Last Year': 70233,
    },
    {
      date: 'Apr 23',
      'This Year': 55123,
      'Last Year': 45123,
    },
    {
      date: 'May 23',
      'This Year': 56000,
      'Last Year': 80600,
    },
    {
      date: 'Jun 23',
      'This Year': 100000,
      'Last Year': 85390,
    },
    {
      date: 'Jul 23',
      'This Year': 85390,
      'Last Year': 45340,
    },
    {
      date: 'Aug 23',
      'This Year': 80100,
      'Last Year': 70120,
    },
    {
      date: 'Sep 23',
      'This Year': 75090,
      'Last Year': 69450,
    },
    {
      date: 'Oct 23',
      'This Year': 71080,
      'Last Year': 63345,
    },
    {
      date: 'Nov 23',
      'This Year': 61210,
      'Last Year': 100330,
    },
    {
      date: 'Dec 23',
      'This Year': 60143,
      'Last Year': 45321,
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
    const [showComparison, setShowComparison] = useState(false);
    
    return (

        <div className="allCharts">
            <div className="box b1">
                <div className="b1-box">

                    <h3 className="ml-1 mr-1 font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Sales overview
                    </h3>
                    <p className="">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <BarChart
                    data={data}
                    index="date"
                    categories={
                        showComparison ? ['Last Year', 'This Year'] : ['Last Year', 'This Year']
                    }
                    colors={showComparison ? ['emerald',"blue"] : ['blue',"violet"]}
                    valueFormatter={dataFormatter}
                    yAxisWidth={60}
                    className="mt-6 hidden h-60 sm:block"
                    />
                    <BarChart
                    data={data}
                    index="date"
                    categories={
                        showComparison ? ['Last Year', 'This Year'] : ['Last Year', 'This Year']
                    }
                    colors={showComparison ? ['cyan', 'blue'] : ['blue',"violet"]}
                    valueFormatter={valueFormatter}
                    showYAxis={false}
                    className="mt-4 h-56 sm:hidden"
                    />
                    <Divider />
                    <div className="mb-2 flex items-center space-x-3">
                    <Switch
                        id="comparison"
                        onChange={() => setShowComparison(!showComparison)}
                    />
                    <label
                        htmlFor="comparison"
                        className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                    >
                        Show same period last year
                    </label>
                    </div>
                </div>

                <div className="b2">
                    <div className="b2-box">
                        
                    </div>
                    <div className="b2-box">
                        
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
                        <p className="">
                            Énergie autoconsommée grâce au solaire
                        </p>
                        <p className="">
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
                        <p className="">
                            Économie sur ma facture
                        </p>
                        <p className="">
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
                        <p className="">
                            Injection sur le réseau
                        </p>
                        <p className="">
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
                            <p className="">
                            CO2 évité
                            </p>
                            <p className="">
                            2,41 kg
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="b4-box2">
                        <div className="flex justify-start space-x-5 items-center">
                            <img src={washingMachine} alt="Ejemplo" />
                            <div>
                            <p className="">
                                Cycles lave-linge
                            </p>
                            <p className="">
                                344 cycles
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="b4-box2">
                        <div className="flex justify-start space-x-5 items-center">
                            <img src={car} alt="Ejemplo" />
                            <div>
                            <p className="">
                                Km en voiture électrique
                            </p>
                            <p className="">
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




