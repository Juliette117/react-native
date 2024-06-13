import { View, Text } from "react-native";

const EcranB = ({navigation, route}) => {

    const value = route.params.value

    return ( 
        <View>
            <Text>
                Ecran B : {value}
            </Text>
        </View>
     );
}
 
export default EcranB;