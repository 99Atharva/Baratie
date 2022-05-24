import { View, Text, Image } from 'react-native'
import React from 'react';

const image = "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const title = "Farmhouse Kitchen";
const description = "Thai . Comfort Food . $$ . 4⭐";

export default function About() {
  return (
    <View>
      <ResturantImage image = {image} />
      <ResturantTitle title={title} />
      <ResturantDescription description={description} />
    </View>
  );
}

const ResturantImage =(props)=> (

<Image source={{uri:props.image}} style={{width:"100%", height:180}} />
    );


const ResturantTitle = (props) => (
<Text style={{
    fontSize:29,
    fontWeight:"600",
    marginTop:10,
    marginHorizontal:15,
}} >{props.title} </Text>
); 

const ResturantDescription = (props) => (
<Text style={{
    marginTop:10,
    fontWeight:"400",
    fontSize:15.5,
    marginHorizontal:15,
}}>{props.description} </Text>
); 