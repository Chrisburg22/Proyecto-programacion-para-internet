import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {autentificarUsuario, CreateUser} from './services/index';
import axios from 'react-native-axios';
import {EventSubscriptionVendor} from 'react-native/Libraries/vendor/emitter/EventEmitter';

export default class Login extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      modalVentana_Correo: false,
      modalVentana_Facebook: false,
      nombre: '',
      correo: '',
      contraseña: '',
    };
  }

  render() {
    const navigation = this.context;

    const correo = () => {
      this.setState({modalVentana_Correo: true});
    };

    const modalCierra = async () => {
      try {
        const usuario = {
          correo: this.state.correo,
          contraseña: this.state.contraseña,
        };
        const usuarioDB = await autentificarUsuario(usuario);
        if (!usuarioDB) {
          alert('Correo o contraseña incorrecta');
        } else {
          alert(`Bienvenido`);
          navigation.navigate('menu');
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    return (
      <View style={{backgroundColor: '#489fb5', height: '100%'}}>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            color: 'black',
            marginTop: 20,
          }}>
          {' '}
          Iniciar sesión{' '}
        </Text>

        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: 300,
            height: 50,
            backgroundColor: 'blue',
            borderRadius: 40,
            marginLeft: 40,
            marginTop: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={correo}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              textAlign: 'center',
            }}>
            Inicia sesión
          </Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={this.state.modalVentana_Correo}
          animationType="slide">
          <View
            style={{
              borderWidth: 2,
              width: 300,
              height: 420,
              marginTop: 250,
              marginLeft: 45,
              borderRadius: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 20, marginLeft: 5, color: 'black'}}>
              Correo:{' '}
            </Text>
            <TextInput
              onChangeText={correo => this.setState({correo})}
              style={{
                padding: '4px',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 40,
                backgroundColor: 'white',
              }}></TextInput>
            <Text style={{fontSize: 20, marginLeft: 5, color: 'black'}}>
              Password:{' '}
            </Text>
            <TextInput
              onChangeText={contraseña => this.setState({contraseña})}
              style={{
                padding: '4px',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 40,
                backgroundColor: 'white',
              }}></TextInput>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                backgroundColor: 'blue',
                width: 150,
                height: 50,
                marginLeft: 80,
                marginTop: 25,
                borderRadius: 30,
              }}
              onPress={modalCierra}>
              <Text style={{color: 'white', marginLeft: 25, fontSize: 25}}>
                Aceptar
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* <Modal 
        transparent={true}
        visible={this.state.modalVentana_Facebook}
        animationType="slide"
        >
            <View style={{
                borderWidth:2,
                width:300,
                height:240,
                marginTop:350,
                marginLeft:45,
                borderRadius:5,
            }}>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Correo: </Text>
                <TextInput></TextInput>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Contraseña: </Text>
                <TextInput></TextInput>
                <TouchableOpacity style={{
                    borderWidth:2,
                    backgroundColor:"blue",
                    width:150,
                    height:50,
                    marginLeft:80,
                    marginTop:25,
                    borderRadius:30,    
                }} onPress={modalCierra} > 
                    <Text style={{color:"white", marginLeft:25, fontSize:25,}}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Modal> */}
      </View>
    );
  }
}
