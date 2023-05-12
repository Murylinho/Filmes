import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Card from './Card';

export default function Movie() {
    const movie = [
        {
            id:"1",
            imagem: require("../assets/Movies/Kung Fu Panda 3.jpg"),
            titulo: "Kung Fu Panda 3", 
            sinopse: "Enquanto Po e seu pai estão visitando uma vila secreta de pandas, um espírito maligno ameaça toda a China, forçando Po a formar um exército desorganizado para revidar.",
            lancamento: "2016",
            age: "L",
            genero: "Ação, Animação, Aventura, Chanchada",
            duracao: "1h 34m",
        },
        {
            id:"2",
            imagem: require("../assets/Movies/Homem-Aranha Longe de Casa.jpg"),
            titulo: "Homem-Aranha: Longe de Casa",
            sinopse: "Até mesmo o super-herói amigo da vizinhança pode tirar férias. Mas uma nova ameaça força Peter Parker a entrar em ação durante uma viagem escolar à Europa.",
            lancamento: "2019",
            age: "10",
            genero: "Ação/Ficção científica ",
            duracao: "2h 9m",
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