import React, {Component} from 'react'; // 1
import SearchBar from './components/searchbar'
import {Text, View, StyleSheet} from 'react-native'; // 2

export default class App extends Component {
  render() {
    return (
      <View>
        <SearchBar></SearchBar>
      </View>
    );
  }
}
