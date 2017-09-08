import React, { Component } from 'react'
// import './App.css'
import { Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React!</h2>
					<h4>- this is a react router 4 demo - </h4>
				</div>
				{/* LINKS to our different 'pages' */}
				<nav className="navbar">
					<ul className="nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				{/* ROUTES that will be render to our LINKS */}
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
			</div>
		)
	}
}

export default App