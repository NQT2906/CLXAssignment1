import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

export default class SignIn extends Component {
    
    render() {
        return (
            <View style = {styles.signIn}>
                <Text style = {styles.header}>Sign in</Text>
                <TextInput style = {styles.textInput} placeholder = "Your name" underlineColorAndroid ={'transparent'}/>

                <TextInput style = {styles.textInput} placeholder = "Your password" 
                secureTextEntry={true} underlineColorAndroid ={'transparent'}/>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.btnText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signIn: {
        alignSelf: 'stretch',
        backgroundColor: '#59cbbd'
    },

    header: {
        fontSize: 24,
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
    },

    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1,
    },

    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 15,
    },

    btnText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold'
    }   
})