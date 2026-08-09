import { View, Text, Image, Pressable, StyleSheet, Alert, Platform } from "react-native";

export default function App() {
  const mostrarMensaje = () => {
    const message = "Seré ingeniera";
    if (Platform.OS === "web") {
      window.alert(message);
    } else {
      Alert.alert(message);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Image
        source={require("../../assets/images/foto.jpeg")}
        style={styles.foto}
      />
      <Text style={styles.nombre}>Aylin Aguilar</Text>
      <Text style={styles.carrera}>Ingeniería en Sistemas</Text>
      <Text style={styles.carnet}>Carné: 0907-25-6317</Text>
      <Pressable style={styles.boton} onPress={mostrarMensaje}>
        <Text style={styles.botonTexto}>Ver proyectos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  foto: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#f566c5" },
  carrera: { fontSize: 16, color: "#bfc37a", marginTop: 4 },
  carnet: { fontSize: 14, color: "#888", marginTop: 4 },
  boton: { marginTop: 20, backgroundColor: "#bfc37a", padding: 12, borderRadius: 8 },
  botonTexto: { color: "white", fontSize: 16 }
});


