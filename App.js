
import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import ForgotScreen from './Screens/ForgotScreen/ForgotScreen';
import VerificationScreen from './Screens/VerificationScreen/VerificationScreen';
import MainScreen from './Screens/MainScreen/MainScreen';
import MainScreen1 from './Screens/MainScreen1/MainScreen1';

function App(){
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}  options={{headerShown: false}} />
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Forgot' component={ForgotScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Verification' component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={MainScreen} options={{headerShown:false}} />
        <Stack.Screen name='Main1' component={MainScreen1} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}







export default App;
