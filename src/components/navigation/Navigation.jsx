
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EcranA from "./EcranA";
import EcranB from "./EcranB";
import EcranC from "./EcranC";


const Stack = createNativeStackNavigator()

const Navigation = () => {
    
    return ( 
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Ecran C">
                <Stack.Screen name="Ecran A" component={EcranA} options={{title: "Page A"}}></Stack.Screen>
                <Stack.Screen name="Ecran B" component={EcranB} options={{title: "Page B"}}></Stack.Screen>
                <Stack.Screen name="Ecran C" component={EcranC} options={{title: "Home"}}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
     );
}



 
export default Navigation;