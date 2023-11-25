import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import INICIO from './Inicio';
import INSCRIPCION from './Inscripcion';
import MENU from './Menu';
import Login from './Login';

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="inicio">
          <Stack.Screen
            name="inicio"
            component={INICIO}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="menu"
            component={MENU}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="menu"
            component={}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
