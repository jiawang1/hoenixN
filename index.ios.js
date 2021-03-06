import {Provider} from 'react-redux';
import store from './src/common/configStore';
import App from './src/containers/App';
import React from 'react';
import {AppRegistry} from 'react-native';

const Hoenix = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});

AppRegistry.registerComponent('Hoenix', () => Hoenix);
