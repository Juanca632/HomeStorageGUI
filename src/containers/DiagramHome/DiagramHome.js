import React, { useEffect } from 'react';
import "./DiagramHome.css"
import { ItemDiagramHome } from '../../components/ItemDiagramHome/ItemDiagramHome';
import { ItemLinks } from '../../components/ItemLinks/ItemLinks';
import { ItemsContainer } from '../ItemsContainer/ItemsContainer';
import { ProgressCircle, SparkAreaChart } from '@tremor/react';
import { useGetCharts } from '../../hooks/useGetCharts';

const chartdata = [
    {
      month: 'Jan 21',
      Performance: 4000,
    },
    {
      month: 'Feb 21',
      Performance: 3000,
    },
    {
      month: 'Mar 21',
      Performance: 2000,
    },
    {
      month: 'Apr 21',
      Performance: 2780,
    },
    {
      month: 'May 21',
      Performance: 1890,
    },
    {
      month: 'Jun 21',
      Performance: 2390,
    },
    {
      month: 'Jul 21',
      Performance: 3490,
    },
  ]

const DiagramHome = () => {

  const API = "http://localhost:8000/soc";

    let soc;

    soc = useGetCharts(API);
    useEffect(() => {
        const chartListAPI = soc;
        localStorage.setItem("chartList", chartListAPI);

        
        
    }, [soc]);
    return (
        <React.Fragment>

            <ItemsContainer className='itemsContainer column-direction'>
                <ItemDiagramHome color="yellow" title="Solar Panel" info="6323W">
                <SparkAreaChart
                    data={chartdata}
                    categories={['Performance']}
                    index={'month'}
                    colors={['indigo']}
                    className="h-8 w-20 sm:h-10 sm:w-36"
                    showAnimation="true"
                />
                </ItemDiagramHome>
                <ItemLinks className="vertical"/>
            </ItemsContainer>

            <ItemsContainer  className='itemsContainer row-direction'>
                <ItemDiagramHome color="green" title="Grid" info="6323W">
                <SparkAreaChart
                    data={chartdata}
                    categories={['Performance']}
                    index={'month'}
                    colors={['red']}
                    className="h-8 w-20 sm:h-10 sm:w-36"
                    showAnimation="true"
                />
                </ItemDiagramHome>

                <ItemLinks className="horizontal"/>

                <ItemDiagramHome color="grey" title="Battery">
                    <ProgressCircle value={soc} size="xl" color="lime" showAnimation="true">
                        <span className="percentage-battery">{soc}%</span>
                    </ProgressCircle>
                </ItemDiagramHome>

                <ItemLinks className="horizontal"/>

                <ItemDiagramHome color="orange" title="Load" info="6323W">
                <SparkAreaChart
                    data={chartdata}
                    categories={['Performance']}
                    index={'month'}
                    colors={['cyan']}
                    className="h-8 w-20 sm:h-10 sm:w-36"
                    showAnimation="true"
                />
                </ItemDiagramHome>

            </ItemsContainer>

        </React.Fragment>
    );
}

export { DiagramHome };