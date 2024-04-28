import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    ,
    card: {
        backgroundColor: '#F9EBEA',
        alignItems: 'center',
        padding: 8,
        margin: 8,
        width: '45%',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },

    cardTitle: {
        fontSize: 15,
        color: '#CD0707',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    imagePok: {
        width: 50,
        height: 50,
    }
});

export {styles};