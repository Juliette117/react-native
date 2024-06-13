import { Text, View, Button, FlatList, Pressable, Alert } from "react-native"


const ContactList = ({ navigation }) => {

    const contacts = [

        {
            key: '1',
            nom: "Doe",
            prenom: "John",
            telephone: "0101010101",
        },
        {
            key: '2',
            nom: "Johnson",
            prenom: "John",
            telephone: "0101010101",
        },
        {
            key: '3',
            nom: "Brown",
            prenom: "John",
            telephone: "0101010101",
        },
        {
            key: '4',
            nom: "Wilson",
            prenom: "John",
            telephone: "0101010101",
        },
        {
            key: '5',
            nom: "Taylor",
            prenom: "John",
            telephone: "0101010101",
        },
        {
            key: '6',
            nom: "Anderson",
            prenom: "John",
            telephone: "0101010101",
        },

    ]


    return (
        <View>
            <Pressable onPress={() => navigation.navigate('Contact', { value : 'Test' })}>
                <FlatList
                    data={contacts}
                    renderItem={({ item }) => <Text>{item.nom}</Text>}
                    keyExtractor={(item) => item.id}
                />
            </Pressable>

        </View>


    );
}



export default ContactList;