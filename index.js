/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import { AppRegistry } from 'react-native';
import root from './src/index';
// import App from './containers/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => root);
