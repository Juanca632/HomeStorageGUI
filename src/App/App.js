import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { ChargeDischargeHours } from '../pages/ChargeDischargeHours/ChargeDischargeHours'; 
import { Charts } from '../pages/Charts/Charts';
import { Overview } from '../pages/Overview/Overview';
import { Layout } from '../containers/Layout/Layout'

const App = () => {

	return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Overview/>} /> 
            <Route exact path="/charts" element={<Charts/>} /> 
            <Route exact path="/diagram" element={<Home/>} /> 
            <Route exact path="/charge-discharge-hours" element={<ChargeDischargeHours/>} /> 
            <Route exact path="*" element={<NotFound/>} /> 
          </Routes>
        </Layout>
      </BrowserRouter>
	);
}

export { App };