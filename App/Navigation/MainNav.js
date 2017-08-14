import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainScreen from '../Containers/MainScreen';
import FetchList from '../Containers/FetchList';

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar>
          <Scene key='fetchlist' component={FetchList} />
          <Scene initial key='home' component={MainScreen} />
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
