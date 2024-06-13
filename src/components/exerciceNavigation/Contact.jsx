import { useLayoutEffect } from "react";
import { View, Text } from "react-native";


const Contact = ({navigation, route, nom}) => {

    const value = route.params.value

    function handleCallPress() {
        Linking.openURL('tel:01')
    }

    useLayoutEffect(() => {
        navigation.setOptions()
    })
    return ( 
        <View>
            <Text>
                Contact: {value}
            </Text>
        </View>
     );
}
 
export default Contact;




