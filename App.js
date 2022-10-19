import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator'

const App = () => {
  return(
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  )
}
export default App