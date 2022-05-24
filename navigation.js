import Home from "./screens/Home"
import ResturantDetail from "./screens/ResturantDetail"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function RootNavigation(){
    const Stack = createStackNavigator();

    const screenOptions ={
        headerShown : false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name="ResturantDetail" component={ResturantDetail} />
            </Stack.Navigator>

        </NavigationContainer>
    )

}