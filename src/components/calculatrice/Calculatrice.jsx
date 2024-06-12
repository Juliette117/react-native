import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Touche from "./Touche";

const Calculatrice = () => {
    const [firstNumber, setFirstNumber] = useState('0')
    const [secondNumber, setSecondNumber] = useState('0')
    const [operation, setOperation] = useState('')

    function numberPress(number){
        if (firstNumber != 0){
            setFirstNumber(firstNumber + number)
        } else {
            setFirstNumber(number)
        }
    }

    function operationPress(operateur) {
        setOperation(operateur)
        setSecondNumber(firstNumber)
        setFirstNumber("")
    }

    function resultPress() {
        let resultat
        switch(operation){
            case "+":
                resultat = parseFloat(secondNumber) + parseFloat(firstNumber)
                setFirstNumber(resultat)
            break;
            case "-":
                resultat = parseFloat(secondNumber) - parseFloat(firstNumber)
                setFirstNumber(resultat)
            break;
            case "/":
                resultat = parseFloat(secondNumber) / parseFloat(firstNumber)
                setFirstNumber(resultat)
            break;
            case "X":
                resultat = parseFloat(secondNumber) * parseFloat(firstNumber)
                setFirstNumber(resultat)
            break;
        }
    }

    function clear(){
        setFirstNumber('0')
    }

    return ( 
        <View style={styles.calculatrice}>
            <View>
                <Text style={styles.displayText}>{firstNumber}</Text>
            </View>
            <View style={styles.row}>
                <Touche title={"AC"} onPress={clear}/>
                <Touche title={"^"}/>
                <Touche title={"%"}/>
                <Touche title={"/"} onPress={() => operationPress('/')} />
            </View>
            <View style={styles.row}>
                <Touche title={"7"} isWhite onPress={() => numberPress("7")}/>
                <Touche title={"8"} isWhite onPress={() => numberPress("8")}/>
                <Touche title={"9"} isWhite onPress={() => numberPress("9")}/>
                <Touche title={"X"} onPress={() => operationPress('X')} />
            </View>
            <View style={styles.row}>
                <Touche title={"4"} isWhite onPress={() => numberPress("4")}/>
                <Touche title={"5"} isWhite onPress={() => numberPress("5")}/>
                <Touche title={"6"} isWhite onPress={() => numberPress("6")}/>
                <Touche title={"-"} onPress={() => operationPress('-')} />
            </View>
            <View style={styles.row}>
                <Touche title={"1"} isWhite onPress={() => numberPress("1")}/>
                <Touche title={"2"} isWhite onPress={() => numberPress("2")}/>
                <Touche title={"3"} isWhite onPress={() => numberPress("3")}/>
                <Touche title={"+"} onPress={() => operationPress('+')} />
            </View>
            <View style={styles.row}>
                <Touche title={"."} isWhite/>
                <Touche title={"0"} isWhite onPress={() => numberPress("0")}/>
                <Touche title={"Del"} isWhite onPress={clear}/>
                <Touche title={"="} onPress={resultPress} />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    calculatrice: {
        width: '100%',
        position: 'absolute',
        bottom: 50
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    displayText: {
        fontSize: 90,
        fontWeight: "300",
        color: "grey",
        alignSelf: "flex-end",
        marginRight: 20
    }
})
 
export default Calculatrice;