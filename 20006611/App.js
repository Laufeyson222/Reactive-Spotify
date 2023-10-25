import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './view/Screen1';
import Screen2 from './view/Screen2';

const Stack= createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>

    <Stack.Navigator>
      
      <Stack.Screen name='Screen2' options={{headerShown:false}} component={Screen2}></Stack.Screen>
      <Stack.Screen name='Screen1'  options={{headerShown:false}} component={Screen1}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}




