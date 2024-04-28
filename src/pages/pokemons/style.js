import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    title: {
        paddingBottom: 5,
        fontSize: 30,
        fontWeight: '500',
        color: 'white'

    },

    containerTextInput: {
        backgroundColor: 'yellow',
        height: 69,
        borderRadius: 10,
        margin: 30,
        alignItems: 'flex-start'

    },

    card: {
        // display: 'flex',
        // flexWrap: 'wrap',
        backgroundColor: '#C0392B',
        justifyContent: 'center',
        padding: 8,
        margin: 8,
        width: '45%',
        borderRadius: 8,
        shadowColor: '#7B241C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },

    cardTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    imagePok: {
        width: 150,
        height: 120,
    }
});

export {styles};