/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FixedDimensionsBasics from './components/FixedDimensionsBasics'
import FlexDimensionsBasics from './components/FlexDimensionsBasics'

// AppRegistry.registerComponent(appName, () => FixedDimensionsBasics);
AppRegistry.registerComponent(appName, () => FlexDimensionsBasics);
