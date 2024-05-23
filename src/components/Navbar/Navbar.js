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
					<li><a href="/">Accueil</a></li>
					<li><a href="/charts">Mes statistiques</a></li>
					<li><a href="/diagram">Mon installation</a></li>

				</ul>
			</div>
		</div>

	);
}

export { Navbar };
