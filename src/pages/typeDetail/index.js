import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from "@rneui/themed";

import { styles } from './style.js';

export default function TypesDetail({ route }) {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    const tipo = route.params?.tipo;

    if (!tipo) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Detalhes do tipo não disponíveis</Text>
            </View>
        );
    }

    return (
        <View style={{ width: '100%', backgroundColor: '#CD0707', height: '100%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginTop: 60, marginLeft: 40, paddingBottom: 0 }}>
                <TouchableOpacity onPress={goBack} style={{ justifyContent: 'flex-start', marginRight: 20 }}>
                    <Icon name='chevron-left' color='white' />
                </TouchableOpacity>
                <Image source={require('../../assets/image/pokemon.png')} style={{ width: 230, height: 85 }} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', shadowColor: '#37007E', shadowOffset: { width: 0, height: 4 }, shadowRadius: 5, shadowOpacity: 1.0, elevation: 3 }}>
                <Image source={{ uri: tipo?.image }} style={styles.imagePok} />

                <View style={{ backgroundColor: '#F5EEFF', borderRadius: 15, width: '85%', height: '60%', padding: 15 }}>
                    <ScrollView>
                        <View>
                            <Text style={styles.cardTitle}>{tipo?.name}</Text>
                        </View>

                        <View>
                            <Text style={styles.title}>Não causa dano:</Text>
                            {tipo?.naoCausaDano.map((dano, index) => (
                                <Text key={index} style={styles.text}>{dano.name}</Text>
                            ))}
                        </View>

                        <View>
                            <Text style={styles.title}>Super efetivo:</Text>
                            {tipo?.superEfetivo.map((efetivo, index) => (
                                <Text key={index} style={styles.text}>{efetivo.name}</Text>
                            ))}
                        </View>

                        <View>
                            <Text style={styles.title}>Menos efetivo:</Text>
                            {tipo?.menosEfetivo.map((naoEfetivo, index) => (
                                <Text key={index} style={styles.text}>{naoEfetivo.name}</Text>
                            ))}
                        </View>

                        <View>
                            <Text style={styles.title}>Fraqueza:</Text>
                            {tipo?.fraqueza.map((fraquezas, index) => (
                                <Text key={index} style={styles.text}>{fraquezas.name}</Text>
                            ))}
                        </View>

                        <View>
                            <Text style={styles.title}>Resistente:</Text>
                            {tipo?.resistente.map((resistente, index) => (
                                <Text key={index} style={styles.text}>{resistente.name}</Text>
                            ))}
                        </View>

                        <View>
                            <Text style={styles.title}>Imune:</Text>
                            {tipo?.imune.map((imune, index) => (
                                <Text key={index} style={styles.text}>{imune.name}</Text>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}