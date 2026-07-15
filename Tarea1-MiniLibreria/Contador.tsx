import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

export const Contador: React.FC = () => {
  const [valor, setValor] = useState<number>(0);

  return (
    <View>
      <Text>Valor: {valor}</Text>
      <Button title="+" onPress={() => setValor(valor + 1)} />
      <Button title="-" onPress={() => setValor(valor - 1)} />
    </View>
  );
};
