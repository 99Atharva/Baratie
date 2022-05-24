import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods =[
    {
        name:"Cheese Pizza",
        image_url:"https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Gate keepers of hell intently sniff hand kitty loves pigs. Lick butt and make a weird face russian blue. Instead of drinking water from the cat bowl",
        price:"$20",
    },
    {
        name:"Paneer-chilly",
        image_url:"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Gate keepers of hell intently sniff hand kitty loves pigs. Lick butt and make a weird face russian blue. Instead of drinking water from the cat bowl",
        price:"$20",
    },
    {
        name:"Tandori",
        image_url:"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Gate keepers of hell intently sniff hand kitty loves pigs. Lick butt and make a weird face russian blue. Instead of drinking water from the cat bowl",
        price:"$20",
    },
    {
        name:"Pasta",
        image_url:"https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Gate keepers of hell intently sniff hand kitty loves pigs. Lick butt and make a weird face russian blue. Instead of drinking water from the cat bowl",
        price:"$20",
    },
    {
        name:"Paneer-Tikka",
        image_url:"https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Gate keepers of hell intently sniff hand kitty loves pigs. Lick butt and make a weird face russian blue. Instead of drinking water from the cat bowl",
        price:"$20",
    },
    {
        name:"Korean-noddles",
        image_url:"https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Gate ystftyf f keepers of hell intently sniff hand kitty loves pigs. Lick butt and make a weird face russian blue. Instead of drinking water from the cat bowl",
        price:"$20",
    },
    {
        name:"Special",
        image_url:"https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Gate keepers of hell intently sniff hand kitty loves pigs. Lick butt and make a weird face russian blue. Instead of drinking water from the cat bowl",
        price:"$20",
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
  });

  export default function MenuItems() {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          {foods.map((food, i) => (
            <View key={i}>
                <View style={styles.menuItemStyle}>
                <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = (props) => (
    <View style={{ width: 230, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.name}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
  
  const FoodImage = (props) => (
    <View>
      <Image
        source={{ uri: props.food.image_url }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
        }}
      />
    </View>
  );

