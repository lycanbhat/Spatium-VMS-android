import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Route from './src/navigation';

AppRegistry.registerComponent(appName, () => Route);
