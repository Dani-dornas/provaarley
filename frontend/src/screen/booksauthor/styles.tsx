import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",  // Fundo mais suave para a tela de detalhes
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",  // Título em um tom mais escuro
    marginBottom: 16,  // Espaço entre o título e a lista de livros
    textAlign: "center",  // Alinhar o título ao centro
  },
  bookContainer: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",  // Adicionando sombra para um efeito de destaque
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,  // Para sombra em Android
  },
  bookDetails: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  bookTextTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  bookText: {
    fontSize: 14,
    color: "black",
  },
  // Estilos para exibir o nome do autor com destaque
  authorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",  // Azul para o nome do autor, com destaque
    marginBottom: 16,
    textAlign: "center",  // Alinhar o nome do autor ao centro
  },
  // Estilos para o indicador de carregamento
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  },
  message: {
    fontSize: 18,
    color: "#555", // Cinza escuro para legibilidade
    textAlign: "center",
    marginVertical: 16,
    paddingHorizontal: 20,
    fontWeight: "500",
  },
});

export default styles;
