import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar.js';
import "./Layout.css";


const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Navbar />
			{children}
		</div>
	);
}

export { Layout };
