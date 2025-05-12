import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../Context/authContext';

export default function Perfil() {
  const { email } = useLocalSearchParams();
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo, {user || email}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          logout();
          router.push('/');
        }}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303841',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#486DC9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
