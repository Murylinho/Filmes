import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Card from './Card';

export default function Series() {
    const movie = [
        {
            id:"1",
            imagem: require("../assets/Series/Ozark.jpg"),
            titulo: "Ozark",
            sinopse: "Um consultor financeiro leva a família para um lago remoto para lavar quinhentos milhões de dólares e acalmar um traficante.",
            lancamento: "2017",
            age: "16",
            genero: "Drama, Crime, Suspense",
            duracao: "58min",
        },
        {
            id:"2",
            imagem: require("../assets/Series/Na Real.jpg"),
            titulo: "Na Real",
            sinopse: "Este reality icônico transforma desconhecidos em colegas de casa para mostrar o que acontece quando as pessoas deixam a educação de lado e começam a mandar a real.",
            lancamento: "1992",
            age: "16",
            genero: "Reality TV",
            duracao: "21min",
        },   
    ];

    return (
        <ScrollView>
            <View style={estilo.container2}>
                <FlatList
                    data={movie}
                    renderItem={({item})=>
                        <Card
                            imagem={item.imagem}
                            titulo={item.titulo}
                            sinopse={item.sinopse}
                            lancamento={item.lancamento}
                            age={item.age}
                            genero={item.genero}
                            duracao={item.duracao}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    );
}