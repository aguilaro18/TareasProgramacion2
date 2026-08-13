import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TextInput, 
  Button, 
  TouchableOpacity, 
  Alert,
  Platform 
} from 'react-native';

export default function App() {
  const [tareas, setTareas] = useState<string[]>([]);
  const [mostrarInput, setMostrarInput] = useState<boolean>(false);
  const [textoNuevaTarea, setTextoNuevaTarea] = useState<string>('');

  // Guardar tarea y ocultar el input
  const guardarTarea = () => {
    if (textoNuevaTarea.trim() === '') return;
    setTareas([...tareas, textoNuevaTarea]);
    setTextoNuevaTarea('');
    setMostrarInput(false);
  };

  // Confirmar y eliminar tarea compatible con Web y Móvil
  const confirmarEliminar = (index: number) => {
    const mensaje = "¿Está seguro que desea eliminar la tarea?";

    if (Platform.OS === 'web') {
      // Si estás corriendo en la Web, usa el confirm del navegador
      const acepto = window.confirm(mensaje);
      if (acepto) {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
      }
    } else {
      // Si estás corriendo en un Celular (Android / iOS), usa el Alert nativo
      Alert.alert(
        "Eliminar tarea",
        mensaje,
        [
          { text: "Cancelar", style: "cancel" },
          { 
            text: "Sí", 
            onPress: () => {
              const nuevasTareas = tareas.filter((_, i) => i !== index);
              setTareas(nuevasTareas);
            } 
          }
        ]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Tareas</Text>

      {/* Botón de Nueva tarea */}
      {!mostrarInput && (
        <Button title="Nueva tarea" onPress={() => setMostrarInput(true)} />
      )}

      {/* TextInput y Botón Guardar */}
      {mostrarInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe la nueva tarea..."
            value={textoNuevaTarea}
            onChangeText={setTextoNuevaTarea}
          />
          <Button title="Guardar" onPress={guardarTarea} />
        </View>
      )}

      {/* Listado de tareas */}
      <View style={styles.lista}>
        {tareas.map((tarea, index) => (
          <View key={index} style={styles.tareaItem}>
            <Text style={styles.textoTarea}>{tarea}</Text>
            <TouchableOpacity 
              style={styles.botonEliminar} 
              onPress={() => confirmarEliminar(index)}
            >
              <Text style={styles.textoBotonEliminar}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

