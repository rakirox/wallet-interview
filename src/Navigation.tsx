import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './page/Home';
import {MovementPage} from './page/MovementPage';

const Stack = createNativeStackNavigator();

export function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovementPage" component={MovementPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
