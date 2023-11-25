import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// importar librerias y elementos usables
import {NavigationContext} from '@react-navigation/native';

export default class Inicio extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      //declaración de variables
      //eslint-disable.-next-line no-undef
      //context: contextType,
    };
  }

  render() {
    // sección de objetos programados
    const navigation = this.context;

    const clickbemail = () => {
      console.log('Diste click al boton de EMAIL!!');
    };

    const clickbfacebook = () => {
      navigation.navigate('login');
      console.log('Diste click al boton de FACEBOOK!!');
    };

    const clickbsignup = () => {
      console.log('Diste click al boton de Crear Cuenta!!');
    };

    const ir_a_insc = () => {
      navigation.navigate('login');
    };

    return (
      // elementos visuales
      <View style={{backgroundColor: '#489fb5'}}>
        <Image
          style={styles.Imagen1}
          source={require('./Imagenes/descarga-removebg-preview.png')}
        />
        <View style={styles.login}>
          <Text style={styles.txthandyman}>
            ¡¡Bienvenido a Vota Cucei App!!
          </Text>

          <TouchableOpacity style={styles.bfacebook} onPress={clickbfacebook}>
            <View style={styles.btnfacebook}>
              <Text style={styles.txtfacebook}> Inicia session</Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.bemail} onPress={ir_a_insc}>
            <View style={styles.btnemail}>
              <Text style={styles.txtbtnemail}>Registrate para votar</Text>
            </View>
          </TouchableOpacity> */}

          {/* <Text style={styles.txtcreacuenta}>¿No tienes cuenta?</Text>
          <TouchableOpacity style={styles.button} onPress={ir_a_insc}>
            <Text style={styles.txtaqui}>¡Da click aquí!</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

// estilos uwu
const styles = StyleSheet.create({
  bemail: {
    //borderWidth:2,
    width: 225,
    height: 55,
  },

  bfacebook: {
    //borderWidth:2,
    width: 225,
    height: 55,
  },

  btnfacebook: {
    width: 220,
    height: 50,
    borderWidth: 2,
    borderColor: '#0A0A0A',
    backgroundColor: '#0096D3',
    borderRadius: 20,
    //marginLeft:50,
    //marginTop:20,
  },

  btnemail: {
    width: 220,
    height: 50,
    borderWidth: 2,
    borderColor: '#0A0A0A',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft:50,
    //marginTop:20,
  },

  txthandyman: {
    fontSize: 22,
    color: '#FFFFFF',
    marginLeft: 2,
    marginTop: 0,
  },

  txtfacebook: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    marginLeft: 0,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },

  txtbtnemail: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    textAlign: 'center',
  },

  txtcreacuenta: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0,
    color: 'white',
  },

  txtaqui: {
    fontSize: 18,
    //fontColor:"#D64FC2",
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0,
    color: '#EEEEEE',
  },

  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 40,
    width: 393,
    height: 260,
    borderWidth: 40,
    borderColor: '#489fb5',
    backgroundColor: '#489fb5',
    borderRadius: 30,
    marginLeft: 0,
  },

  Imagen1: {
    width: 400,
    height: 400,
  },
});
