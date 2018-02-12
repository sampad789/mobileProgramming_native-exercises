import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: '', data: [] };
  }

  addItem = () => {
    const newItem = { items: this.state.items };
    const list = this.state.items ;
    this.setState({ data: [...this.state.data, { key: list }], items: newItem })
  }

  clearList = () =>{
    this.setState({ data :[]})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textbox} onChangeText={(items => this.setState({ items }))} />
        <View style ={styles.ButtonSection}>
        <Button title="ADD" onPress={this.addItem} />
        <Button title ="CLEAR" onPress={this.clearList} />
        </View>
        
        <View style={styles.List}  >
        <Text>Shopping List :</Text>
          <FlatList data={this.state.data} renderItem={({ item }) =>
            <Text> {item.key}</Text>}></FlatList>
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
  textbox: {
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
