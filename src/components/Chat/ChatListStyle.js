import { StyleSheet, Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const Style = StyleSheet.create({

    listItemImageContainer: {
        width: 62,
        height: 62,
        borderRadius: Platform.OS === 'ios' ? 12 / 2 : 12,
        borderWidth: 1,
        // borderColor: '#d3d3d3',
        marginRight: 15
    },
    listItemImage: {
        width: 60,
        height: 60,
        borderRadius: Platform.OS === 'ios' ? 10 / 2 : 10,
    },
    listItemImageUser: {
        width: 25,
        height: 25,
        borderRadius: Platform.OS === 'ios' ? 25 / 2 : 25,
    },
    listItem: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3'
    },
    listItemDetail: {
        flex: 1
    },
    load: {
        padding: 10
    },
    listItemText: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#000'
    },
    listItemSubText: {
        flex: 1,
        fontSize: 14
    },
    icon: {
        fontSize: 24
    },
    listItemDetailIconButton: {

        width: 32,
        height: 32,
        borderWidth: 2,
        borderColor: '#d3d3d3',
        borderRadius: Platform.OS === 'ios' ? 32 / 2 : 32,
        alignItems: 'center',
        justifyContent: 'center',
    },




})

export default Style
