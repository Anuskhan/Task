import { StyleSheet} from 'react-native';
import Colors from '../../utils/colors'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export default styles = StyleSheet.create({
 
    headerView: {
        flex: 0.2,
        width: responsiveWidth(100),
        alignSelf: 'flex-start',
        backgroundColor: Colors.cyanBlue,


    },
    h: {
        fontSize: responsiveFontSize(3),
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
        fontWeight: '500',
        color: Colors.white
    },


})