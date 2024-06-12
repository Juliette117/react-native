import { useState } from "react";
import { Image, Text, View, StyleSheet, Button, ScrollView, SafeAreaView, FlatList, TextInput, Alert } from "react-native";
import TextModal from "./TextModal";
import Home from "./Home";
import Task from "./todoList/Task";

const Exercice1 = () => {

    const contact = {
        nom: "A",
        prenom: "Juliette",
        telephone: "0101010101",
        adresse: "1 rue de la rue 10001 Bourg-en-Bresse"
    }


    function MessageConsole() {
        // console.log('Le bouton a été cliqué');
        setVisible(true)
    }

    function FetchInput(userText) {
        console.log(userText);
        setTextInput(userText)
    }

    const tab = [
        { textTab: contact.nom, id: 1 },
        // {textTab: contact.prenom, id:2},
    ]


    const [textInput, setTextInput] = useState('')
    const [visible, setVisible] = useState(false)

    const handleChange = (field, value) => {
        setTextInput({
            ...textInput,
            [field]: value,
        })
    }

    const handleSubmit = () => {
        console.log('Article ajouté');
    } 

    function RecupInput(text) {
        console.log(text);
        setTextInput(text)
    }

    function closeModal() {
        setVisible(false)
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

                {/* INPUT */}
                <TextInput
                    style={styles.input}
                    placeholder="Tapez votre article !!!"
                    value={textInput}
                    onChangeText={FetchInput}
                />

                {/* BOUTON */}
                
                {/* <Button title="Ajouter" onPress={handleSubmit} /> */}
            
                {/* TABLEAU */}
                <FlatList
                    data={tab}
                    renderItem={itemData => {
                        return (
                            // <Text>{itemData.item.id} : {itemData.item.textTab}</Text>
                            <Text>{textInput}</Text>
                        )
                    }}
                    keyExtractor={(_, index) => {
                        return index
                    }}
                />

            </View>
        </View>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'whitesmoke',
        paddingTop: 100
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
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        color: '#003b6f'

    },
    text: {
        color: 'grey'
    },
    contact: {
        fontWeight: 'bold',
    },
    input: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 7,
        marginBottom: 7,


    }

    
});

export default Exercice1;
