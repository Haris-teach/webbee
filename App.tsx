import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {MenuProvider} from 'react-native-popup-menu';
import MainStack from './src/naviagtions/stack';

interface Props {}

const App: React.FC<Props> = props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <MenuProvider>
          <MainStack />
        </MenuProvider>
      </PaperProvider>
    </PersistGate>
  </Provider>
);

App.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
