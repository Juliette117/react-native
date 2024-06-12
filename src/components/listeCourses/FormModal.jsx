import { useState } from "react";
import { Image, Modal, StyleSheet, TextInput, View } from "react-native";

const FormModal = (props) => {

    const [textArticle, setTextArticle] = useState('')

    function changeText(text) {
        setTextArticle(text)
    }

    return ( 
        <Modal visible={props.visible}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../assets/caddie.png')}></Image>
                <TextInput style={styles.input} placeholder="Ajoutez votre article" onChangeText={changeText} value={textArticle} />
            </View>
            <View>
                <Button style={styles.button} title="Ajouter" onPress={() => props.addArticle(textArticle)} />
            </View>
            <View>
                 <Button style={styles.button} title="Annuler" onPress={props.closeModal} color='red' />
            </View>
       
        </Modal>
     );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 7
    },

    image: {
        width: 150,
        height: 150,
    },

    button:{
        width:40,
        height:50
    }

})
 
export default FormModal;