
import React, {useState} from 'react';
import {SafeAreaView, ImageBackground,View, Text, ScrollView,StatusBar, Button} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';

// import arrowRight from './assets/arrow-right.png';
import  TransparentHeader  from "../../utils/TransparentHeader"

import SwipeButton from 'rn-swipe-button-rectangular';
import Style from './OnWayStyle';
import Colors from '../../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';


const App = () => {
 
  let [active, setActive] = useState('');

  const TwitterIcon = () => <Icon name="arrow-right" color="#3b5998" size={30} />;

  return (
    
        <SafeAreaView style={Style.container} >
             <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />
           <ImageBackground
                        resizeMethod="scale"
                        source={require("../../assets/images/bgx.jpg")}
                        style={{ flex: 1 }}
                    >
<ScrollView>  
  <TransparentHeader props={this.props} title={"Profile"} />

      <SwipeButton 
     
       title="Slide to confirm"
       thumbIconBackgroundColor="#FFFFFF"
       railBackgroundColor="#00cc00"
       railFillBackgroundColor="#fff"
       containerStyle={{backgroundColor:"yellow",height:100}}
       thumbIconStyles={{backgroundColor:"green"}}
       titleStyles={{color:'#fff',fontWeight:"bold"}}
       railStyles={{
        backgroundColor: '#44000088',
        borderColor: '#880000FF',
      }}
       thumbIconComponent={TwitterIcon}
      enableRightToLeftSwipe={false}
      //  onSwipeStart={() => alert('Swipe started!')}
       onSwipeSuccess={() =>
        alert('Submitted successfully!')
      }
      // onSwipeFail={() => alert('Incomplete swipe!')}
      />
     
        <View style={Style.container}>
        
      
        <View style={Style.view}>
          {/* start */}
    <Collapse 
    onToggle={(v)=>{v==true?setActive('1'):setActive('')}}
    style={[Style.head,{backgroundColor:Colors.darkGrey}]}>
      <CollapseHeader style={Style.headsub}>
      <View style={Style.f}>
        <View style={Style.top}>
        <Text style={Style.h}>Details</Text>
        {active=='1'? <Icon name="minus" color="#fff" size={20} />:<Icon name="plus" color="#fff" size={20} />}
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Name : </Text>
      <Text style={Style.h2}>Osama</Text>
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Date : </Text>
      <Text style={Style.h2}>10/10/2020</Text>
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Details : </Text>
      <Text style={Style.h2}>Details</Text>
        </View>
        </View>
      </CollapseHeader>
      <CollapseBody style={[Style.body,{backgroundColor:Colors.darkGrey}]}>
        <TouchableOpacity style={Style.row}><Icon name="male" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
        <TouchableOpacity style={Style.row}><Icon name="briefcase" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
        <TouchableOpacity style={Style.row}><Icon name="mobile" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>

      </CollapseBody>
    </Collapse>
     {/* end */}
          {/* start */}
    <Collapse 
    onToggle={(v)=>{v==true?setActive('2'):setActive('')}}
    style={[Style.head,{backgroundColor:Colors.green}]}>
      <CollapseHeader style={Style.headsub}>
        <View style={Style.f}>
        <View style={Style.top}>
        <Text style={Style.h}>Pickup</Text>
        {active=='2'? <Icon name="minus" color="#fff" size={20} />:<Icon name="plus" color="#fff" size={20} />}
        </View>
        <View style={Style.row}>
        <Text style={Style.h2}>2 Bittacy Hill London NW7 </Text>
        </View>
     
        </View>
        
      </CollapseHeader>
      <CollapseBody style={[Style.body,{backgroundColor:Colors.green}]}>
       
        <TouchableOpacity style={Style.row}><Icon name="map-marker" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
        <TouchableOpacity style={Style.row}><Icons name="user-alt-slash" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>

      </CollapseBody>
    </Collapse>
     {/* end */}
          {/* start */}
    <Collapse 
    onToggle={(v)=>{v==true?setActive('3'):setActive('')}}
    style={[Style.head,{backgroundColor:Colors.orange}]}>
      <CollapseHeader style={Style.headsub}>
        <View style={Style.f}>
        <View style={Style.top}>
        <Text style={Style.h}>Drop Off</Text>
{active=='3'? <Icon name="minus" color="#fff" size={20} />:<Icon name="plus" color="#fff" size={20} />}

   
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Heathrow Terminal TW6 </Text>
        </View>
     
        </View>
        
      </CollapseHeader>
      <CollapseBody style={[Style.body,{backgroundColor:Colors.orange}]}>
        <TouchableOpacity style={Style.row}><Icon name="map-marker" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
      
      </CollapseBody>
    </Collapse>
     {/* end */}
  </View>
        </View>
        <View style={Style.footer}>
        <Text style={Style.fh}>FARES : £ 35.00 </Text>
        <Text style={Style.fh}>PAYMENT : ACC/CASH/CC </Text>
        </View>
        </ScrollView>
        </ImageBackground>
      </SafeAreaView>
  
  );
};

export default App