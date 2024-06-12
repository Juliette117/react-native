import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Exercice1 from "./components/Exercices";

const App = () => {
    return ( 
    // SafeAreaView est utilisé pour s'assurer que le contenu respect les zones sûres de l'appareil (Comme l'encoche sur IOS)
    <SafeAreaView style={styles.container}>
        {/* ScrollView permet de faire défiler le contenu qui dépasse la taille de l'écran */}
        <ScrollView>
            {/* View permet de créer des mises en pages équivalent au <div> */}
            <View>
                <Text>Les composants de base à react native</Text>
                <Text>Un autre texte</Text>
            </View>
            <View>
                <Text>Image</Text>
                <Image style={styles.image} source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp',}}/>
            </View>
            <Home/>
            <Exercice1 />
        </ScrollView>
    </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100
    },
    container: {
        flex:1,
        marginTop: 25
    }
})
 
export default App;