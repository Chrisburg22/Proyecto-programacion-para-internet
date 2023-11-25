import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json, isLoading: false });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: '#489fb5', borderRadius: 10, padding: 10, marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.id}</Text>
              <Text style={{ color: 'white' }}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}