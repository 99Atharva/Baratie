import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localResturants = [
    {
      name:"GrillIn",
      image:"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.3,
    },
    {
      name:"CG-14",
      image:"https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.7,
    },
    {
      name:"Pink Door",
      image:"https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.8,
    },
    {
      name:"Blue Diamond",
      image:"https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 3.2,
    },
    {
      name:"Sigri",
      image:"https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      rating: 2.8,
    },
    {
      name:"Meera Resort",
      image:"https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      rating: 4.9,
    },
    {
      name:"Hayatt",
      image:"https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 5, 
       },
  ];

export default function Resturants({navigation,...props}) {
  return (
    <>
    {props.resturantData.map((resturant,i)=>(
    <TouchableOpacity key={i} activeOpacity={1} style={{marginBottom:30}} onPress={() => navigation.navigate('ResturantDetail')} >     
      <View  style={{marginTop:10,padding:15,backgroundColor:"white"}} > 
        <ResturantsImage image={resturant.image} />
        <ResturantsInfo  rating={resturant.rating} name={resturant.name} />             
      </View>       
    </TouchableOpacity>
    ))}
    </>

  )
};

const ResturantsImage =(props)=> (
    <>
    <Image source={{uri: props.image}}
    style={{
    width:"100%",
    height:180,
    }} />
    <TouchableOpacity style={{
        position:"absolute", right:20 ,top: 20
    }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
     </TouchableOpacity>
     </>
);

const ResturantsInfo = (props)=> (
<View style={{ 
  flexDirection:"row",
  marginTop:10,
  justifyContent:"space-between",
  alignItems:"center",

}}>
  <View>
  <Text style={{fontWeight:"bold"  }} >{props.name}</Text>
<Text  style={{
  color:"gray",
  fontSize:13,
}} > 30-40 . mins
</Text>
  </View>
  <View style={{
    backgroundColor:"#eee",
    alignItems:"center",
    borderRadius:15,   
  }} >
   <Text style={{padding:5}} >{props.rating}</Text>
  </View>

</View>

);