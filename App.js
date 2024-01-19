import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Diego Bruno</Text>
      <Text style={styles.subtitulo}>Primera app react Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:"white",
    fontWeight: "800",
    fontSize:50
  },
  subtitulo:{
    color:"white",
    fontWeight: "600",
  }
});
