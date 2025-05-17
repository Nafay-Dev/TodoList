import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  FlatList, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import { generateUUID } from '../utils/helpers';
import Todo from './Todo';
import AddTodo from './AddTodo';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // Add a new todo
  const addTodo = (text: string) => {
    setTodos(prevTodos => [
      {
        id: generateUUID(),
        text,
        completed: false
      },
      ...prevTodos
    ]);
  };

  // Toggle todo completion status
  const toggleComplete = (id: string) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  };

  // Delete a todo
  const deleteItem = (id: string) => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  // Render empty state
  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        No tasks yet! Add a task to get started.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      <View style={styles.header}>
        <Text style={styles.title}>To-Do List</Text>
      </View>
      
      <View style={styles.content}>
        <AddTodo addTodo={addTodo} />
        
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo 
              item={item} 
              toggleComplete={toggleComplete} 
              deleteItem={deleteItem} 
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyList}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#2196F3',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#9E9E9E',
    textAlign: 'center',
  },
});

export default TodoList; 