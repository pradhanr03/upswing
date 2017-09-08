// Include React
import React from 'react';
// Requiring our helper for making API calls
import helpers from '../utils/helpers';

// This is the Form, our main component. It includes the banner and form element
class Form extends React.Component {
  constructor(){
    super();

    // Here we set a generic state associated with the text being searched for
    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  // This function will respond to the user input
  handleChange = (event) => {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleClick = () => {
    helpers.saveUsers({ first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email })
    .then(function() {
      console.log("Posted to MongoDB");
    });
  }

  // Here we descibe this component's render method
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Form Capture</h2>
            <p>
              <em>Type numbers and text in the appropriate boxes.</em>
            </p>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Form</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">

                    <h4>
                      <strong>First Name</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.first_name}
                      className="form-control"
                      id="first_name"
                      onChange={this.handleChange}
                      required
                    />
                                        <h4>
                      <strong>Last Name</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.last_name}
                      className="form-control"
                      onChange={this.handleChange}
                      id="last_name"
                      required
                    />
                                        <h4>
                      <strong>Email</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="form-control"
                      id="email"
                      required
                    />
                    <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    onClick={this.handleClick.bind(this)}
                  >
                    SUBMIT
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Form;
