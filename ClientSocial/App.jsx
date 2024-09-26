/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
import HomeScreen from './screens/HomeScreen';

import {Text} from 'react-native';
import React from 'react';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
    
   
  );
};

export default App;