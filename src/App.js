import React from 'react';
import AppRoute from './appRoute'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <AppRoute />
        </div>
      </Router>
    );
  }
}

export default App;
