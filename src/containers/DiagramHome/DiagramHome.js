import React, { useEffect } from 'react';
import "./DiagramHome.css"
import { ItemDiagramHome } from '../../components/ItemDiagramHome/ItemDiagramHome';
import { ItemLinks } from '../../components/ItemLinks/ItemLinks';
import { ItemsContainer } from '../ItemsContainer/ItemsContainer';
import { ProgressCircle, SparkAreaChart, AreaChart } from '@tremor/react';
import { useGetCharts } from '../../hooks/useGetCharts';

const chartdata = [
  {
    month: 'Jan 21',
    Performance: 4000,
    Benchmark: 3000,
  },
  {
    month: 'Feb 21',
    Performance: 3000,
    Benchmark: 2000,
  },
  {
    month: 'Mar 21',
    Performance: 2000,
    Benchmark: 1700,
  },
  {
    month: 'Apr 21',
    Performance: 2780,
    Benchmark: 2500,
  },
  {
    month: 'May 21',
    Performance: 1890,
    Benchmark: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 2390,
    Benchmark: 2000,
  },
  {
    month: 'Jul 21',
    Performance: 3490,
    Benchmark: 3000,
  },
];
const chartdata2 = [
  {
    month: 'Jan 21',
    Performance: 200,
    Benchmark: 3000,
  },
  {
    month: 'Feb 21',
    Performance: 300,
    Benchmark: 2000,
  },
  {
    month: 'Mar 21',
    Performance: 240,
    Benchmark: 1700,
  },
  {
    month: 'Apr 21',
    Performance: 570,
    Benchmark: 2500,
  },
  {
    month: 'May 21',
    Performance: 230,
    Benchmark: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 186,
    Benchmark: 2000,
  },
  {
    month: 'Jul 21',
    Performance: 379,
    Benchmark: 3000,
  },
];

const DiagramHome = () => {

  const API = "http://localhost:8000/soc";

    let soc;

    soc = useGetCharts(API);
    useEffect(() => {
        const chartListAPI = soc;
        localStorage.setItem("chartList", chartListAPI);

        
        
    }, [soc]);

    const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

    return (
      <div className="home">
          <div className="home-box1">
              <div className="consumption">
                <ItemDiagramHome color="dark-grey" title="Consommation" info="1691W" infoConsumption={true}>
                <SparkAreaChart
                    data={chartdata}
                    categories={['Benchmark']}
                    index={'month'}
                    colors={['red']}
                    className="h-8 w-20 sm:h-10 sm:w-36 consumption-chart"
                    showAnimation="true"
                />
                </ItemDiagramHome>
              </div>
          </div>
          <div className="home-box2">
              <div className="solar-panel">
                <ItemDiagramHome color="yellow" title="Panneau Solaire" info="847W">
                <SparkAreaChart
                    data={chartdata}
                    categories={['Performance']}
                    index={'month'}
                    colors={['indigo']}
                    className="h-8 w-20 sm:h-10 sm:w-36"
                    showAnimation="true"
                />
                </ItemDiagramHome>
              </div>
              <div className="homeStorage">
                <ItemDiagramHome color="black" title="ESS" logo={true}>
                    <ProgressCircle value={75} size="xl" color="lime" showAnimation="true">
                        <span className="percentage-battery">75%</span>
                    </ProgressCircle>
                </ItemDiagramHome>
              </div>
              <div className="grid">
                <ItemDiagramHome color="darkblue" title="Reseau Electrique" info="429W">
                  <SparkAreaChart
                    data={chartdata2}
                    categories={['Performance']}
                    index={'month'}
                    colors={['red']}
                    className="h-8 w-20 sm:h-10 sm:w-36"
                    showAnimation="true"
                />
                </ItemDiagramHome>

              </div>

              <div className="vertical-link">
                <ItemLinks className="vertical"/>
              </div>                  
              <div className="horizontal-link">
                <ItemLinks className="horizontal"/>
              </div>                  
          </div>
      </div>
        // <React.Fragment>

            // <ItemsContainer className='itemsContainer column-direction'>
            //     <ItemDiagramHome color="yellow" title="Panneau Solaire" info="----W">
            //     <SparkAreaChart
            //         data={chartdata}
            //         categories={['Performance']}
            //         index={'month'}
            //         colors={['indigo']}
            //         className="h-8 w-20 sm:h-10 sm:w-36"
            //         showAnimation="true"
            //     />
            //     </ItemDiagramHome>
            //     <ItemLinks className="vertical"/>
            // </ItemsContainer>

        //     <ItemsContainer  className='itemsContainer row-direction'>
        //         <ItemDiagramHome color="darkblue" title="Reseau" info="----W">
        //         <SparkAreaChart
        //             data={chartdata}
        //             categories={['Performance']}
        //             index={'month'}
        //             colors={['red']}
        //             className="h-8 w-20 sm:h-10 sm:w-36"
        //             showAnimation="true"
        //         />
        //         </ItemDiagramHome>
                
        //         {/* value={soc} */}
        //         <ItemLinks className="horizontal"/>
        //         <ItemDiagramHome color="black" title="Home Storage" logo={true}>
        //             <ProgressCircle value={35} size="xl" color="lime" showAnimation="true">
        //                 <span className="percentage-battery">35%</span>
        //             </ProgressCircle>
        //         </ItemDiagramHome>

        //         <ItemLinks className="horizontal"/>

        //         <ItemDiagramHome color="orange" title="Charge" info="----W">
        //         <SparkAreaChart
        //             data={chartdata}
        //             categories={['Performance']}
        //             index={'month'}
        //             colors={['cyan']}
        //             className="h-8 w-20 sm:h-10 sm:w-36"
        //             showAnimation="true"
        //         />
        //         </ItemDiagramHome>

        //     </ItemsContainer>

        // </React.Fragment>
    );
}

export { DiagramHome };