import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useExpenseStore} from '../store/useExpenseStore';

const ExpenseHistoryScreen = () => {
  const {expenses} = useExpenseStore();

  return (
    <FlatList
      data={expenses}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text>
            ₹{item.amount} - {item.category}
          </Text>
          <Text>{item.notes}</Text>
          <Text>{new Date(item.date).toDateString()}</Text>
        </View>
      )}
    />
  );
};

export default ExpenseHistoryScreen;

const styles = StyleSheet.create({
  item: {borderBottomWidth: 1, padding: 10},
});
