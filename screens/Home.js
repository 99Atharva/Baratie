import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from '../components/home/Categories';
import { ScrollView } from 'react-native';
import Resturants, { localResturants } from '../components/home/Resturants';
import { useState,useEffect } from 'react';
import { Divider } from "react-native-elements";
import BottomTab from '../components/home/BottomTab';

// Add API for Resturants here just replace comment

export default function Home({navigation}) {
  const [resturantData,setresturantData] = useState(localResturants);
  const [activeTabs,setActiveTab] = useState("Delivery");

  // const getResturant = ()=> {
  //   const api_url = "copy here";

  // const apiOptions = {
  //   headers: {
  //     Auth:`Bearer ${api_key}`,
  //   },
  // };
  
  //   return fetch(api_url,apiOptions).then((res)=>res.json())
  //   .then((json)=>setresturantData(json.data))
  // };

  // useEffect(() => {
  //   getResturant();
  // }, []);
  

  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1 }} >
      <View style={{backgroundColor:"white",padding:15 }} >
      <HeaderTabs />  
      <SearchBar />    
      </View>
      <ScrollView  showsVerticalScrollIndicator={false} >
        <Categories />
        <Resturants resturantData={resturantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>  
    
  );
}