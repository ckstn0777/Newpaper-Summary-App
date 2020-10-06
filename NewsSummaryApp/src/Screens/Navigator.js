import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Home';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="N-Summary Home"
        component={Home}
        options={{
          title: 'N-Summary',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#141414',
            // borderBottomWidth: 1,
            // borderBottomColor: '#FFF',
          },
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
