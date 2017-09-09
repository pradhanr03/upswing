// Include React
import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom'

// Here we include all of the sub-components
import Child from './Child';
import Form from './Form';

// Requiring our helper for making API calls
import helpers from '../utils/helpers';

// Create the Parent Component
class Home extends Component {
  constructor(){
    super();

    // Here we set a generic state associated with the number of clicks
    this.state = {
      clicks: 0,
      clickID: "Main"
    };
  }

  //  On load display the number of clicks
  componentDidMount() {
    console.log("COMPONENT MOUNTED");
  }

  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate(prevState) {
    console.log("COMPONENT UPDATED");
  }
  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick = () => {
		helpers.getUsers()
      .then(function(response) {
        // Using a ternary operator we can set newClicks to the number of clicks in our response object
        // If we don't have any clicks in our database, set newClicks to 0
				console.log(response);
      }.bind(this));
  }

  // Whenever the button is clicked we'll use setState to reset the clickCounter
  // This will reset the clicks -- and it will be passed ALL children
  resetClick= () => {
    this.setState({ clicks: 0 });
  }

  // Here we render the function
  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <p>
              {/*
                Here we create a button click.
                Note how we have an onClick event associate with our handleClick function.
              */}
              <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={this.handleClick}
              >
                CLICK ME!!!!
              </button>
            </p>
          </div>
          {/* This represents the "Parent" */}
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
              </div>
              <div className="panel-body text-center">
								<Form />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Home;
