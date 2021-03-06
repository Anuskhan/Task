import { StyleSheet} from 'react-native';
import Colors from '../../utils/colors'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export default Style = StyleSheet.create({
    container: {
        flex: 1,
        width: responsiveWidth(100),
        backgroundColor: Colors.yellow,

    },
    r:{
        flex:1,marginVertical:10,
          flexDirection:"row"
      },
      lis:{
        marginTop:25,
         alignItems: "center"
    },

    Detail: {
        flex: 1,margin:20,
       
    },
    chart:{width: responsiveWidth(100),},
btn:{ width:'90%',paddingVertical:15,alignItems:"center",
justifyContent:"center",alignSelf:"center",borderRadius:10,marginVertical:10},
view:{width: responsiveWidth(100),marginTop:20},
color:{color:Colors.white,fontSize:17, fontWeight: 'bold'},
sub:{flexDirection:"row",paddingHorizontal:5,flex:1,justifyContent:"space-between",alignItems:"center"},


})