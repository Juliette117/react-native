import { Image, Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";


const App = () => {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                {/* View = Div  */}

                <View>
                    <View>
                        <Text style={styles.text}>Image</Text>
                        <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        color: 'blue'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 70,
        height: 70,
        margin: 5
    },
    text: {
        color: 'blue'
    },
});

export default App;