import { Navigation } from 'react-native-navigation';

import Login from './Login';
import Biodata from './Biodata';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Login', () => Login);
  Navigation.registerComponent('example.Biodata', () => Biodata);
}