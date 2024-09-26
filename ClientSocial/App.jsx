/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
import HomeScreen from './screens/HomeScreen';

import {Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//How React Native Navigation Works:

/*

Old Mehtod:
createNativeStackNavigator();
Home: HomeScreen
Profilr: ProfilesScreen

In this styles cannot be performed properly

Correct Method:

1. Create a variable named Stack and pass createNativeStackNavigator() to it.

const Stack = createNativeStackNavigator();

2. NavigationContainer is the Parent package so it will be used as a Container.
So, pass this in the return statement

return(

//NavigationContainer is the parent component so it will wrap all the navigation happening in the app
//Pass Stack.Navigator to it
//Stack.Navigator will act as the wrapper for our Screens, and NavigationContainer will act as the wrapper for the entire Navigation in the app, means we can have multiple StackNavigators inside 
//Now register a Screen using Stack.Screen and pass name and component variables/properties to it

<NavigationContainer>
<Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
<NavigationContainer/>
)













*/
