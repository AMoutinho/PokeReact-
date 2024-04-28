import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { BackgroundImage } from '@rneui/base';

import { styles } from './style.js';

export default function ItemDetail({ route }) {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    const item = route.params.item.data;

    return (
        <View style={{ width: '100%', backgroundColor: '#CD0707', height: '100%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 60, marginLeft: 40, paddingBottom: 0 }}>
                <TouchableOpacity onPress={goBack} style={{ justifyContent: 'flex-start', marginRight: 20 }}>
                    <Icon name='chevron-left' color='white' />
                </TouchableOpacity>
                <Image source={require('../../assets/image/pokemon.png')} style={{ width: 230, height: 85 }} />
            </View>

            <View style={styles.center}>
                <Image source={{ uri: item.sprites && item.sprites.default ? item.sprites.default : '' }} style={styles.imagePok} />
                <View style={{ backgroundColor: '#F5EEFF', borderRadius: 15, width: '85%', height: '60%', padding: 15 }}>
                    <ScrollView>
                        <View>
                            <Text style={styles.cardTitle}>{item.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.title}>Categoria: </Text>
                            <Text style={styles.text}>{item.category.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.title}>Atributos:</Text>
                            {item.attributes.map((attribute, i) => (
                                <Text key={i} style={styles.text}>{`${i + 1}. ${attribute.name}`}</Text>
                            ))}
                        </View>

                        <View>
                            <Text style={styles.title}>Efeitos:</Text>
                            {item.effect_entries.map((effects, i) => (
                                <Text key={i} style={styles.text}>{effects.effect}</Text>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}