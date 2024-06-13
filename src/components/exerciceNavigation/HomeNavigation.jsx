
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./Contact";
import ContactList from "./ContactList";


const Stack = createNativeStackNavigator()


const HomeNavigation = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="ContactList">
                <Stack.Screen name="Contact" component={Contact} options={{ title: "Contact" }}></Stack.Screen>
                <Stack.Screen name="ContactList" component={ContactList} options={{ title: "Contacts" }}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    );
}




export default HomeNavigation;