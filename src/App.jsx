import { useState } from "react";
import { Image, Text, View, StyleSheet, ScrollView, SafeAreaView, FlatList, Button, } from "react-native";
import Article from "./components/Article";
import FormModal from "./components/FormModal";


const App = () => {

    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [articles, setArticles] = useState([])

    function openModal() {
        setModalIsVisible(true)
    }

    function closeModal() {
        setModalIsVisible(false)
    }

    function addArticle(article) {
        setArticles((articlesCurrent) => {
            return [...articlesCurrent, {text: article, id: Date.now()}]
        })
        closeModal()
    }

    function deleteArticle(id) {
        setArticles((articlesCurrent) => {
            return [...articlesCurrent.filter((item) => item.id != id)]
        })
    }


    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <View>
                    <View>
                        {/* <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> */}
                        <Text style={styles.title}>Ma liste de course :</Text>
                        <FlatList
                            data={articles}
                            renderItem={(itemData) => {
                                return(
                                    <Article 
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
                                return <Text style={styles.message}>Aucun article a été ajouté</Text>
                            } }
                        />

                        <Button title="Ajouter un article" onPress={openModal}></Button>

                        <FormModal 
                            visible={modalIsVisible}
                            closeModal={closeModal}
                            addArticle={addArticle}
                        />

                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 20
    },

    logo: {
        width: 70,
        height: 70,
        margin: 5
    },
    title:{

    },
    message:{

    }
    
});

export default App;