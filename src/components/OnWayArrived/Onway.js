
import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView,StatusBar, Button} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import arrowRight from './assets/arrow-right.png';

import SwipeButton from 'rn-swipe-button-rectangular';
import Style from './OnWayStyle';


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
       onSwipeStart={() => alert('Swipe started!')}
       onSwipeSuccess={() =>
        alert('Submitted successfully!')
      }
      onSwipeFail={() => alert('Incomplete swipe!')}
      />
     
        <View style={Style.container}>
        
      
        <View style={Style.view}>
    <Collapse 
    onToggle={(v)=>{v==true?setActive('1'):setActive('')}}
    style={{borderWidth:1,borderRadius:10,margin:5,padding:2,backgroundColor:'#E6E6E6'}}>
      <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,}}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
        <Text>asdasdsa11</Text>
{active=='1'?
        <Icon name="minus" color="#3b5998" size={20} />
      :  
      <Icon name="plus" color="#3b5998" size={20} />
    }

   
        </View>
        
      </CollapseHeader>
      <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#E6E6E6'}}>
       
          <Text>Profession: Boxer</Text>
      </CollapseBody>
    </Collapse>
  </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  
  );
};

export default App