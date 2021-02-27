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
        backgroundColor: Colors.yellow,


    },
    h: {
        fontSize: responsiveFontSize(3),
        alignSelf: 'center',
        marginTop: responsiveHeight(8),
        fontWeight: '500',
        color: Colors.black
    },
    main:{ flex: 0.9, marginTop: -10, backgroundColor: "#fff", borderTopRightRadius: 10, borderTopLeftRadius: 10 },
    f:{ flex: 1 },
sub:{
    justifyContent: "space-between"
    , width: "99%", paddingVertical: 10,
    marginHorizontal: 10, paddingBottom: 5
},
margin:{ marginTop: 10 },
div:{
    width: 80,
    height: 80,
    borderRadius: 40 / 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginRight: 3,alignSelf: "center" 
},
image:{
    marginVertical: 10,
    width: 80,
    height: 80,
    resizeMode: 'contain',
},
divSub:{
    marginBottom: 1, width: "45%", margin: 5,
    borderWidth: 1, borderColor: "#f2f2f2",
    borderRadius: 10, elevation: 4,
    paddingVertical: 20, alignItems: "center", backgroundColor: "#fff",
},
row:{ flexDirection: "row" },
p:{ justifyContent: "center", padding: 5 },
})