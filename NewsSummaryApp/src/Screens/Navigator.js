import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Home';
import Category from './Category';
import Details from './Details';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
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
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'N-Summary Details',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#141414',
          },
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
