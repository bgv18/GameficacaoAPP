import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import MyTabs from './src/Screens/HistoryMainPage/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GameficacaoAPP" component={TelaInicial} />
        <Stack.Screen name="História" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TelaInicial() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('História');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GameficacaoAPP</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363636', // cor de fundo cinza
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'white'
  },
  button: {
    backgroundColor: '#32CD32', // cor do botão verde
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
