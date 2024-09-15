import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image } from "react-native";

const handleLogin = async () => {
  try {
    const response = await axios.get(
    "https://66e73a7217055714e58bc93a.mockapi.io/api/loginUsers/registro");

    const users = response.data;
    const user = users.find(
      (u) => u.username === username && u.password === password 
    );

    if (user) {
      setIsAuthenticated(true);
      navigation.replace("HomeTabs");
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  } catch (error) {
    Alert.alert("Error", "Hubo un problema con la autenticación");
  }
};

export default function LoginScreen({ navigation, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === username && password === password) {
      setIsAuthenticated(true); // Cambia el estado de autenticación
      navigation.replace("HomeTabs");
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={{
          uri: "https://us.123rf.com/450wm/mykub/mykub1606/mykub160600114/59113859-welcome-to-mexico-poster-mexican-food-cactus-chili.jpg",
        }}
        style={{ width: 200, height: 200, borderRadius: 20, marginBottom: 10 }}
      />

      <Text style={{ fontSize: 24, marginBottom: 20 }}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          width: "100%",
          paddingHorizontal: 10,
          backgroundColor: "#f2f2f2",
        }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          width: "100%",
          paddingHorizontal: 10,
          backgroundColor: "#f2f2f2",
        }}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}