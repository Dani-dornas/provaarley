import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStack";
import { useBookContext } from "../../hooks/useBook";
import { Book } from "../../types"; // Certifique-se de que o tipo Book está no caminho correto
import styles from "./styles";

// Tipagem de Props
type BookListScreenProps = NativeStackScreenProps<RootStackParamList, "BookListScreen">;

const BookListScreen: React.FC<BookListScreenProps> = ({ navigation }) => {
  const { livros, fetchLivros } = useBookContext();

  useEffect(() => {
    fetchLivros(); // Carregar livros quando a tela for montada
  }, [fetchLivros]);

  const renderBook = ({ item, index }: { item: Book, index: number }) => (
    <View style={styles.bookContainer}>
      <View style={styles.bookDetails}>
        <Text style={styles.bookTextTitle}>{item.title}</Text>
        
        {/* Tornando o autor clicável para navegar até a tela BooksByAuthor */}
        <TouchableOpacity
          onPress={() => navigation.navigate("BooksByAuthor", { author: item.author })}
        >
          <Text style={styles.bookText}>{item.author}</Text>
        </TouchableOpacity>

        <Text style={styles.bookText}>{item.publisher}</Text>
        <Text style={styles.bookText}>{item.year}</Text>
      </View>
    </View>
  );

  if (!livros) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando livros...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={livros.books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBook}
      />
    </View>
  );
};

export default BookListScreen;
