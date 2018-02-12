import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default class App extends React.Component {











  buttonPressed = () =>{
Alert.alert("You've pressed a button ,way to go boi.");
  }
  render() {
    return (
      <View style={{flex: 1}}>
            <View style={{flex: 2, backgroundColor: '#193441'}}>
            </View>
            <View style={{flex: 3,flexDirection:'row', backgroundColor: '#3E606F'}}>
            <Button title="1" onPress={this.buttonPressed} />
            <Button title="2" onPress={this.buttonPressed} />
            <Button title="3" onPress={this.buttonPressed} />
            </View>
            <View style={{flex: 3,flexDirection:'row', backgroundColor: '#3E606F'}}>
            <Button title="1" onPress={this.buttonPressed} />
            <Button title="2" onPress={this.buttonPressed} />
            <Button title="3" onPress={this.buttonPressed} />
            </View>
            <View style={{flex: 3,flexDirection:'row', backgroundColor: '#3E606F'}}>
            <Button title="1" onPress={this.buttonPressed} />
            <Button title="2" onPress={this.buttonPressed} />
            <Button title="3" onPress={this.buttonPressed} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
