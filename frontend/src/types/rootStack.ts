import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
    HomeScreen: undefined;
    BookListScreen: undefined;
    BooksByAuthor: { author: string };  // Adicionei a tela "BooksByAuthor" e o parâmetro "author" com tipo string
}
