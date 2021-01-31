import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ name, onChangeName, onSubmit }) => {
  return (
    <View style={styles.container}>
        <FontAwesome name="search" size={30} color="black" style={styles.icon} />
        <TextInput 
            placeholder = "Search Restaurant"
            value = {name}
            autoCapitalize = "none"
            autoCorrect = {false}
            onChangeText = {onChangeName}
            onEndEditing = {onSubmit}
            style = {styles.input}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    height: 50,
    flexDirection: 'row',
  },
  input: {
      marginLeft: 5,
      height: 50,
      width: 330,
  },
  icon:{
    margin: 10
  }
});

export default SearchBar;