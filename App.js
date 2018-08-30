import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image} from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		<Judul/>
        <Text style={styles.tulis}>Nama : Intan Alrisa</Text>
		    <Text style={styles.tulis}>No : 17</Text>
		    <Text style={styles.tulis}>Kelas : XI RPL 4</Text>
		    <Image source={require('./REACNATIVE.png')} style={{width: 340, height: 433}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  judul: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  tulis: {
	fontSize: 24,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
