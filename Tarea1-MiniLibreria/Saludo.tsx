import React from 'react';
import { Text } from 'react-native';

type Props = {
  nombre: string;
  edad: number;
};

export const Saludo: React.FC<Props> = ({ nombre, edad }) => {
  return (
    <Text>Hola {nombre}, tienes {edad} años.</Text>
  );
};
