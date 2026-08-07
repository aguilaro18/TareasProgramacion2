import { View, Text, Image, Pressable, StyleSheet, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={require("../../assets/images/foto.jpeg")}
        style={styles.foto}
      />
      <Text style={styles.nombre}>Aylin Aguilar</Text>
      <Text style={styles.carrera}>Ingeniería en Sistemas</Text>
      <Text style={styles.carnet}>Carné: 2026-20-XXXXX</Text>
      <Pressable style={styles.boton}>
        <Text style={styles.botonTexto}>Ver proyectos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
