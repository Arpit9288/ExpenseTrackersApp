// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExpenseProvider } from "./src/store/useExpenseStore";
import AddExpenseScreen from "./src/screens/AddExpenseScreen";
import ExpenseHistoryScreen from "./src/screens/ExpenseHistoryScreen";
import SummaryScreen from "./src/screens/SummaryScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ExpenseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Add" component={AddExpenseScreen} />
          <Tab.Screen name="History" component={ExpenseHistoryScreen} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
};

export default App;
