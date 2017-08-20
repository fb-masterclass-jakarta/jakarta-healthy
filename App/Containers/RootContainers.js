import React, { Component } from 'react';
import NavigationRouter from '../Navigation/MainNav';
import { View } from 'react-native';


class RootContainers extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <NavigationRouter />
      </View>
    );
  }
}

export default RootContainers;
