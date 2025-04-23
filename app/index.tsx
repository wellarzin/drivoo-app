import { Stack, Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen 
        options={{ 
          title: 'Home',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      <Container style={styles.container}>
        <ScreenContent 
          path="app/index.tsx" 
          title="Home"
          style={styles.content}
        />
        
        <View style={styles.buttonContainer}>
          <Link href="/login" asChild>
            <Button 
              title="Login" 
              style={styles.button}
              accessibilityLabel="Navigate to login screen"
              accessibilityHint="Takes you to the login form"
            />
          </Link>
          
          <Link href={{ pathname: '/details', params: { name: 'User' } }} asChild>
            <Button 
              title="Show Details" 
              style={styles.button}
              accessibilityLabel="Navigate to details screen"
              accessibilityHint="Shows information about the application"
            />
          </Link>
        </View>
        
        <Text style={styles.footer}>
          Welcome to Drivo App
        </Text>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  content: {
    marginBottom: 24,
    color: '#ffffff',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    minWidth: '80%',
    backgroundColor: '#2e2e2e',
    borderColor: '#4a4a4a',
    marginBottom: 8,
  },
  footer: {
    color: '#aaaaaa',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 16,
    fontSize: 14,
  }
});