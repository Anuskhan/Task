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
    h:{fontSize:18,fontWeight:"bold",color:'#fff'},
    h2:{fontSize:16,fontWeight:"400",color:'#fff'},
    row:{flexDirection:'row',alignItems:'center',paddingVertical:4},
    r:{
        flex:1,marginVertical:10,
          flexDirection:"row"
      },
      f:{flex:1,},
      top:{flex:1,flexDirection:'row',alignItems:'center',justifyContent:"space-between"},
      lis:{
        marginTop:25,
         alignItems: "center"
    },
head:{borderWidth:1,borderRadius:10,margin:5,padding:2},
headsub:{flexDirection:'row',alignItems:'center',padding:10,},
    Detail: {
        flex: 1,margin:20,
       
    },
    chart:{width: responsiveWidth(100),},
btn:{ width:'90%',paddingVertical:15,alignItems:"center",
justifyContent:"center",alignSelf:"center",borderRadius:10,marginVertical:10},
view:{paddingHorizontal:10,marginTop:20,},
color:{color:Colors.white,fontSize:17, fontWeight: 'bold'},
sub:{flexDirection:"row",paddingHorizontal:5,flex:1,justifyContent:"space-between",alignItems:"center"},
body:{alignItems:'center',justifyContent:'space-around',flexDirection:'row',},

})