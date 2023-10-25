import { View, Text, Pressable,Image} from 'react-native';
import React from 'react';
import Screen2 from './Screen2';
export default function Screen1({navigation}) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
      

      <Image  source={require('../assets/icon.png')}  />
      
      <Pressable  
      onPress={() => navigation.navigate('Screen2')} 
      style={{width:'100%',height:'100%'}}
      > <Text style={{width:'100%',height:'100%'}}  >Home</Text></Pressable>

      

      
     
    </View>
  )
}
