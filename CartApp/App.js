import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'mobx-react';
import RootStore from './src/stores/RootStore';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/routes/Route';

const App = () => {
  return (
    <Provider {...RootStore}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
