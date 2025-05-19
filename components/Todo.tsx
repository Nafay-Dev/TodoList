import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TodoProps {
  item: {
    id: string;
    text: string;
    completed: boolean;
    dueDate: Date | null;
  };
  toggleComplete: (id: string) => void;
  deleteItem: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ item, toggleComplete, deleteItem }) => {
  const formatDate = (date: Date | null) => {
    if (!date) return null;
    return date.toLocaleDateString();
  };

  const getTimeRemaining = (dueDate: Date | null) => {
    if (!dueDate) return null;
    
    const now = new Date();
    const diffTime = dueDate.getTime() - now.getTime();
    
    if (diffTime <= 0) return "Overdue";
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Due today";
    if (diffDays === 1) return "Due tomorrow";
    return `${diffDays} days left`;
  };

  const timeRemaining = getTimeRemaining(item.dueDate);
  const isOverdue = timeRemaining === "Overdue" && !item.completed;

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
      
      <View style={styles.textContainer}>
        <Text style={[
          styles.todoText,
          item.completed && styles.completedText
        ]}>
          {item.text}
        </Text>
        
        {item.dueDate && (
          <View style={styles.dateContainer}>
            <Text style={[
              styles.dateText,
              isOverdue && styles.overdueText,
              item.completed && styles.completedDateText
            ]}>
              {formatDate(item.dueDate)} • {timeRemaining}
            </Text>
          </View>
        )}
      </View>
      
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
  textContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    color: '#212121',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#9E9E9E',
  },
  dateContainer: {
    marginTop: 4,
  },
  dateText: {
    fontSize: 12,
    color: '#757575',
  },
  overdueText: {
    color: '#FF5252',
    fontWeight: 'bold',
  },
  completedDateText: {
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    padding: 4,
  },
});

export default Todo; 