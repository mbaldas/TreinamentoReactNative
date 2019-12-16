import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

export default class SearchBar extends Component {
    state = {
        searchText: ""
    }
    submitSearch() { 
        alert('Buscar: ' + this.state.searchText);
    }
    render() {
      return (
        <View style={styles.screen}>
          <View style={styles.search}>
            <TextInput 
                placeholder={'Procure uma série'}
                style={styles.input}
                onChangeText={(text) => this.setState({ searchText: text })}
                onSubmitEditing={() => this.submitSearch()} 
            />
          </View>
          <View style={styles.results}>
            <Text>{this.state.searchText}</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      flexDirection: 'column',
    },
    search: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      marginTop: 55,
      height: 40,
      width: 250,
      borderColor: 'lightgray',
      borderWidth: 1,
      padding: 10,
      fontSize: 20,
    },
    results: {
      flex: 4,
      backgroundColor: 'lightgray',
      alignItems: 'center',
    },
  });