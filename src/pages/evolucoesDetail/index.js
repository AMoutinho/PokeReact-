import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage } from '@rneui/base';
import types from '../type/types.json'

import { styles } from './style.js';

export default function EvolucaoDetail({ route }) {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    const pokemon = route.params.item.data[0];
    const [evolucao, setEvolucao] = useState([]);
    const [infoEvolucao, setInfoEvolucao] = useState([]);

    const getEvolucao = useCallback(() => {
        var endpoints = []
        var name = []
        pokemon.family.evolutionLine.forEach(function (nome) {
            name.push(nome.toLowerCase());
        })
        name.forEach(function (nome) {
            endpoints.push(`https://pokeapi.glitch.me/v1/pokemon/${nome}`);
        });
        axios
            .all(endpoints.map((endpoint) =>
                axios.get(endpoint)))
            .then((res) => setEvolucao(res))
            .catch((error) => console.log(error));
    }, [pokemon]);

    const getInfoEvolucao = useCallback(() => {
        var endpoints = []
        var name = []
        pokemon.family.evolutionLine.forEach(function (nome) {
            name.push(nome.toLowerCase());
        })
        name.forEach(function (nome) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        });
        axios
            .all(endpoints.map((endpoint) =>
                axios.get(endpoint)))
            .then((res) => setInfoEvolucao(res))
            .catch((error) => console.log(error));
    }, [pokemon]);

    useEffect(() => {
        getEvolucao();
        getInfoEvolucao();
    }, [getEvolucao, getInfoEvolucao]);

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <BackgroundImage
                style={{ display: 'flex', width: '100%', height: '100%' }}
                source={require('../../assets/image/background.jpg')}>
                <StatusBar style="auto" />

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 50, marginLeft: 15, margin: 20 }}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon
                            name='chevron-left'
                            color='white'
                        />
                        <Text style={{ color: 'white' }}>Pokédex</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <ScrollView>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            {evolucao.map((item, i) => {
                                console.log(item.data[0])
                                return (
                                    <View key={i}>
                                        <View style={{
                                            margin: 15,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Image
                                                source={{ uri: `${item.data[0].sprite}` }}
                                                style={styles.imagePok}
                                            />
                                        </View>
                                        <Text style={styles.cardTitle}>{item.data[0].name}</Text>
                                        <Text style={{ textTransform: 'uppercase', textAlign: 'center', color: 'black', fontSize: 15 }}>
                                            Peso: {item.data[0].weight} || Altura: {item.data[0].height}
                                        </Text>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>


            </BackgroundImage>
        </View>
    );
}