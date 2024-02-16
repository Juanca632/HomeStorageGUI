import React, { useEffect, useState } from 'react';
import "./AllCharts.css"
import { Chart } from '../../components/Chart/Chart'; 
import { Database } from '../../components/Database/Database';
import { useGetCharts } from '../../hooks/useGetCharts';


const AllCharts = () => {

    const API = "http://localhost:8000/charts";

    let charts;

    charts = useGetCharts(API);
    useEffect(() => {
        const chartListAPI = charts;
        localStorage.setItem("chartList", chartListAPI);

        
        
    }, [charts]);

    if (charts && charts.length > 0 && charts[0].length > 0) {
        var label1 = Object.keys(charts[0][0]);
    }

    return (
        <div className='allCharts'>
            <Chart datos={charts[0]} label={label1} title={"PowerT"} />
            <Chart datos={charts[0]} label={label1} title={"Power"}/>
            <Chart datos={charts[0]} label={label1} title={"SOC"}/>
        </div>
    );
}

export { AllCharts };