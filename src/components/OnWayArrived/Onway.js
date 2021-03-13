
import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView,StatusBar, Button} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import arrowRight from './assets/arrow-right.png';

import SwipeButton from 'rn-swipe-button-rectangular';
import Style from './OnWayStyle';
import Colors from '../../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';


const App = () => {
 
  let [active, setActive] = useState('');

  const TwitterIcon = () => <Icon name="play" color="#3b5998" size={30} />;

  return (
    
        <SafeAreaView style={Style.container} >
<ScrollView>
<View style={Style.lis}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>On The Way</Text>
                </View>
      <SwipeButton 
     
       title="Slide to confirm"
       thumbIconBackgroundColor="#FFFFFF"
       railBackgroundColor="#00cc00"
       railFillBackgroundColor="red"
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
{active=='1'?
        <Icon name="minus" color="#fff" size={20} />
        :  
        <Icon name="plus" color="#fff" size={20} />
      }

   
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Details : </Text>
      <Text style={Style.h2}>Details</Text>
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Details : </Text>
      <Text style={Style.h2}>Details</Text>
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
        <Text style={Style.h}>Details</Text>
        {active=='2'? <Icon name="minus" color="#fff" size={20} />:<Icon name="plus" color="#fff" size={20} />}
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
      <CollapseBody style={[Style.body,{backgroundColor:Colors.green}]}>
       
        <TouchableOpacity style={Style.row}><Icon name="male" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
        <TouchableOpacity style={Style.row}><Icon name="briefcase" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
        <TouchableOpacity style={Style.row}><Icon name="mobile" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>

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
        <Text style={Style.h}>Details</Text>
{active=='3'? <Icon name="minus" color="#fff" size={20} />:<Icon name="plus" color="#fff" size={20} />}

   
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Details : </Text>
      <Text style={Style.h2}>Details</Text>
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Details : </Text>
      <Text style={Style.h2}>Details</Text>
        </View>
        <View style={Style.row}>

      <Text style={Style.h2}>Details : </Text>
      <Text style={Style.h2}>Details</Text>
        </View>
        </View>
        
      </CollapseHeader>
      <CollapseBody style={[Style.body,{backgroundColor:Colors.orange}]}>
        <TouchableOpacity style={Style.row}><Icon name="male" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
        <TouchableOpacity style={Style.row}><Icon name="briefcase" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>
        <TouchableOpacity style={Style.row}><Icon name="mobile" color="#fff" size={30} /><Text style={Style.h2}> 3 </Text></TouchableOpacity>

      </CollapseBody>
    </Collapse>
     {/* end */}
  </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  
  );
};

export default App