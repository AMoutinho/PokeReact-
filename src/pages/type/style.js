import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    title: {
        paddingBottom: 5,
        fontSize: 30,
        fontWeight: '500',

    },
    card: {
        width: '43%',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        padding: 3,
        margin: 9,
        borderRadius: 10,
        backgroundColor: '#F9EBEA',
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
        textAlign: 'center',
        paddingTop: 11,
        textTransform: 'uppercase',
        flexGrow: 1,
        marginRight: 10
    },

    imagePok: {
        width: 40,
        height: 40,
        marginVertical: 3
    }
});

export {styles};