import React, { Component } from 'react';
import './App.css';
import FoodMapContainer from './components/maps/FoodMapContainer';
import Main from './components/main/Main';
import HeaderBar from './components/headerBar/HeaderBar';

const meSeeks = 'https://cdn.dribbble.com/users/4971/screenshots/2846308/mr-meeseeks_1x.png'

//ToDo:
//App Bar links


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <div>
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
