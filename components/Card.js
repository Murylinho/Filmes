import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';

const Card = ({imagem, titulo, sinopse, lancamento, age, genero, duracao})=>{
    return(
        
            <ImageBackground style={estilo.card}>
                <ImageBackground
                    style={estilo.movie}
                    source={imagem}
                    borderRadius={10}
                    resizeMode="stretch"
                    >
                    <Text style={estilo.titulo}>{titulo}</Text>
                </ImageBackground>
                <Text style={estilo.texto1}>Lançamento: {lancamento}, Idade: {age}, {genero}, {duracao}</Text>
                <Text style={estilo.texto2}>Sinopse: {sinopse}</Text>
            </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    tela: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        borderColor: '#FFFAFA', 
        borderWidth: 1,
        margin: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    movie:{
        width: 300,
        height: 500,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: "flex-start",
    },
    titulo:{
        fontSize: 18,
        padding: 5,
        backgroundColor:"#040404c4",
        color: "white",
    },
    texto1:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        textAlign: "center",
        borderBottomColor: "black",
        borderBottomWidth: 15,
    },
    texto2: {  
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        textAlign: "center"
    },
    
  });
  
  export default Card;