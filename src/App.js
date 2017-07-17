import React from 'react';

//overall App
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>My Movie Fansite</h1>
        </header>
        
        {this.props.children}
      </div>
    );
  }
}

export default App;
