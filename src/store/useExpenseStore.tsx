import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const EXPENSES_KEY = "expenses";

export const useExpenseStore = () => {
  const [expenses, setExpenses] = useState<any>([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const stored = await AsyncStorage.getItem(EXPENSES_KEY);
      if (stored) {
        setExpenses(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load expenses", error);
    }
  };

  const addExpense = async (amount:Number, category:string, notes:any, date:any) => {
    const newExpense = {
      id: Date.now(),
      amount,
      category,
      notes,
      date,
    };
    const updated = [newExpense, ...expenses];
    try {
      await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(updated));
      setExpenses(updated);
    } catch (error) {
      console.error("Failed to save expense", error);
    }
  };

  return {
    expenses,
    addExpense,
    refresh: loadExpenses,
  };
};
