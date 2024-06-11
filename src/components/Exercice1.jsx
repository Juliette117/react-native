import { Image, Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Exercice1 = () => {

    const contact = {
        nom: "A",
        prenom: "Juliette",
        telephone: "0101010101",
        adresse: "1 rue de la rue 10001 Bourg-en-Bresse"
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp' }} />
            <View>
                <Text style={styles.title}>Contact</Text>
                <Text style={styles.text}>Nom : <Text style={styles.contact}>{contact.nom}</Text></Text>
                <Text style={styles.text}>Prénom : <Text style={styles.contact}>{contact.prenom}</Text></Text>
                <Text style={styles.text}>Téléphone : <Text style={styles.contact}>{contact.telephone}</Text></Text>
                <Text style={styles.text}>Adresse : <Text style={styles.contact}>{contact.adresse}</Text></Text>

            </View>

        </View>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'floralwhite'
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
        textAlign: "center",
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

{/* <Image style={styles.logo} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp' }} /> */ }