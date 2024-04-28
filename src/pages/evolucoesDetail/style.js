import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    ,
    title: {
        paddingBottom: 5,
        fontSize: 35,
        fontWeight: '500',
    },

    cardTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    },

    imagePok: {
        width: 100,
        height: 100,
    }
});

export {styles};