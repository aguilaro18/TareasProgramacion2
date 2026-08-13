import React, { useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Alert, Platform} from 'react-native';
export default function App() { 
  const [tareas, setTareas] = useState<string[]>([]);
  const [mostrarInput, setMostrarInput] = useState<boolean>(false); 
  const [textoNuevaTarea, setNuevaTarea] = useState<string>('');
}

// Guardar y cocultar el imput 
const guardarTarea = () => {
  if (textoNuevaTarea.trim() === '') return;
  setTareas([...tareas, textoNuevaTarea]);
  setTextoNuevaTarea('');
  setMostrarInput(false);
}; 

//Confimar y eliminar tarea compatible en wed o telefono
const confirmarEliminar = (index: number) =>{
  const mensaje = "Estas seguro que deseas eliminar la tarea?";

if (Platform.OS === 'web'){ 
  const acepto = window.confirm(mensaje); 
  if (acepto){
    const nuevasTareas = tareas.filter ((_, i) => i  !== index);
    setTareas(nuevasTareas);
  }
}else{
  Alert.alert(
    "Eliminar tarea", 
  mensaje,
  [
    {text: "Cancelar", style: "cancel"},
    {
      text: "Si",
      onPress: () => {
        const nuevasTareas = tareas.filter ((_, i) => i  !== index);
        setTareas(nuevasTareas);
    
      }
    }

  ]

  );
}
};