import React from 'react';
import { FlatList, Text } from 'react-native';

type Usuario = {
  id: string;
  nombre: string;
};

type Props = {
  usuarios: Usuario[];
};

export const ListaUsuarios: React.FC<Props> = ({ usuarios }) => {
  return (
    <FlatList
      data={usuarios}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.nombre}</Text>}
    />
  );
};
