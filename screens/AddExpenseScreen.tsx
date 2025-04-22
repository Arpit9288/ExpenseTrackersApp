import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useExpenseStore} from '../store/useExpenseStore';

const AddExpenseScreen = () => {
  const {addExpense} = useExpenseStore();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0 || !category) {
      Alert.alert('Validation', 'Please enter valid amount and category.');
      return;
    }
    addExpense(amt, category, notes, date.toISOString());
    setAmount('');
    setCategory('');
    setNotes('');
    Alert.alert('Success', 'Expense added!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        style={styles.input}
      />
      <DateTimePicker
        value={date}
        onChange={(_, selected) => setDate(selected || date)}
        mode="date"
        display="default"
      />
      <Button title="Add Expense" onPress={handleSubmit} />
    </View>
  );
};

export default AddExpenseScreen;
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  input: {borderWidth: 1, padding: 10, marginVertical: 8, borderRadius: 8},
});
