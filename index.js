/** @format */

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.Login', // this is a registered name for a screen
      icon: require('./img/wa.png'),
      title: 'Screen One'
    },
  ]
});