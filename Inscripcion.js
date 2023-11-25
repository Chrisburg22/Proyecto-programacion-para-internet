import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

export default class Inscripcion extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      modalVentana_Correo: false,
      modalVentana_Facebook: false,
      nombre: '',
      correo: '',
      password: '',
    };
  }

  render() {
    const navigation = this.context;

    const correo = () => {
      this.setState({modalVentana_Correo: true});
    };

    // const facebook = () => {
    //     this.setState({modalVentana_Facebook:true})
    // }

    const modalCierra = () => {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          if (xhttp.responseText == '1') {
            alert('Inscripción exitosa');
          } else {
            alert('Error al inscribirse');
          }
          this.setState({
            modalVentana_Correo: false,
            modalVentana_Facebook: false,
          });
        }
    };
      navigation.navigate('menu');
      // xhttp.open("GET", "http://claseprogranataly.000webhostapp.com/datos.php?Nombre=+this.state.nombre+&Correo=+this.state.correo+&Password=+this.state.password", true);
      // xhttp.send();
      console.log('Diste click al boton de EMAIL!!');
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
          Inscripción{' '}
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
            Inscripción por Correo de UDG
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={{
            borderWidth:2,
            width:300,
            height:50,
            backgroundColor:"white",
            borderRadius:40,
            marginLeft:40,
            marginTop:30,
            }} onPress={facebook}>

            <Text style={{
                fontSize:23, 
                color:"black",
                textAlign:"center",
                marginTop:5,
            
            }}>Inscripción por FaceBook</Text>
        </TouchableOpacity> */}

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
              Nombre:{' '}
            </Text>
            <TextInput
              onChangeText={nombre => this.setState({nombre})}
              style={{
                padding: '4px',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 40,
                backgroundColor: 'white',
              }}></TextInput>
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
              onChangeText={password => this.setState({password})}
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
