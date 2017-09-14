import React, { Component } from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.js'

class App extends Component {
	  constructor(){
    super();

    // Here we set a generic state associated with the number of clicks
    this.state = {
			countDownDate: new Date("Oct 1, 2017 15:37:25").getTime(),
			now: new Date().getTime(),
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
    };
  }

	componentDidMount() {
		this.interval = setInterval(this.tick.bind(this), 1000);
  }

	componentWillUnmount() {
    clearInterval(this.interval);
  }

	tick() {
		let countDownDate = new Date("Oct 1, 2017 15:37:25").getTime();
		let now = new Date().getTime();
		let distance = countDownDate - now;
		this.setState({ 
			days: Math.floor(distance / (1000 * 60 * 60 * 24)),
			hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
			seconds: Math.floor((distance % (1000 * 60)) / 1000)
		})
	}

	render() {
		let pic = require('./brooklyn.jpg');
		return (
			<div className="bgimg">
				<div className="topleft">
					<img className="logo" src={require('./logo.png')} />
				</div>
				<img className="bg-img" src={require('./brooklyn.jpg')} />
				<div className="middle">
					<h1>COMING SOON</h1>
					<hr />
					<p><span className="timer">{this.state.days}d</span> <span className="timer">{this.state.hours}h</span> <span className="timer">{this.state.minutes}m</span> <span className="timer">{this.state.seconds}s</span></p>
				</div>
				<div className="bottomleft">
					<p>Upswing Home Solutions, LLC &copy;</p>
				</div>
			</div>
		)
	}
}

export default App