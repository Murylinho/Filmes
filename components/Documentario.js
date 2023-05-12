import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import Card from './Card';
export default function Documentario() {
    const movie = [
        {
            id:"1",
            imagem: require("../assets/Documentario/Nosso Planeta.jpg"),
            titulo: "Nosso Planeta",
            sinopse: "Com imagens nunca vistas, o ambicioso documentário traz a beleza natural de nosso planeta e mostra como as mudanças climáticas têm impacto sobre todas as criaturas vivas.",
            lancamento: "2019",
            age: "L",
            genero: "Documentário",
            duracao: "50min",
        },
        {
            id:"2",
            imagem: require("../assets/Documentario/Juízo.jpg"),
            titulo: "Juízo",
            sinopse: "Acusações e julgamentos por roubo, tráfico e homicídio: o julgamento de menores infratores escancara a desigualdade social no Brasil.",
            lancamento: "2007",
            age: "10",
            genero: "Documentário",
            duracao: "1h 30min",
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