import { StyleSheet, Text, View } from "react-native";
import Touches from "./Touches";

const Calculatrice = () => {

    // const [result, setResult] = useState('0')

    return ( 
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Calculatrice</Text>
            </View>
              <Touches/>
        </View>
      
       
        
        
     );
}

const styles= StyleSheet.create ({
    
    container:{
        flex:1,
        backgroundColor:'black'
    },

    title:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight:'bold',
        marginTop: 20
    }
})
 
export default Calculatrice;