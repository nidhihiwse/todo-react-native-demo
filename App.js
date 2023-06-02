import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import React, {useEffect, useState} from 'react';
import Auth from './components/AuthScreen';
import TodoList from './components/TodoList';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkBiometricSupport = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    };

    try {
      checkBiometricSupport();
    } catch (error) {
      console.log(error)
    }
  }, []);

  const authenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with touch ID',
        fallbackLabel: 'Enter password',
      });
      setIsAuthenticated(result.success);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {isBiometricSupported && !isAuthenticated && (
        <Button title="Authenticate" onPress={authenticate} />
      )}
      {isAuthenticated && <Text>Authenticated successfully!</Text>}
    </View>
  );
}

// export default function App() {
//   const [isBiometricSupported, setIsBiometricSupported] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check if hardware supports biometrics
//   useEffect(() => {
//     (async () => {
//       const compatible = await LocalAuthentication.hasHardwareAsync();
//       setIsBiometricSupported(compatible);
//     })();
//   });

//   // Authentication
//   function onAuthenticate() {
//     const auth = LocalAuthentication.authenticateAsync({
//     promptMessage: 'Authenticate with touch ID',
//     fallbackLabel: 'Enter password',
//     });
//     auth.then(result => {
//       setIsAuthenticated(result.success);
//       console.log(result);
//     })
//   };

//   return (
//     <View style={styles.container}>
//       {isAuthenticated ? <TodoList setIsAuthenticated={setIsAuthenticated}/> : <Auth onAuthenticate={onAuthenticate} />}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});