import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from './Context/authContext';

export default function Index() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    const message = login(email, password);

    if (message) {
      Alert.alert('Erro', message);
      return;
    }

    router.push({
      pathname: '/telas/perfil',
      params: { email },
    });
  };

  return (
    <View style={styles.background_base}>
      <View style={styles.painel_login}>
        <Text style={styles.texto}>Validador de Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#bbb"
          value={email}
          onChangeText={setemail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#bbb"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background_base: {
    flex: 1,
    backgroundColor: '#303841',
    justifyContent: 'center',
    alignItems: 'center',
  },
  painel_login: {
    width: '80%',
    height: '60%',
    backgroundColor: 'rgba(72, 108, 201, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 20,
  },
  texto: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#333',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#486DC9',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
