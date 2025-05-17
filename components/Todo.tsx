import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TodoProps {
  item: {
    id: string;
    text: string;
    completed: boolean;
  };
  toggleComplete: (id: string) => void;
  deleteItem: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ item, toggleComplete, deleteItem }) => {
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity 
        style={styles.checkContainer} 
        onPress={() => toggleComplete(item.id)}
      >
        <MaterialIcons 
          name={item.completed ? "check-box" : "check-box-outline-blank"} 
          size={24} 
          color={item.completed ? "#4CAF50" : "#757575"} 
        />
      </TouchableOpacity>
      
      <Text style={[
        styles.todoText,
        item.completed && styles.completedText
      ]}>
        {item.text}
      </Text>
      
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => deleteItem(item.id)}
      >
        <MaterialIcons name="delete" size={24} color="#FF5252" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkContainer: {
    marginRight: 12,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#9E9E9E',
  },
  deleteButton: {
    padding: 4,
  },
});

export default Todo; 