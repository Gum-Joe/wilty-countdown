import React, { Component } from 'react';
import './App.css';

import Countdown from 'react-countdown-now';

import Logo from './Logo.svg';

class Completionist extends Component {
	render() {
		return (
			<div>It's about to begin!</div>
		);
	}
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	return <span className="clock">{days === 0 ? "00" : days < 10 ? "0" + days : days}:{hours === 0 ? "00" : hours < 10 ? "0" + hours : hours}:{minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:{seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}</span>;
	/* if (completed) {
		// Render a completed state
		return <Completionist />;
	} else {
		// Render a countdown
	} */
};

export default class App extends Component {
	render() {
		return (
			<div>
				<img src={Logo} />
				<span className="title">will be starting in</span>
				<Countdown
					date={Date.now() + 200000}
					renderer={renderer}
					zeroPadTime={2}
					className="clock"
				/>
			</div>
		)
	}
}