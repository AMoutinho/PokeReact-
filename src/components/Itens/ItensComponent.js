import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BackgroundImage } from '@rneui/base';

import { styles } from './style.js';

const ItensComponent = () => {
    const navigation = useNavigation();

    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        var endpoints = [];
        for (var i = 1; i < 21; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/item/${i}`);
        }
        axios.
            all(endpoints.map((endpoint) =>
                axios.get(endpoint)))
            .then((res) => setItems(res))
            .catch((error) => console.log(error));
    };

    function goBack() {
        navigation.goBack()
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#CD0707' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 50, marginLeft: 40, paddingBottom: 25 }}>
                <TouchableOpacity
                    onPress={goBack}
                    style={{ justifyContent: 'flex-start', marginRight: 20 }}>
                    <Icon
                        name='chevron-left'
                        color='white'
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/image/pokemon.png')}
                    style={{ width: 230, height: 85 }}
                />
            </View>

            <ScrollView>
                <View style={styles.flex}>
                    {items.map((item, i) => {
                        return (
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => {
                                    navigation.navigate('ItemDetail', { item })
                                }}>
                                <View key={i}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image
                                            source={{ uri: `${item.data.sprites.default}` }}
                                            style={styles.imagePok}
                                        />
                                    </View>
                                    <Text style={styles.cardTitle}>{item.data.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

export default ItensComponent;
