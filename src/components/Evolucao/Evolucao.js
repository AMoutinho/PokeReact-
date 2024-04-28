import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import RotuloEvolucao  from '../../props/propsTexto';
import axios from 'axios';

import { styles } from './style.js';

const EvolucoesComponent = () => {
    const navigation = useNavigation()

    function goBack() {
        navigation.goBack()
    }

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 49; i++) {
            endpoints.push(`https://pokeapi.glitch.me/v1/pokemon/${i}`);
        }
        axios.
            all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((data) => setPokemons(data))
            .catch((error) => console.log(error));
    };

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ backgroundColor: '#CD0707', color: 'white',
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
                    marginBottom: 5,
                    marginTop:20
                }}>  
                </View> 

            </View>
            
            <View>
              <RotuloEvolucao titulo="Todas as Evoluções"/>
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
                                <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('EvolucoesDetail', { item })
                                }}
                                >
                                    <View style={{}}>
                                        <Image
                                            source={{ uri: `${item.data[0].sprite}` }}
                                            style={styles.imagePok}
                                        />
                                    </View>
                                    <Text style={styles.cardTitle}>{item.data[0].name}</Text>
                                    <Text style={{ textTransform: 'uppercase', textAlign: 'center', color: 'white' }}>
                                        {item.data[0].types[0] + ' | ' + item.data[0].types[1] }
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

export default EvolucoesComponent;
