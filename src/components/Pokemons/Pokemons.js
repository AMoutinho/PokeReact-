// PokemonsComponent.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { styles } from './style.js';

const PokemonsComponent = () => {
    const navigation = useNavigation();

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 1026; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        axios.
            all(endpoints.map((endpoint) =>
                axios.get(endpoint)))
            .then((res) => setPokemons(res))
            .catch((error) => console.log(error));
    };

    function goBack() {
        navigation.goBack()
    }

    const searchPokemon = (name) => {
        var pokemonsFiltrados = [];
        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                pokemonsFiltrados.push(pokemons[i]);
            }
        }
        setPokemons(pokemonsFiltrados);
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>

            <View
                style={{
                    backgroundColor: '#CD0707',
                    color: 'white',
                    flexDirection: 'row',
                    display: 'flex',
                    height: 100,
                    alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                    onPress={goBack}
                    style={{ marginBottom: 20 }}>
                    <Icon
                        name='chevron-left'
                        color='white'
                    />
                </TouchableOpacity>
                <Image
                    style={{ width: '60%', height: 40, marginLeft: 50, marginBottom: 15 }}
                    source={require('../../assets/image/pokedex.png')}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F9EBEA',
                    borderRadius: 100,
                    width: '65%',
                    padding: 0,
                    paddingStart: '10%',
                    marginBottom: 17
                }}>
                    <View style={{ width: '70%' }}>
                        <TextInput
                            onChangeText={(e) => searchPokemon(e)}
                            onChange={(e) => searchPokemon(e)}
                            placeholder="Buscar Pokemon"
                            style={{
                                fontSize: 20,
                                borderRadius: 2,
                                borderColor: '#CD6155',
                                borderBottomWidth: 2,
                                textAlign: 'center'
                            }}
                        />
                    </View>
                    <View>
                        <Icon
                            name='search' color='#CD6155' style={{ margin: 10 }}
                        />
                    </View>
                </View>
            </View>


            <ScrollView>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>

                    {pokemons.map((item, i) => {
                        return (
                            <View key={i}
                                style={styles.card}
                            >
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('PokemonDetail', { item })
                                }}>
                                    <View style={{}}>
                                        <Image
                                            source={{ uri: `${item.data.sprites.front_default}` }}
                                            style={styles.imagePok}
                                        />
                                    </View>
                                    <Text style={styles.cardTitle}>{item.data.name}</Text>
                                    <Text style={{ textTransform: 'uppercase', textAlign: 'center', color: 'white', fontSize: 7 }}>
                                        {item.data.types.map((a) => {
                                            if (a.slot == 1) {
                                                return (
                                                    item.data.types[0].type.name
                                                )
                                            } else if (a.slot == 2) {
                                                return (
                                                    " | " + item.data.types[1].type.name
                                                )
                                            }
                                        })}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}

                </View>
            </ScrollView>


        </View>
    );
}

export default PokemonsComponent;
