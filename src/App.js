import React from 'react';

import { Link } from 'react-router-dom';


//overall App
class App extends React.Component {
  constructor(props) {
    super(props); // call super

    this.state = {}; // set initial state
    this.handleChange = this.handleChange.bind(this); // bind method to 'this' context
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    var fields = {};
    fields[event.target.name] = event.target.value;
    this.setState(fields);
  }

  handleSearch() {
    window.location.replace('#/search/' + this.state.query);
  }

  render() {

    return (
      <div>
        <header>
          <h1><Link to="/">My Movie Site</Link></h1>

          <section>
            <input type="text" name="query" onChange={this.handleChange} onKeyPress={(e) => { if (e.key == 'Enter') this.handleSearch() }} />
            <button onClick={this.handleSearch}>Search</button>
          </section>
        </header>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
