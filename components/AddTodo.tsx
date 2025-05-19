import React, { useState } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  View, 
  TouchableOpacity,
  Alert,
  Text,
  Modal
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface AddTodoProps {
  addTodo: (text: string, dueDate: Date | null) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [showDateModal, setShowDateModal] = useState(false);

  const handleAddClick = () => {
    if (text.trim().length === 0) {
      Alert.alert('Error', 'Please enter a task');
      return;
    }
    // Show date modal if text is valid
    setShowDateModal(true);
  };

  const handleSubmit = (selectedDueDate: Date | null) => {
    addTodo(text, selectedDueDate);
    setText(''); // Clear the input
    setDueDate(null); // Reset due date
    setShowDateModal(false);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "No due date";
    return date.toLocaleDateString();
  };

  // Simple date picker with predefined options
  const dateOptions = [
    { label: "Today", value: 0 },
    { label: "Tomorrow", value: 1 },
    { label: "Next Week", value: 7 },
    { label: "Next Month", value: 30 },
    { label: "No Due Date", value: -1 }
  ];

  const createDueDate = (days: number): Date | null => {
    if (days === -1) {
      return null;
    } else {
      const date = new Date();
      date.setDate(date.getDate() + days);
      return date;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={text}
          onChangeText={setText}
          returnKeyType="done"
          onSubmitEditing={handleAddClick}
        />

        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleAddClick}
        >
          <MaterialIcons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={showDateModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowDateModal(false)}
      >
        <TouchableOpacity 
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setShowDateModal(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>When is this task due?</Text>
            
            {dateOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.dateOption}
                onPress={() => handleSubmit(createDueDate(option.value))}
              >
                <Text style={styles.dateOptionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    marginRight: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  dateOption: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dateOptionText: {
    fontSize: 16,
    color: '#2196F3',
  },
  addButton: {
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default AddTodo; 