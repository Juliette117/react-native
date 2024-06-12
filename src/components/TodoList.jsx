import { Text, Button, Modal, View, StyleSheet } from "react-native";

const TodoList = (props) => {
    return ( 
        <Modal visible={props.visible}>
            {props.children}
            <View style={styles.modal}>
                
                <Button 
                    title="Ajouter un aritce"
                    onPress={props.closeModal}
                />
            </View>
        </Modal>
     );

     
}

const styles = StyleSheet.create({

    modal: {
        
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        paddingBottom: 50,
    }
})

export default TodoList;