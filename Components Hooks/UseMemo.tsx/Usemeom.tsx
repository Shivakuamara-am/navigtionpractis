import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('Running expensive calculation...');
    for (let i = 0; i <= 1000000000; i++) {} // Simulating expensive computation
    return num;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <View>
      <Text>Memoized value: {memoizedValue}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
