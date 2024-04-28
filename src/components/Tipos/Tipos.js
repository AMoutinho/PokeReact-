import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import types from '../../pages/type/types.json'; 

import { styles } from './style.js'; 

const TypesComponent = () => {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#CD0707' }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 50, marginLeft: 40, paddingBottom: 25 }}>
                <TouchableOpacity
                    onPress={goBack}
                    style={{ justifyContent: 'flex-start', marginRight: 20 }}>
                    <Icon
                        name='chevron-left'
                        color='black'
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/image/pokemon.png')}
                    style={{ width: 230, height: 85 }}
                />
            </View>

            <ScrollView>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    }}>
                    {types.map((item, i) => {
                        const tipo = item
                        return (
                            <View key={i} style={styles.card}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('TypesDetail', { tipo })
                                }}>
                                    <View  style={styles.flex}>
                                        <View>
                                            <Text style={styles.cardTitle}>{item.name}</Text>
                                        </View>
                                        <Image
                                            source={{ uri: `${item.image}` }}
                                            style={styles.imagePok}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

export default TypesComponent;
