import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
    marginBottom: 20,
  },
  boton: {
    marginTop: 20,
  },
});

const App = () => {
  const onPressButton = () => {
    // Aquí puedes definir la lógica que se ejecutará cuando se presione el botón
    alert('¡Botón presionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola, esta es mi aplicación móvil</Text>
      <Button
        style={styles.boton}
        title="Cindy González"
        onPress={onPressButton}
      />
    </View>
  );
};

export default App;
