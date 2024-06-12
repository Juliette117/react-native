import { Image, Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Exercice1 = () => {

    const contact =  {
        nom: "A",
        prenom: "Juliette",
        telephone: "0101010101",
        adresse: "1 rue de la rue 10001 Bourg-en-Bresse"
    }

    return ( 
        <SafeAreaView style={styles.container}>

            <ScrollView>
                {/* View = Div  */}

                <View>
                    <View>
                        <Image style={styles.logo} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp' }} />
                        <Text style={styles.title}>Contact</Text>
                        <Text style={styles.text}>Nom : {contact.nom}</Text>
                        <Text style={styles.text}>Prénom: {contact.prenom}</Text>
                        <Text style={styles.text}>Téléphone : {contact.telephone}</Text>
                        <Text style={styles.text}>Adresse : {contact.adresse}</Text>
                        
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
     );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
        backgroundColor:'floralwhite'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 2
        
    },
    text: {
        color: 'grey'
    },
    contact: {
        fontWeight: 'bold',
    },
});
 
export default Exercice1;