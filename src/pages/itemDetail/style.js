import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#37007E',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
        margin: 5
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '500',
        marginVertical: 8
    },
    text: {
        color: '#99A3A4',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 5
    },
    imagePok: {
        width: '50%',
        height: '30%',
        marginTop: -50,
        padding: 0,
    }
});

export {styles};