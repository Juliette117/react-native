import { Button, StyleSheet, View } from "react-native";

const Article = (props) => {
    return ( 
        <View style={styles.articleItem}>
            <Button title={props.text} onPress={() => props.deleteArticle(props.id)} color={'#5e0acc'} />
        </View>
     );
}

const styles = StyleSheet.create({

    articleItem: {
        margin: 7,
        padding: 7,
        borderRadius: 7
    }
})
 
export default Article;