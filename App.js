
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import OtpScreen from './src/screens/OtpScreen';
import SwitchScreen from './src/screens/SwitchScreen';
import PageMain from './src/screens/PageMain';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          component={SwitchScreen}
          name="SwitchScreen"          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={PageMain}
          name="PageMain"          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={SignUp}
          name="SignUp"          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={SignIn}
          name="SignIn"          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={OtpScreen}
          name="OtpScreen"          
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})