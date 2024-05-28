/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {CounterProvider} from './contexApi';

const RootComponent = () => {
  return (
    <CounterProvider>
      <App />
    </CounterProvider>
  );
};

AppRegistry.registerComponent(appName, () => RootComponent);
