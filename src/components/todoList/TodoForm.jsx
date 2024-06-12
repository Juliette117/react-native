import { useState } from "react";
import { Image, Modal, View, StyleSheet, TextInput, Button } from "react-native";

const TodoForm = (props) => {

    const [textArticle, setTextArticle] = useState('')

    function changeText(text) {
        setTextArticle(text)
    }

    return ( 
        <Modal visible={props.visible}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/512/79/79785.png'}}/>
                <TextInput style={styles.textInput} placeholder="Ajoutez votre article" onChangeText={changeText} value={textArticle} />
            </View>
            <View>
                <Button style={styles.button} title="Ajouter article" onPress={() => props.addArticle(textArticle)} />
            </View>
            <View>
                <Button style={styles.button} title="Cancel" onPress={props.closeModal} color='red' />
            </View>
        </Modal>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        borderRadius: 15
    },
    image: {
        width: 150,
        height: 150
    },
    button: {
        width: '40%',
        height: 150
    }

}) 
 
export default TodoForm;