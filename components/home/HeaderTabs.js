import { View, Text} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");

return (
    <View style={{flexDirection:"row", alignSelf:"center" , marginTop:40, }}>
       <HearderButton text="Delivery" btncolor="black" textcolor="white"
       activeTab={activeTab}
       setActiveTab={setActiveTab} />
       <HearderButton text="Pickup"  btncolor="white" textcolor="black"
       activeTab={activeTab}
       setActiveTab={setActiveTab} />
    </View>
  );
}

const HearderButton = (props)=> (
<TouchableOpacity style={{
    backgroundColor:props.activeTab === props.text ? "black": "white",
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30,
    }} 
        onPress={()=> props.setActiveTab(props.text)}
    >

    <Text style={{color:props.activeTab === props.text ? "white": "black",fontSize:15 , fontWeight:"bold" }}>
    {props.text}
    </Text>
</TouchableOpacity>
    );