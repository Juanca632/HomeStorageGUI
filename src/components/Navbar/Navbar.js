import React from 'react';
import "./Navbar.css";


const Navbar = ({ children }) => {
	return (
		<div className='navbar'>
			<input type="checkbox" id="active"/>
			<label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
			<div className="wrapper">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/charts">Diagrams</a></li>
					<li><a href="/charge-discharge-hours">Alarms</a></li>
					<li><a href="/fydsh">Configuration</a></li>

				</ul>
			</div>
		</div>

	);
}

export { Navbar };
