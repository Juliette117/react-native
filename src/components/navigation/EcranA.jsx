import { useLayoutEffect } from "react";
import { Button, Linking, Text } from "react-native";

const EcranA = ({navigation}) => {
    function handleCallPress() {
        Linking.openURL('tel:911')
    }

    // useLayoutEffect à la même fonctionnalité qu'un useEffect classique
    // il a pour subtilité de se déclencher AVANT le rendu du composant
    useLayoutEffect(() => {
        navigation.setOptions({title: 'Call 911'})
    })

    return ( 
        <>
            <Text>Ecran A</Text>
            <Button title="call 911" onPress={handleCallPress}/>
        </>
     );
}
 
export default EcranA;