import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert,FlatList } from 'react-native';


export default class App extends React.Component {

    



  constructor(props) {
    super(props);
  
    this.state = {num1: 0, num2: 0, total: 0,data : []};
  }

  buttonAdd = () => {

    const total = parseInt(this.state.num1)  + parseInt(this.state.num2)
    const list = this.state.num1 + '+' + this.state.num2 + '='+ total ;
   

    this.setState(() => {
      return { total : total}
 });
  this.setState({data: [...this.state.data, {key: list}], total:total});    
  }

  buttonSubtract = () => {
    const total = parseInt(this.state.num1)  - parseInt(this.state.num2)
    const list = this.state.num1 + '-' + this.state.num2 + '='+ total ;
   

    this.setState(() => {
      return { total : total}
    });
    this.setState({data: [...this.state.data, {key: list}], total:total});
  }
  buttonMultiply= () => {
    const total = parseInt(this.state.num1)  * parseInt(this.state.num2)

    const list = this.state.num1 + '*' + this.state.num2 + '='+ total ;
   

    this.setState(() => {
      return { total : total}
 });
 this.setState({data: [...this.state.data, {key: list}], total:total});
  }
    buttonDivision = () => {
      const total = parseInt(this.state.num1)  / parseInt(this.state.num2)

      const list = this.state.num1 + '/' + this.state.num2 + '='+ total ;
   

    this.setState(() => {
      return { total : total}  
      });
      this.setState({data: [...this.state.data, {key: list}], total:total});
    } 
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Result :{this.state.total} </Text>
        <Text>num1 : {this.state.num1} </Text>
        <Text>num2 : {this.state.num2} </Text>
        <TextInput style={styles.textbox}  keyboardType='numeric' onChangeText={ (num1) => this.setState( {num1}) } />
        <TextInput style={styles.textbox}  keyboardType='numeric'  onChangeText={ (num2) => this.setState( {num2}) } />
        
        <View style={styles.ButtonSection}>
        <Button title="+" onPress={this.buttonAdd} />
        <Button title="-" onPress={this.buttonSubtract}/>
        <Button title="x" onPress={this.buttonMultiply} />
        <Button title="÷" onPress={this.buttonDivision} />
       
        
        </View>
        <View style ={styles.List}  >
        <FlatList data = {this.state.data} renderItem={({item}) => 
        <Text>History: {item.key}</Text>}></FlatList>
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

  textbox : {
    width: 250,
    borderWidth: 0.5
  },
  ButtonSection: {
    width: '70%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection :'row', 
 },
 List :{
  height : '30%'
 }
});