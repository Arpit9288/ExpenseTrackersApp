import React from 'react';
import {View, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {useExpenseStore} from '../store/useExpenseStore';

const SummaryScreen = () => {
  const {expenses} = useExpenseStore();

  const totals = expenses.reduce((acc: any, curr: any) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const chartData = Object.keys(totals).map((key, index) => ({
    name: key,
    population: totals[key],
    color: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'][index % 4],
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  }));

  return (
    <View>
      <PieChart
        data={chartData}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: () => '#000',
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="8"
        absolute
      />
    </View>
  );
};

export default SummaryScreen;
