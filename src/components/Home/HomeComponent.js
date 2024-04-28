import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackgroundImage } from '@rneui/base';
import Pokemons from '../../pages/pokemons';
import Itens from '../../pages/itens';
import Types from '../../pages/type';
import Evolucoes from '../../pages/evolucoes';

import { styles } from './style.js';

const HomeComponent = () => {
    const navigation = useNavigation();

    return (
        <View style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: 'black' }}>
            <BackgroundImage
                style={{ display: 'flex', width: '100%', height: '100%' }}
                source={require('../../assets/image/background.jpg')}>

                <View
                    style={{ alignItems: 'center', marginHorizontal: 20, marginTop: 70 }}>
                    <Image
                        style={{ width: 300, height: 110 }}
                        source={require('../../assets/image/pokemon.png')}
                    />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={{ width: 150, height: 160 }}
                        source={require('../../assets/image/giphy.gif')} />

                </View>

                <View style={styles.flexRow}>

                    <TouchableOpacity
                        style={styles.card1}
                        onPress={() => {
                            navigation.navigate('Pokemons', Pokemons)
                        }}>
                        <View style={styles.flexRow}>
                            <Text
                                style={styles.cardTitle}>
                                Pokédex
                            </Text>
                            <Image
                                style={styles.icons}
                                source={require('../../assets/image/pokebola.png')} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card3}
                        onPress={() => {
                            navigation.navigate('Types', Types)
                        }}>
                        <View style={styles.flexRow}>
                            <Text
                                style={styles.cardTitle}>
                                Tipos
                            </Text>
                            <Image
                                style={styles.icons}
                                source={require('../../assets/image/raio.png')} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card2}
                        onPress={() => {
                            navigation.navigate('Evolucoes', Evolucoes)
                        }}>
                        <View style={styles.flexRow}>
                            <Text
                                style={styles.cardTitle}>
                                Evoluções
                            </Text>
                            <Image
                                style={styles.icons}
                                source={require('../../assets/image/evolucao.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card5}
                        onPress={() => {
                            navigation.navigate('Itens', Itens)
                        }}>
                        <View style={styles.flexRow}>
                            <Text
                                style={styles.cardTitle}>
                                Itens
                            </Text>
                            <Image
                                style={styles.icons}
                                source={require('../../assets/image/mochila.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </BackgroundImage>
        </View>
    );
}

export default HomeComponent;
