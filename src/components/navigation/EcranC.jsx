import { Text, View, Button } from "react-native"


const EcranC = ({navigation}) => {
    return ( 
        <View>
            <Text>
                Ecran C
            </Text>
            <Button 
                title={"Aller vers l'écran A"}
                onPress={() => navigation.navigate('Ecran A')}
            />
            <Button 
                title="Aller vers l'écran B"
                onPress={() => navigation.navigate('Ecran B', {value: 'Hello'}) }
            />
             <Button 
                title="Aller vers l'écran B (suite) "
                onPress={() => navigation.navigate('Ecran B', {value: 'Toto'}) }
            />
            
        </View>
     );
}


 
export default EcranC;