import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import Navbar from './src/Navbar';
import Todo from './src/Todo';

export default function App() {
  const [value, setValue] = useState([])
  const newTodo = title => {
    setValue(prev => [{
      id: Date.now().toString(),
      title
    }, ...prev])
  }


  const removeTodo = id => {
    setValue(prev => prev.filter(prev => prev.id !== id))
  }


  return (
    <View >
      <Navbar title='Title App!' ></Navbar>
      <View style={ styles.container } >
        <Text>last name</Text>
        <AddTodo
          onSubmit={ newTodo }
        />
        <FlatList
          data={ value }
          renderItem={ ({ item }) => (<Todo
            onRemove={ removeTodo }
            todo={ item } />) }
          keyExtractor={ item => item.id.toString() }
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
