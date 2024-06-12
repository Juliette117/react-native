import { useState } from "react";
import { Button, FlatList, Text, View, StyleSheet } from "react-native";
import Task from "./Task";
import TodoForm from "./TodoForm";


const TodoList = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [articles, setArticles] = useState([])

    function openModal(){
        setModalIsVisible(true)
    }

    function closeModal(){
        setModalIsVisible(false)
    }

    function addArticle(article) {
        setArticles((articlesCurrent) => {
            return [...articlesCurrent, {text: article, id: Date.now()}]
        })
        closeModal()
    }

    function deleteArticle(id){
        setArticles((articlesCurrent) => {
            return articlesCurrent.filter((item) => item.id != id)
        })
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Ma liste de course :</Text>
            <FlatList
                data={articles}
                renderItem={(itemData) => {
                    return (
                        <Task 
                            text={itemData.item.text} 
                            id={itemData.item.id}
                            deleteArticle={deleteArticle}
                        />
                    )
                }}
                keyExtractor={(item) => {
                    return item.id
                }}
                ListEmptyComponent={() => {
                    return <Text style={styles.message}>Aucun article dans la liste</Text>
                }}
            />
            <Button title="Ajouter un article" onPress={openModal} />
            <TodoForm 
                visible={modalIsVisible} 
                closeModal={closeModal} 
                addArticle={addArticle}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    message : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})

 
export default TodoList;