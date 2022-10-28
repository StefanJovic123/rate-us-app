/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeBaseProvider, Text } from "native-base";
import NavigationContainer from './navigation';
import { theme } from "./theme";
import { AlertProvider } from './components/Alert';
import { WebsocketProvider } from './websocket';
import { EventsProvider } from './eventHandler';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AlertProvider>
        <EventsProvider>
          <WebsocketProvider>
            <NavigationContainer />
          </WebsocketProvider>
        </EventsProvider>
      </AlertProvider>
    </NativeBaseProvider>
  );
};

export default App;
