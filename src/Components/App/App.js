import React, { Component } from 'react'
import { Route, Switch  } from 'react-router-dom'
import Homepage from '../../Routes/Homepage/HomePage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route
              exact
              path={'/'}
              component={Homepage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;