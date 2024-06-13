import { StyleSheet, Text, View } from "react-native";
import Calculatrice from "./Calculatrice";

const Rendu = () => {
    return ( 
        <View style={styles.container}>
            <View>
                <Text style={styles.titre}>Calculatrice</Text>
            </View>
            <Calculatrice />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    titre: {
        fontSize: 32,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        marginTop: 10
    }
})
 
export default Rendu;