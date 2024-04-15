import React from 'react';
import "./Navbar.css";
import logo from "../../assets/img/logo.png";


const Navbar = ({ children }) => {
	return (
		<div className='navbar'>
			<input type="checkbox" id="active"/>
			<label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
			<div className="wrapper">
				<div className="div-logo">
					<img src={logo} alt="logo" className="logo"></img>	
				</div>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/charts">Diagrams</a></li>
					<li><a href="/charge-discharge-hours">Alarms</a></li>
					<li><a href="/fydsh">Settings</a></li>

				</ul>
			</div>
		</div>

	);
}

export { Navbar };
