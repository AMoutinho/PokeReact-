import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage } from '@rneui/base';

import { styles } from './style.js';

export default function PokemonDetail({ route }) {
    const navigation = useNavigation();
    const pokemon = route.params.item.data;
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [evolucao, setEvolucao] = useState([]);

    function goBack() { 
        navigation.goBack();
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.glitch.me/v1/pokemon/${pokemon.name}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                });
                const data = await response.json();
                setPokemonInfo(data[0]);

                const endpoints = pokemon.family.evolutionLine.map(nome => `https://pokeapi.glitch.me/v1/pokemon/${nome}`);
                const evolutionData = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
                setEvolucao(evolutionData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [pokemon]);

    return (
        <View style={{ width: '100%', backgroundColor: 'white', height: '100%' }}>
            <BackgroundImage
                style={{ display: 'flex', width: '100%', height: '100%' }}
                source={require('../../assets/image/background.jpg')}>
                <StatusBar style="auto" />

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 50, marginLeft: 15 }}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon
                            name='chevron-left'
                            color='white'
                        />
                        <Text style={{ color: 'white' }}>Pokédex</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.center}>
                    <Image
                        source={{ uri: `${pokemonInfo.sprite}` }}
                        style={styles.imagePok}
                    />
                    <Text style={styles.cardTitle}>
                        {pokemonInfo.name}
                    </Text>

                    <View style={styles.flexRow}>
                        {pokemon.types.map((type) => {
                            return (
                                <View key={type.slot} style={{
                                    backgroundColor: '#F1948A',
                                    margin: 2,
                                    borderRadius: 5
                                }}>
                                    <Text style={{ color: 'white', textTransform: 'uppercase', padding: 5 }}>
                                        {type.type.name}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

                <View style={styles.flexRow2}>
                    <View style={styles.id}>

                        <Text style={styles.idTitle}>
                            {'0' + pokemon.id}
                        </Text>
                        <Text style={styles.idSubtitle}>
                            N°
                        </Text>
                    </View>

                    <View style={styles.id}>

                        <Text style={styles.idTitle}>
                            {pokemonInfo.height}
                        </Text>
                        <Text style={styles.idSubtitle}>Altura</Text>
                    </View>

                    <View style={styles.id}>

                        <Text style={styles.idTitle}>
                            {pokemonInfo.weight}
                        </Text>
                        <Text style={styles.idSubtitle}>Peso</Text>
                    </View>

                </View>

                <ScrollView>
                    <View style={styles.flexRow2}>
                        {pokemon.stats.map((status) => {
                            return (
                                <View key={status.stat.name} style={styles.card}>
                                    <Text style={{ color: '#99A3A4', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold' }}>
                                        {status.stat.name}
                                    </Text>
                                    <Text style={{ color: 'black', fontSize: 14, textTransform: 'uppercase', fontWeight: 'bold' }}>
                                        {status.base_stat}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={{ marginVertical: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 14, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                            Habilidades
                        </Text>
                        {pokemon.abilities.map((ability) => {
                            return (
                                <Text key={ability.ability.name} style={{ color: '#99A3A4', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', marginVertical: 5 }}>
                                    {ability.ability.name}
                                </Text>
                            )
                        })}
                    </View>
                </ScrollView>
            </BackgroundImage>
        </View>
    );
}