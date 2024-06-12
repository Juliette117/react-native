import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from "react-native";


const Touches = () => {

    const [actions, setActions] = useState('')
    const chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9]



    function onPress() {
        setActions()
        // Alert.alert()

    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[6]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[3]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[0]}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[7]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[4]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[1]}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[8]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[5]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress()} >
                    <Text style={styles.chiffre}>{chiffres[2]}</Text>
                </TouchableOpacity>
            </View>
        </View>

    );


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 50,
        paddingVertical: 50

    },

    chiffre: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        textAlign: 'center',
        borderRadius: 50,
        margin: 10,
        padding: 5,
        fontSize: 30
    },

    action: {
        backgroundColor: 'grey',
        width: 60,
        height: 60,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 30
    },


})

export default Touches;