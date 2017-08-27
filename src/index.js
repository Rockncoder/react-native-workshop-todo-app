import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AppContainer from './app';
import reducer from './reducer';

const store = createStore(reducer);

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('todo', () => Index);