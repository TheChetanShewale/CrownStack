//navigation configuration for the screens
import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import Splash from '../containers/splash';
import Home from '../containers/home';
import Details from '../containers/details';

//splashNavigator to hold the splash screen
const splashNavigator = createStackNavigator({
  splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
});

//appNavigator to hold all the screens of app except splash screen
const appNavigator = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      title: 'Songs',
    },
  },
  details: {
    screen: Details,
    navigationOptions: {
      title: 'Song Details',
    },
  },
});

//rootNavigator to hold all the other child navigations
const rootNavigator = createAnimatedSwitchNavigator(
  {
    splashNav: splashNavigator,
    appNav: appNavigator,
  },
  {
    initialRouteName: 'splashNav',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={400}
          interpolation="easeOut"
        />
        <Transition.In type="slide-right" durationMs={400} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(rootNavigator);
