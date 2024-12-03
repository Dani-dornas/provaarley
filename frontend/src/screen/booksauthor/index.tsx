import React, { useEffect, useState } from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStack";
import { useBookContext } from "../../hooks/useBook";
import { Book } from "../../types";
import styles from "./styles";

// Tipando corretamente a tela
type BooksByAuthorScreenProps = NativeStackScreenProps<RootStackParamList, "BooksByAuthor">;

const BooksByAuthorScreen: React.FC<BooksByAuthorScreenProps> = ({ route }) => {
  const { author } = route.params; // Obtendo o nome do autor a partir dos parâmetros da navegação
  const { livros, fetchLivros } = useBookContext();
  const [booksByAuthor, setBooksByAuthor] = useState<Book[]>([]);

  useEffect(() => {
    fetchLivros(); // Carregar livros
  }, [fetchLivros]);

  useEffect(() => {
    if (livros && author) {
      const filteredBooks = livros.books.filter(book => book.author === author);
      setBooksByAuthor(filteredBooks);
    }
  }, [livros, author]);

  if (!livros) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando livros...</Text>
      </View>
    );
  }

  if (booksByAuthor.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Nenhum livro encontrado para o autor: {author}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livros de {author}</Text>
      <FlatList
        data={booksByAuthor}
        keyExtractor={(item) => item.author.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.bookTextTitle}>{item.title}</Text>
            <Text style={styles.bookText}>{item.publisher}</Text>
            <Text style={styles.bookText}>{item.year}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default BooksByAuthorScreen;
