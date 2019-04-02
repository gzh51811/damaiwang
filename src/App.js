import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect , Switch} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home.jsx'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Redirect to='/home'></Redirect>}></Route>
            <Route path="/home" component={Home} />
            </Switch>
        </div>
      </Router>
        );
      }
    }
    
    export default App;
