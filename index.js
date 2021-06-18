import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import store from './src/configureStore';

import AppNavigator from './src/navigation';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
