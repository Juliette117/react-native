import { Text, Button, Modal, View, StyleSheet } from "react-native";

const Task = (props) => {
    return ( 
        <View style={styles.articleItem}>
            <Button title={props.text} onPress={() => props.deleteArticle(props.id)} color={'#5e0acc'} />
        </View>
     );
}
 
const styles = StyleSheet.create({
    articleItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
    }
})
export default Task;