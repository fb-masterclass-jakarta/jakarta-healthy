import '../Config/ReactotronConfig';
import React, { Component } from 'react';
import RootContainers from './RootContainers';
import { Provider } from 'react-redux';
import store from './Store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainers />
      </Provider>
    );
  }
}


export default App;