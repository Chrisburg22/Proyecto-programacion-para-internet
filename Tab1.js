import axios from 'axios';
import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {obtenerAcuerdos} from './services';
import {AppContext} from './App';
import {NavigationContext} from '@react-navigation/native';

export default class Tab1 extends Component {
  static contextType = AppContext;
  static contextNaigate = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    // const acuerdos = await obtenerAcuerdos();
    // this.setState({data: acuerdos})
    fetch('http://10.0.2.2:4000/vota-app/acuerdos')
      .then(response => response.json())
      .then(json => {
        this.setState({data: json, isLoading: false});
      })
      .catch(error => console.error(error));
  }

  render() {
    const {data, isLoading} = this.state;
    const navigation = this.context.contextNaigate;

    console.log(data);
    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    const manegarEleeccionAcuerdo = id => {
      this.context.setAcuerdoId(id);
      // navigation.navigate('Perfil');
      console.log(id);
    };
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              key={item.Id}
              style={{
                backgroundColor: '#489fb5',
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={() => manegarEleeccionAcuerdo(item.Id)}>
                {/* <Text style={{fontWeight: 'bold', color: 'white'}}>
                  {item.Id}
                </Text> */}
                <Text style={{color: 'white'}}>{item.Nombre}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
