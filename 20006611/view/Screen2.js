import { View, Text,Image, TextInput } from 'react-native';
import React from 'react';

export default function Screen2({navigation,route}) {
   
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}> 
      <View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:'10px'}}>
        <Image source={require('../assets/user.png')} style={{width:'50px',height:'50px',marginLeft:'10px'}} />
        <Text style={{justifyContent:'center',alignItems:'center', width:'90px',marginLeft:'10px'}}>Hi Thinh   Have a good day </Text>
        
        <Image style={{width:'30px',height:'30px',marginLeft:'155px'}} source={require('../assets/arrow.png')}/>



      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Add your job</Text>
        <TextInput style={{backgroundColor:'red',width:'90%',height:'50px',borderRadius:"1px"}}>


        </TextInput>


      </View>
    </View>
  )
}

