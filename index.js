import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import AppNavigator from './src/navigation';

function App() {
  return <AppNavigator />;
}

AppRegistry.registerComponent(appName, () => App);
