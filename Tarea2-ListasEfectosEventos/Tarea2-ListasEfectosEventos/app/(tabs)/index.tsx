import React, { useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Alert, Platform} from 'react-native';
export default function App() { 
  const [tareas, setTareas] = useState<string[]>([]);
  const [mostrarInput, setMostrarInput] = useState<boolean>(false); 
  const [textoNuevaTarea, setNuevaTarea] = useState<string>('');
}