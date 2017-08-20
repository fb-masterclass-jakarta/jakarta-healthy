import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainScreen from '../Containers/MainScreen';
import FetchList from '../Containers/FetchList';

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#02C39A' }} headerTintColor='#FFF' titleStyle={{ color: '#FFF' }}>
          <Scene key='fetchlist' component={FetchList} title='Loading...' />
          <Scene initial key='home' component={MainScreen} hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
