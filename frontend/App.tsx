import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BookProvider } from './src/context/BookContext';
import HomeScreen from './src/screen/inicio/tela';
import BookListScreen from './src/screen/lista/tela';
import BooksByAuthorScreen from './src/screen/booksauthor';  // Certifique-se de que a importação da tela esteja correta
import { RootStackParamList } from './src/types/rootStack';  // Importando o tipo RootStackParamList

// Criação da pilha de navegação e tipando corretamente
const Stack = createStackNavigator<RootStackParamList>();  // Tipando com RootStackParamList

// Componente principal do app
export default function App() {
  return (
    <NavigationContainer>
      <BookProvider>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="BookListScreen" component={BookListScreen} />
          <Stack.Screen name="BooksByAuthor" component={BooksByAuthorScreen} />
        </Stack.Navigator>
      </BookProvider>
    </NavigationContainer>
  );
}
