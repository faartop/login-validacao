import { Stack } from 'expo-router';
import { AuthProvider } from './Context/authContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
