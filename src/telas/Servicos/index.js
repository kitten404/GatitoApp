import React from 'react';
import { Text, StatusBar, SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';

const servicos = [
    {
        id:1,
        nome: "Banho",
        preco: 79.90,
        descricao: "Não de banho no seu gato"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 100.00,
        descricao: "Vacine o gatito"
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 90.00,
        descricao: "Vacine seu gatito"
    }
]

export default function Servicos() {
    return <>
        <FlatList 
            data={servicos}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={({id}) => String(id)}
        />
    </>
}