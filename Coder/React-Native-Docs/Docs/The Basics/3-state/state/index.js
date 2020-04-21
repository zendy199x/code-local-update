/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BlinkApp from './components/BlinkApp'

AppRegistry.registerComponent(appName, () => BlinkApp);
