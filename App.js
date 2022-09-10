import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home/Home';
import Details from './src/Home/Details';



const Stack = createNativeStackNavigator();
import * as firebase from 'firebase'
import firebaseConfig from './src/firebaseConfig';
import SignIn from './src/SignIn';

export default function App() {

  if(!firebase.apps.length){
    console.log("Firesbase is connected");
    firebase.initializedApp(firebaseConfig)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{title:"Home"}} />
        <Stack.Screen name="Detail" component={Details} options={{title:"offices"}} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
