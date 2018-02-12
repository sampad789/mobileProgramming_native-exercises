import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state = {number: '', guess: '', text: '', counter: 0}
  }

  componentDidMount()
  {
    const current = Math.floor(Math.random() * 100) + 1;
    this.setState({
      number: current
    })
  }
  
  guess = () =>
  {
    const currentGuess = this.state.guess;
    const theNumber = this.state.number;
    if (theNumber > currentGuess)
    {
      this.setState({
        text: "Guess too low!",
        counter: this.state.counter + 1
      })
    }
    else if (theNumber < currentGuess)
    {
      this.setState({
        text: "Guess too high!",
        counter: this.state.counter + 1
      })
    }
    else
    {
      const totalTries = parseInt(this.state.counter) + 1;
      this.setState({
        text: "Guess correct!"
      })
      Alert.alert("It took you " + totalTries + " tries!");
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text>Guess a number between 1-100!</Text>
        <Text id="text">{this.state.text}</Text>
        <TextInput style={{width: 200, borderColor: 'grey', borderWidth: 1}} onChangeText={(guess) => this.setState({guess})} keyboardType='numeric' value={this.state.guess}/>
        <Button onPress={this.guess} title="Guess   "/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});