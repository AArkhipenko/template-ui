import React from "react";
import logo from '../logo.svg';
import './default-page.css';

export const DefaultPage: React.FC = () => {
    return (
		<div className="default-page">
			<header className="default-page-header">
				<img src={logo} className="default-page-logo" alt="logo" />
				<p>
					Edit <code>src/default-page.tsx</code> and save to reload.
				</p>
				<a
					className="default-page-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}