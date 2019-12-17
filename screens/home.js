import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, FlatList} from 'react-native';
import api from '../services/api';
import Card from '../components/card';

export default class HomeScreen extends Component {
    state = {
        searchText: '',
        searchResults: null,
    }
    submitSearch = async () => { 
      if (this.state.searchText != '') { 
        try { 
          const response = await api.get('/search/shows', { 
            params: { q: this.state.searchText } 
          });
          this.setState({ searchResults: response.data });
        } catch(error) { 
          alert(JSON.stringify(error));
        }
      }
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
            <FlatList
              data={this.state.searchResults}
              renderItem={({ item }) => <Card info = {item.show} navigation={ this.props.navigation }/>}
              keyExtractor={item => item.show.id}
            />
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
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
    },
    input: {
      height: 40,
      width: 250,
      borderColor: 'black',
      borderRadius: 20,
      borderWidth: 1,
      padding: 10,
      fontSize: 20,
    },
    results: {
      flex: 4,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      marginTop: 20,
    },
});