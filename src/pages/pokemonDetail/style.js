import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    flexRow: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' },
    flexRow2: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap',          alignItems: 'center', justifyContent: 'center' },
    id: { flexGrow: 1, alignItems: 'center' },
    idTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#424949',
        marginTop: 5
    },
    idSubtitle: {
        fontWeight: '500',
        color: 'gray',
        marginBottom: 5
    },
    center: { justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
    cardTitle: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    imagePok: {
        width: 200,
        height: 200,
    },
    card: {
        margin: 10,
        padding: 3,
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#CD0707',
        borderStyle: 'solid',
        borderWidth: 0.2,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#7B241C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 2.5,
        shadowOpacity: 0.9,
        elevation: 1
    }
});

export {styles};