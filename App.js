import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import OtraPagina from './screens/OtraPagina';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="reservas" component={OtraPagina} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
