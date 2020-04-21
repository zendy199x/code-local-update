/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Bananas from './components/Bananas';
import LostOfGreeting from './components/LotsOfGreeting'

// AppRegistry.registerComponent(appName, () => Bananas);
AppRegistry.registerComponent(appName, () => LostOfGreeting);