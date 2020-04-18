import React , { Component } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet 
} from "react-native"

export default class ColorForm extends Component {
    render(){
        return (
            <View style={StyleSheet.container}>
                <TextInput style={StyleSheet.TextInput} />
                <Text style={StyleSheet.button}>Add</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        height: 50
    },
    txtInput: {

    },
    button: {

    }
})