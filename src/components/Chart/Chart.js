import React, { useEffect } from 'react';
import { LineChart } from '@tremor/react';
import "./Chart.css"

  
  const dataFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}W`;

const Chart = (props) => {

    let labelFiltered = props.label;

    if(props.label){
        labelFiltered = props.label.filter(elemento => elemento !== "hour");
    }

    return (
        <div className='chart'>
            <div className='title'>
                {props.title}
            </div>
            <LineChart  
                data={props.datos}
                index="hour"
                categories={labelFiltered}
                colors={['indigo', 'amber', 'emerald']}
                valueFormatter={dataFormatter}
                yAxisWidth={70}
                onValueChange={(v) => console.log(v)}
                showAnimation="true"
            />
        </div>
    );
}

export { Chart };